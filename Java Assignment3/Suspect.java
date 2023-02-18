// most up to date //
import sheffield.*;

public class Suspect {

   private final static int MAX_NUMBER=10;

   private static Suspect [] allTheSuspects;
   private static int numberOfSuspects;

  public static void initializeEveryone() {
      //Fill in this method body with your code for Task 1
      Suspect[] tempArray = new Suspect[MAX_NUMBER];
      numberOfSuspects = 0;
      EasyReader fileTxt = new EasyReader("suspects.txt");
      String line = fileTxt.readString();

      // continues to read file until reaches the end of file
      // and finds number of suspects in the file.
      while (!line.isEmpty()){
        Suspect newSuspect = new Suspect(line);
        tempArray[numberOfSuspects] = newSuspect;
        numberOfSuspects++;
        line = fileTxt.readString();
      }
      // creates an array with the correct number of suspects in file
      // and copies from temp array into new array.
      allTheSuspects = new Suspect[numberOfSuspects];
      for (int i = 0; i < numberOfSuspects; i++){
        allTheSuspects[i] = tempArray[i];
      }
    
      listTheSuspects();
      
  }

   public static Suspect askWho(EasyReader keyboard)  {
     //Replace in this method body with your code for Task 4
     String name = keyboard.readString("Who do you accuse? ");
 
     // Loop through the allTheSuspects array and find the Suspect object
     // with the matching name (accounts for "_" being used instead of " ")
     for (int i = 0; i < numberOfSuspects; i++) {
         if (allTheSuspects[i].name.equalsIgnoreCase(name)
            || allTheSuspects[i].name.equalsIgnoreCase(name.replace(
              "_", " "))) {
             // Return the Suspect object if it is found
             return allTheSuspects[i];
         }
     }
 
     // If no Suspect object with the matching name is found,
     // return null
     return null;
   }

   public static void listTheSuspects()  {
     System.out.print("The suspects are "+allTheSuspects[0].toString());
     for (int i = 1; i<numberOfSuspects-1; i++)
        System.out.print(", "+allTheSuspects[i].toString());
     System.out.println
     (" and "+allTheSuspects[numberOfSuspects-1].toString());
   }

   public static Suspect pickedAtRandom() {
     //Replace in this method body with your code for Task 3
    int randomIndex = (int)(Math.random() * numberOfSuspects);
    return allTheSuspects[randomIndex];
   }

   private String name;

   private Suspect (String n)  {  name = n;  }

   public String toString()  {  return name;  }

}
