# Python

## Ring a klingl

To ring your **klingl** you can send an [https request](/guide/ring-klingl.html) to our server. All you need is your alias you can find it in our mobile app.

```py
import requests

# make request
res = requests.get(url="https://klingl.me/now/<alias>")

# check if request was success
if res.status_code == 200:
    print('success')
else:
    print('request failed')
```

## Recieve a ring (MQTT)

You can use this snippet as a starting point. All connection credentials you will get in the [Developer Interface](/guide/web-client.html)

```py
import paho.mqtt.client as mqtt
import time

# setup connection
client = mqtt.Client("<clientId>")
client.username_pw_set("<username>", password="<password>")
client.connect("klingl.me", port=1883)

# start mqtt loop
client.loop_start()
client.subscribe("<topic>")

# add handler for message
def on_message(client, userdata, message):
    print("received message: ", str(message.payload.decode("utf-8")))

# register handler
client.on_message = on_message

# run forever
while(True):
    time.sleep(30)
    pass
```
