#include <highG.h>
HighG highG;

void setup()
{
  highG.begin();
}

void loop()
{
  // Read acceleration values
  float ax = highG.readAccX();
  float ay = highG.readAccY();
  float az = highG.readAccZ();

  // Print acceleration values
  Serial.print("x: ");
  Serial.print(ax);
  Serial.print(" g\t  y: ");
  Serial.print(ay);
  Serial.print(" g\t  z: ");
  Serial.print(az);
  Serial.println(" g");

  delay(300);
}