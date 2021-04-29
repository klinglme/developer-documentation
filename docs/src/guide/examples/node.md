# Node.js

## Ring a klingl

To ring your **klingl** you can send an [https request](/guide/ring-klingl.html) to our server. All you need is your alias you can find it in our mobile app.

```js
const axios = require('axios').default;

axios
  .get('https://klingl.me/now/<alias>')
  .then((res) => {
    console.log('success');
  })
  .catch((err) => {
    console.log('error');
  });
```

## Recieve a ring (MQTT)

You can use this snippet as a starting point. All connection credentials you will get in the [Developer Interface](/guide/web-client.html)

```js
const mqtt = require('mqtt');

const client = mqtt.connect('mqtt://klingl.me', {
  username: '<username>',
  password: '<password>',
  clientId: '<clientId>',
});

var topic = '<topic>';

client.on('connect', () => {
  console.log('connected');
  client.subscribe(topic, {}, () => {
    console.log('successfully subscribed');
  });
});

client.on('message', function(topic, message) {
  console.log(topic, message.toString());
});

client.on('error', (err) => {
  console.error(err);
});
```
