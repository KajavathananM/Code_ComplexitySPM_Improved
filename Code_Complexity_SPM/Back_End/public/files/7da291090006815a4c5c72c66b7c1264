package com.example.mkvat.hospitalapp;


import android.annotation.SuppressLint;
import android.content.Intent;
import android.support.annotation.StringRes;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.text.Html;
import android.text.SpannableString;
import android.text.style.SuperscriptSpan;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import java.text.DecimalFormat;

import static android.os.Build.VERSION_CODES.M;

public class CalculateBMI extends AppCompatActivity {

    EditText weight,feet,inches;
    TextView display;
    Button calcBMI,home;
    int er1,er2,er3;
    double w,f,i,heightInfeet,heightInm,hsquared,BMI;
    String bmi,status;


    private static DecimalFormat df2 = new DecimalFormat("##0.##");

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.bmidisplay);

        weight=findViewById(R.id.weight);
        feet=findViewById(R.id.feet);
        inches=findViewById(R.id.inches);
        display=findViewById(R.id.display);
        calcBMI=findViewById(R.id.calcBMI);
        home=findViewById(R.id.home3);


        home.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent i=new Intent(CalculateBMI.this,MainActivity.class);
                startActivity(i);
            }
        });
        calcBMI.setOnClickListener(new View.OnClickListener() {
            @SuppressLint("SetTextI18n")
            @Override
            public void onClick(View view) {
                char sNum;
                String sWeight = weight.getText().toString().trim();
                String sFeet = feet.getText().toString().trim();
                String sInches = inches.getText().toString().trim();



                boolean numeric = true;

                try {
                    w = Double.parseDouble(sWeight);
                    f = Double.parseDouble(sFeet);//feet
                    i = Double.parseDouble(sInches);//inches
                } catch (NumberFormatException e) {
                    numeric = false;
                }

                if (numeric)
                {
                    heightInfeet = f + (i * 0.08333333);
                    heightInm = heightInfeet * 0.3048;

                    hsquared = Math.pow(heightInm, 2);
                    BMI = w / (hsquared);
                    String BMIformat = df2.format(BMI);
                    if (BMI < 16) {
                        status = "Severe Thinness";
                    } else if (BMI >= 16 & BMI < 17) {
                        status = "Moderate Thinness";
                    } else if (BMI >= 17 & BMI < 18.5) {
                        status = "Mild Thinness";
                    } else if (BMI >= 18.5 & BMI < 25) {
                        status = "Normal";
                    } else if (BMI >= 18.5 & BMI < 25) {
                        status = "Normal";
                    } else if (BMI >= 25 & BMI < 30) {
                        status = "Overweight";
                    } else if (BMI >= 30 & BMI < 35) {
                        status = "Obese Class I";
                    } else if (BMI >= 35 & BMI < 40) {
                        status = "Obese Class II";
                    } else {
                        status = "Obese Class III";
                    }

                    String s = "m<sup>2 </sup>\t	";
                    display.setText("BMI= " + BMIformat + " Kg/" + Html.fromHtml(s) + "\n(" + status + ")");
                }
                else
                {
                    Toast.makeText(CalculateBMI.this, "Please enter weight,feet or height in number", Toast.LENGTH_LONG).show();
                    Intent i=new Intent(CalculateBMI.this,CalculateBMI.class);
                    startActivity(i);
                }

            }





        });


    }
}
