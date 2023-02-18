// most up to date //
import sheffield.*;

public class Scenario {

   private Suspect attacker;
   private Room attackedIn;
   private Weapon attackedWith;

   public void setAtRandom() {
      attackedWith = Weapon.pickedAtRandom();
      attacker = Suspect.pickedAtRandom();
      attackedIn = Room.pickedAtRandom();
   }

   public void setByAsking(EasyReader keyboard) {
      attackedIn = Room.askWhichOne(keyboard);
      attacker = Suspect.askWho(keyboard);
      attackedWith = Weapon.askWhichOne(keyboard);
   }

   public void askAboutWrongOnes(Scenario rightOne, EasyReader keyboard) {
     if  (  attackedIn != rightOne.attackedIn )
          attackedIn = Room.askWhichOne(keyboard);
     if  (  attacker != rightOne.attacker  )
          attacker = Suspect.askWho(keyboard);
     if  (  attackedWith != rightOne.attackedWith  )
          attackedWith = Weapon.askWhichOne(keyboard);
   }

   public boolean hasBeenDiscovered(Scenario guess) {
     //Replace this method body by your code for Task 5
     boolean correctGuess = true;
     // checks to see if the user has put the right guesses
     if (guess.attacker == null ||
     !guess.attacker.equals(this.attacker)) {
      System.out.println
      ("The victim was not attacked by " + guess.attacker);
      correctGuess = false;
      }

     if (guess.attackedIn == null ||
     !guess.attackedIn.equals(this.attackedIn)) {
         System.out.println
         ("The victim was not attacked in " + guess.attackedIn);
         correctGuess = false;
      } 

     if (guess.attackedWith == null ||
     !guess.attackedWith.equals(this.attackedWith)) {
         System.out.println
         ("The victim was not attacked with " + guess.attackedWith);
         correctGuess = false;
      }
     if (!correctGuess){
      return false;
     }
     return correctGuess;
  }
  
  public boolean isUnknown() {
      return attacker == null || attackedIn == null || attackedWith == null;
  }

  public String toString() {
    return  "The victim was attacked in " + attackedIn + " by " +
                attacker + " with "+ attackedWith;
  }

}
