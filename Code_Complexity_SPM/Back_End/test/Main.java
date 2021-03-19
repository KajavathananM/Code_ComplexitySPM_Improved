/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package lab_05_b;

import java.util.*;
/**
 *
 * @author IT17706438
 */

public class Main {/**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
      int maxSubjects;
      int [] marks;
      int total=0;
      double avg;
      
      Scanner sc=new Scanner(System.in);
      try {
      
            System.out.print("Enter the Number of Subjects :");
            maxSubjects=sc.nextInt();
            if(maxSubjects<0)
                throw new ArithmeticException();
            
            //Assigning size of marks to be no.of maxSubjects
            marks=new int[maxSubjects];
            
 
            for(int i=0;i<maxSubjects;i++){System.out.print("Enter Marks for Subject "+(i+1)+" :"); marks[i]=sc.nextInt();
            }
      

for(int i=0;i<maxSubjects;i++){total+=marks[i];
            }
            avg=(double)total/maxSubjects; System.out.println("Average  :" +avg);
      
      }
      

      catch(InputMismatchException e){
          System.out.println(e.getMessage());
          
      }
      
      
      
      catch(ArithmeticException e){
          System.out.println(e.getMessage());
      }
 
      catch(ArrayIndexOutOfBoundsException e){
          System.out.println(e.getMessage());
      }
      
      catch (Exception e) {
        System.out.println(e.getMessage());
      }
      
      finally {
         System.out.println("This code will be gurentied to run");
      }
    
      System.out.println("The end");

  
    }
}
