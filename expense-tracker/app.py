import os

from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
from flask import render_template, url_for, flash, redirect
from forms import RegistrationForm, LoginForm
from flask_migrate import Migrate
from flask_login import login_user
from flask_login import logout_user
from flask_login import login_required
from flask_login import current_user
from sqlalchemy.exc import IntegrityError
from extensions import db
from models import User
from models import Expense
from dotenv import load_dotenv

load_dotenv()


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///expenses.db'
app.config['SECRET_KEY'] = os.environ.get('FLASK_SECRET_KEY', 'defaultsecretkey')
app.config['WTF_CSRF_SECRET_KEY'] = os.environ.get('WTF_CSRF_SECRET_KEY', 'defaultcsrfsecretkey')
db.init_app(app)
migrate = Migrate(app, db)


login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'


@app.route('/')
def index():
    if current_user.is_authenticated:
        return redirect(url_for('list_expenses'))
    return redirect(url_for('login'))

@app.cli.command("initdb")
def initdb_command():
    """Creates the database tables."""
    db.create_all()
    print("Initialized the database.")

@app.route('/add-expense', methods=['GET', 'POST'])
def add_expense():
    if request.method == 'POST':
        name = request.form.get('name')
        amount = request.form.get('amount')
        category = request.form.get('category')
        date = request.form.get('date')
        
        new_expense = Expense(
            name=name,
            amount=amount,
            category=category,
            date=date,
            user_id=current_user.id
        )
        db.session.add(new_expense)
        db.session.commit()
        flash('Expense added successfully!', 'success')
        return redirect(url_for('list_expenses'))
    return render_template('add_expense.html')



@app.route('/expenses', methods=['GET'])
@login_required
def list_expenses():
    expenses = Expense.query.filter_by(user_id=current_user.id).all()
    return render_template('expenses.html', expenses=expenses)

@app.route('/expense/edit/<int:expense_id>', methods=['GET', 'POST'])
def edit_expense(expense_id):
    expense = Expense.query.get_or_404(expense_id)
    if request.method == 'POST':
        # Update the expense with the new data from the form
        expense.name = request.form['name']
        expense.amount = request.form['amount']
        expense.category = request.form['category']
        expense.date = request.form['date']
        db.session.commit()
        flash('Expense updated successfully!', 'success')
        return redirect(url_for('list_expenses'))
    return render_template('edit_expense.html', expense=expense)


@app.route('/expense/<int:expense_id>', methods=['PUT'])
def update_expense(expense_id):
    expense = Expense.query.get_or_404(expense_id)
    data = request.get_json()
    if 'name' in data:
        expense.name = data['name']
    if 'amount' in data:
        expense.amount = data['amount']
    if 'category' in data:
        expense.category = data['category']
    if 'date' in data:
        expense.date = data['date']
    
    db.session.commit()
    return jsonify({"message": "Expense updated successfully!"})

@app.route('/expense/<int:expense_id>/delete', methods=['POST'])
def delete_expense(expense_id):
    expense = Expense.query.get_or_404(expense_id)
    db.session.delete(expense)
    db.session.commit()
    flash('Expense deleted successfully!', 'success')
    return redirect(url_for('list_expenses'))

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

@app.route("/register", methods=['GET', 'POST'])
def register():
    form = RegistrationForm()
    if form.validate_on_submit():
        user = User(username=form.username.data, email=form.email.data)
        user.set_password(form.password.data)
        try:
            db.session.add(user)
            db.session.commit()
            flash('Your account has been created!', 'success')
            login_user(user)
            return redirect(url_for('index'))
        except IntegrityError:  # This will catch unique constraint errors
            db.session.rollback()
            flash('That email or username is already taken. Please choose a different one.', 'danger')
        except:
            db.session.rollback()
            flash('An error occurred. Please try again.', 'danger')
    return render_template('register.html', title='Register', form=form)

@app.route("/login", methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(email=form.email.data).first()
        if user and user.check_password(form.password.data):
            login_user(user)
            flash('You have been logged in!', 'success')
            return redirect(url_for('index'))
        else:
            flash('Login Unsuccessful. Please check email and password', 'danger')
    return render_template('login.html', title='Login', form=form)

@app.route("/logout")
def logout():
    logout_user()
    flash('You have been logged out.', 'success')
    return redirect(url_for('login'))

# General error handlers
@app.errorhandler(404)
def not_found_error(error):
    return render_template('404.html'), 404

@app.errorhandler(500)
def internal_error(error):
    db.session.rollback()  # In case the error is related to the database
    return render_template('500.html'), 500

if __name__ == '__main__':
    app.run(debug=True)