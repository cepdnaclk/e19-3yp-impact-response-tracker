#include "eeprom.h"

void initEEPROM(String &ssid, String &password, String &BUDDY_ID, int ID)
{
    EEPROM.begin(EEPROM_SIZE);
    // EEPROM.write(EEPROM_START_ADDRESS, ID);
    // EEPROM.commit();
    BUDDY_ID += EEPROM.read(EEPROM_ID_ADDRESS);

    // writeEEPROMString(EEPROM_SSID_ADDRESS, ssid);
    // writeEEPROMString(EEPROM_PASSWORD_ADDRESS, password);

    ssid = readEEPROMString(EEPROM_SSID_ADDRESS);
    password = readEEPROMString(EEPROM_PASSWORD_ADDRESS);
}

// Function to write a string to EEPROM
void writeEEPROMString(int startAddr, String data)
{
    for (int i = 0; i < data.length(); i++)
    {
        EEPROM.write(startAddr + i, data[i]);
    }
    EEPROM.write(startAddr + data.length(), '\0'); // Null-terminate the string
    EEPROM.commit();
}

// Function to read a string from EEPROM
String readEEPROMString(int startAddr)
{
    String data = "";
    char character;
    int i = 0;

    while ((character = EEPROM.read(startAddr + i)) != '\0' && i < EEPROM_SIZE)
    {
        data += character;
        i++;
    }

    return data;
}

bool getCustomeSSIDAndPasswordEEPROM(String &ssid, String &password)
{
    if (EEPROM.read(EEPROM_SSID_CUSTOM_ADDRESS) == 1)
    {
        ssid = readEEPROMString(EEPROM_SSID_CUSTOM_ADDRESS + 1);
        password = readEEPROMString(EEPROM_PASSWORD_CUSTOM_ADDRESS + 1);
        return true;
    }
    return false;
}

bool setCustomeSSIDAndPasswordEEPROM(String &ssid, String &password)
{
    writeEEPROMString(EEPROM_SSID_CUSTOM_ADDRESS + 1, ssid);
    writeEEPROMString(EEPROM_PASSWORD_CUSTOM_ADDRESS + 1, password);
    EEPROM.write(EEPROM_SSID_CUSTOM_ADDRESS, 1);
    EEPROM.commit();
    return true;
}