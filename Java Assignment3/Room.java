// most up to date //
import sheffield.*;

public enum Room {

   KITCHEN,
   BALLROOM,
   CONSERVATORY,
   BILLIARD_ROOM,
   LIBRARY,
   STUDY,
   HALL,
   LOUNGE,
   DINING_ROOM;

   static int roomCount = Room.values().length;

   static Room askWhichOne(EasyReader keyboard)  {
    String input = keyboard.readString("Where are you? ").toLowerCase();
    for (Room room : Room.values()) {
      if (input.contains(
        room.name().toLowerCase().replace("_", " "))) {
            return room;
      }
    }
    return null;
   }

   static Room pickedAtRandom() {
     //Replace in this method body with your code for Task 3
    int randomIndex = (int)(Math.random() * roomCount);
    return Room.values()[randomIndex];
   }

   public static void listThem() {
     //Replace this for Task 2
    System.out.print("The rooms are " + Room.values()[0].toString());
    for (int i = 1; i < roomCount - 1; i++) {
      System.out.print(", " + Room.values()[i].toString());
    }
    System.out.println(" and " + Room.values()[roomCount - 1].toString());
   }

   public String toString() {
     return "the "+name().toLowerCase().replace("_"," ");
   }

}
