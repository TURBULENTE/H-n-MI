/*
With this example, we are going to learn how receive
 data from our sensors using serial communication.
 For this exercise you will need to have already working your soft sensor
 connected to a microcontroller such as an Arduino UNO or Arduino Micro.
 */


import processing.serial.*;

Serial mySerial;  // Create object from Serial class

String myString;
int nl =10;
float myVal;

void setup()
{
  size(800, 600);
  // On Windows machines, this generally opens COM1.
  // Open whatever port is the one you're using.
  printArray(Serial.list());
  delay(5000);
  String myPort = Serial.list()[3]; // Find the correct serial port
  mySerial = new Serial(this, myPort, 9600);
}

void draw() {

  while (mySerial.available()  > 0) {
    myString=mySerial.readStringUntil(nl);
    background(125, 255, 125);
    if (myString != null) {

      myVal=float(myString);
      println(myVal);
      smooth();
    }
  }
}
