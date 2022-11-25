// A java program written by (Name must be anonymous), consisting of 3 tasks,
// task 1, task 2 and task 3. Comments have been added to show the uses of the
// code

import sheffield.*;

public class Assignment1{
  public static void main(String [] args){

    // First task//

    String empty = " ";  // for new lines
    EasyWriter screen = new EasyWriter();
    EasyReader keyboard = new EasyReader();
    int POUNDS = keyboard.readInt("Please type in a weight in pounds : ");
    double Kilograms;
    Kilograms = POUNDS * 0.453592; //converts pounds to kg

    screen.print("That is ");
    screen.print(Kilograms,3);
    screen.println(" kilograms");

    screen.println(empty);   //prints a new line space

    // Second task//

    EasyReader fileInput = new EasyReader("planets.txt");
    String lineOne = fileInput.readString();
    String lineTwo = fileInput.readString(); //for task 3

    screen.println(lineOne);

    lineOne = lineOne.substring(0, lineOne.length() - 1);// removes the g

    char a = lineOne.charAt(lineOne.length() - 4);////////////////////////////|
    char b = lineOne.charAt(lineOne.length() - 3);// extracts numbers in .txt |
    char c = lineOne.charAt(lineOne.length() - 2);//                          |
    char d = lineOne.charAt(lineOne.length() - 1);////////////////////////////|

    String e = "" + a + b + c + d;  //joins integers together to form a number

    double force = Double.valueOf(e);  //converts to double

    int f = lineOne.indexOf(" ");  // finds the number of chars in planet name
    String planet;
    planet = lineOne.substring(0, f); // makes a string which is the planet name
    planet = planet.substring(0, planet.length() - 2); // removes " 's "

    double weightOfplanet;
    weightOfplanet = force * POUNDS * 0.453592; // finds weight in the planet

    String sPOUNDS = String.valueOf(POUNDS); //converts double to string

    screen.print(sPOUNDS + " pounds on Earth weighs ");
    screen.print(Kilograms,4);
    screen.println(" kilograms");

    screen.print(sPOUNDS + " pounds on " + planet + " weighs ");
    screen.print(weightOfplanet,4);
    screen.println(" kilograms");

    screen.println(empty); // new line

    //Third task

    lineTwo = lineTwo.substring(0, lineTwo.length() - 1);// removes the g

    char g = lineTwo.charAt(lineTwo.length() - 4);/////////////////////////// |
    char h = lineTwo.charAt(lineTwo.length() - 3);// extracts numbers in .txt |
    char i = lineTwo.charAt(lineTwo.length() - 2);//                          |
    char j = lineTwo.charAt(lineTwo.length() - 1);////////////////////////////|

    String k = "" + g + h + i + j; // joins numbers together

    double forceTwo = Double.valueOf(k); // converts to double

    int l = lineTwo.indexOf(" "); //finds number of chars in planet
    String planetTwo;
    planetTwo = lineTwo.substring(0, l); //makes a string with chars of planet
    planetTwo = planetTwo.substring(0, planetTwo.length() - 2); // removes 's

    double weightOfplanetTwo;
    weightOfplanetTwo = forceTwo * POUNDS * 0.453592; // calculates weight

    String planetThree = planet + " ";  // adds a space after
    String planetFour = planetTwo + " ";// the planet name

    int m = planetThree.indexOf(" ");      // find number of chars in planet
    int n = 20 - planetThree.indexOf(" "); // then 17 - length, (I used 17 as it
                                           // fits within the limit) of planet
    int o = planetFour.indexOf(" ");       // name to match layout of the
    int p = 20 - planetFour.indexOf(" ");  // first screen print for any planet
                                           // in .txt
    screen.print("Earth");
    screen.println(Kilograms,2,15);

    screen.print(planet);
    screen.println(weightOfplanet,2,n);

    screen.print(planetTwo);
    screen.println(weightOfplanetTwo,2,p);

    screen.println(empty);


  }
}
