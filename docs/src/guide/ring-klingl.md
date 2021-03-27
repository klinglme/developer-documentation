# Ring A Klingl

To ring your klingl you have simply to call the following url:

```
https://klingl.me/now/<alias>
```

You can find your alias in your app. Alternatively you can copy the whole link for your **klingl** in your mobile app.

## Direct Klingl

You can modify the url that if the url is called we directly ring your **klingl**. Similar to our normal route the person ringing will also get a dialog.

```
https://klingl.me/now/<alias>?how=direct
```

## Silent Klingl

You also can silently ring a **klingl** without getting back the UI.

```
https://klingl.me/now/<alias>?how=silent
```

## Add Payload

Its possible to add an payload to your **klingl** request. The payload could be a simple string or json.

> You can use a payload in all types of ring request!

**Send simple text payload**

```
GET https://klingl.me/now/<alias>
```

**Send a json payload**

```
POST https://klingl.me/now/<alias>
Content-Type: application/json
```

## Limits

To avoid 'Klinglstreich' we limit request to a **klingl**. Be aware to that fact and don't spam our API or your **klingl** will be deactivated.
