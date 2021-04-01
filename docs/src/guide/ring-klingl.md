# Ring a klingl

To ring your klingl, you can simply call the following url:

```
https://klingl.me/now/<alias>
```

You can find your alias in the klingl.me app. You can copy the whole link for your **klingl** in your mobile app as well.

The person ringing will get a dialog to confirm the ring.
This prevents accidental ringing when people try the link.

## Direct klingl

You can modify the url to avoid the confirmation dialog.

```
https://klingl.me/now/<alias>?how=direct
```

## Silent Klingl

You also can silently ring a **klingl** without getting back the UI. Useful when ringing via low powered devices.

```
https://klingl.me/now/<alias>?how=silent
```

## Add Payload

It is possible to add some payload to your **klingl** request. The payload should be a simple string.
Of course you can also send json as payload when formatting to a string.

> You can use a payload in all types of ring request!

**Send payload via GET**

```
GET https://klingl.me/now/<alias>?payload=<yourStringPayload>
```

**Send a payload via POST**
```
POST https://klingl.me/now/<alias>
Content-Type: application/json
Body: {"payload":"<yourStringPayload>"}
```

## Limits

To avoid 'Klinglstreich' we limit requests to a **klingl**. Be aware to that fact and don't spam the API, or your **klingl** will be deactivated.
