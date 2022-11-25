
import sheffield.*;

public class Assignment2 {
    public static void main(String[] args){
        EasyReader keyboard = new EasyReader();
        EasyGraphics window = new EasyGraphics(120,128);

        EasyReader fileCode= new EasyReader("tree.txt");
        int[][] txtArray = new int[120][128];
        //stores all numbers in an array
        int intValue, i, k;
        for (i=0; i<120; i++){
            for (k=0;k<128; k++){
                intValue = fileCode.readChar();
                txtArray[i][k] = intValue;
                
            }
        }
        for (int l = 0; l<120; l++){
            for (int m = 0; m < 128; m++){
                if(txtArray[l][m] % 2 == 0){
                    window.setColor(51,255,255);
                    window.plot(l, m);
                }
                else if(txtArray[l][m] % 2 != 0){
                    window.setColor(153,76,0);
                    window.plot(l, m);

                    if(txtArray[l][m] % 5 == 0 ){
                        window.setColor(0, 200, 0);
                        window.plot(l, m);
                    }
                }
                else if(l=0; l<40){
                    window.setColor(155, 118, 83);
                    window.plot(l, m);
                }
                    
                }
        }
                    
                





    
            

        
        
    
        
         
    
        


    }
}
