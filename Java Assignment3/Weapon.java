// most up to date //
import sheffield.*;

public class Weapon {

   private final static int MAX_NUMBER=6;
   private static Weapon [] allTheWeapons;

   public static void initializeThem() {
      //Fill in this method body with your code for Task 1
      EasyReader fileInput = new EasyReader("weapons.txt");
      allTheWeapons = new Weapon[MAX_NUMBER];
      for (int i = 0; i < MAX_NUMBER; i++){
          String txtWeapon = fileInput.readString();
          Weapon weapon = new Weapon(txtWeapon);
          allTheWeapons[i] = weapon;
      }
      listTheWeapons();
   }

   public static Weapon askWhichOne(EasyReader keyboard) {
     //Replace in this method body with your code for Task 4
    String input = 
    keyboard.readString("With what weapon? ");
    // Loop through the allTheSuspects array and find the Suspect object
    // with the matching name (accounts for different ways user could type)
    for (Weapon weapon : allTheWeapons) {
      if (input.equalsIgnoreCase(weapon.weapon.toString()) 
          || input.equalsIgnoreCase("the " + weapon.weapon.toString()) 
          || input.equalsIgnoreCase("the_" + weapon.weapon.toString())) {
          return weapon;
      }
    }
     return null;
   }

   public static void listTheWeapons()  {
     System.out.print("The weapons are "+allTheWeapons[0]);
     for (int i = 1; i<MAX_NUMBER-1; i++)
        System.out.print(", "+allTheWeapons[i]);
     System.out.println(" and "+allTheWeapons[MAX_NUMBER-1]);
   }

   public static Weapon pickedAtRandom() {
     //Replace in this method body with your code for Task 3
    int randomIndex = (int)(Math.random() * allTheWeapons.length);
    return allTheWeapons[randomIndex];
   }

   private String weapon;

   private Weapon (String n)  {  weapon = n;  }

   public String toString()  {  return "the "+weapon.toLowerCase();  }

}
