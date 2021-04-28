# Arduino

We use ESP32/ESP8266 only here because with SSL coming we need better microcontroller to handle encryption.

## Ring a klingl

tbd... (This with SSL is a lot of code. We will upload an example to our github Organisation)

## Recieve a ring (MQTT)

You can use this snippet as a starting point. All connection credentials you will get in the [Developer Interface](/guide/web-client.html)

```c

#include "EspMQTTClient.h"

EspMQTTClient client(
    "<wifi_name>",
    "<wifi_pass>",
    "<server_ip>",  // MQTT Broker server ip: 195.201.3.241
    "<username>",   // Username
    "<password>",   // Password
    "<clientId>",   // Client name that uniquely identify your device
    1883            // The MQTT port, default to 1883. this line can be omitted
);

void setup()
{
    Serial.begin(115200);

    // Optionnal functionnalities of EspMQTTClient :
    client.enableDebuggingMessages(); // Enable debugging messages sent to serial output
    Serial.println("Successfully Started Client");
}

// This function is called once everything is connected (Wifi and MQTT)
// WARNING : YOU MUST IMPLEMENT IT IF YOU USE EspMQTTClient
void onConnectionEstablished()
{
    client.subscribe("<topic>", [](const String &payload) {
        Serial.println(payload);
    });
}

void loop()
{
    client.loop();
}
```
