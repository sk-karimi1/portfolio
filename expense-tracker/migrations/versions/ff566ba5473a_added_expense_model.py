"""Added Expense model

Revision ID: ff566ba5473a
Revises: 
Create Date: 2023-08-08 19:57:31.754182

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ff566ba5473a'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('expense', schema=None) as batch_op:
        batch_op.add_column(sa.Column('user_id', sa.Integer(), nullable=True))
        batch_op.create_foreign_key('fk_expense_user', 'user', ['user_id'], ['id'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('expense', schema=None) as batch_op:
        batch_op.drop_constraint('fk_expense_user', type_='foreignkey')
        batch_op.drop_column('user_id')

    # ### end Alembic commands ###
