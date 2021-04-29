# Arduino

We use ESP32/ESP8266 only here because with SSL coming we need better microcontroller to handle encryption.

## Ring a klingl

You can simply calling the [ring endpoint](/ring-klingl) ignoring SSL:

```c
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>

const char* ssid = "yourNetworkName";
const char* password = "yourNetworkPassword";

void setup () {

    // initialize
    Serial.begin(115200);
    WiFi.begin(ssid, password);

    // wait until connected
    while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.print("Connecting..");
    }

    // ring, ring who is there!
    ring();
}

void ring(){
    // check WiFi connection status
    if (WiFi.status() == WL_CONNECTED) {

        // send the request
        HTTPClient http;
        http.begin("https://klingl.me/now/<alias>");
        int httpCode = http.GET;

        // check the returning code
        if (httpCode > 0) {
            Serial.println(httpCode);
        }

        // close connection
        http.end();
    }
}

// run forever...
void loop() {}
```

::: tip Calling with SSL
There are serveral ways to do it and SSL is a lot of code. We will upload an example to our Github organisation.
:::

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

    // Optional: Enable debugging messages sent to serial output
    client.enableDebuggingMessages();

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
