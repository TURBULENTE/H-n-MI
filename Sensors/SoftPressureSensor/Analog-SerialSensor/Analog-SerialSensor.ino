int sensorPin = 0;
int sensorValue;
int valMap;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(sensorPin, INPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
sensorValue= analogRead(sensorPin);
valMap=map(sensorValue, 0, 2800, 0, 255);

Serial.println(valMap);
}
