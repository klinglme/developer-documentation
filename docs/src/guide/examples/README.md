# Overview

There is a big playground for playing around with different types of inputs and outputs for a **klingl**.

## Hardware

For all our example projects we use **ESP32** and **ESP8266** because of the ability to easily implement SSL checks.

You are always free to use your own microcontroller and custom implementations.

For more information please visit our [Arduino Libary](https://github.com/klinglme/arduino) on Github and have a look at the [Arduino Documentation](/guide/examples/arduino)

## Software

There are a lot of libraries in different languages which are implementing the MQTT protocol. Feel free to take our examples as starter and develop your own implementation.

For more information please visit our [Examples](https://github.com/klinglme/) on Github and have a look at the [Node.js](/guide/examples/node) and [Python](/guide/examples/python) documentation.

## SSL (still in beta)

~~All our open endpoints provide SSL. For your own safety use SSL for registering your MQTT client.~~

::: warning
MQTT and Webhooks are still in beta and SSL is not working properly! We are working on this.
:::
