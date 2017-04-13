# app-bootstrap
Example for how to use the bootstrap "launcher" pattern to user target app versions and assets, create loading animations, and manage app lifecycles.

## Overview
On startup, the app-bootstrap launches *index.html* as a hidden window.  This headless process houses the main client-side logic for the app.  Including:

* Bringing up the login UI as a *child window*
* Processing the submission of the login form and connecting to services to authenticate the user
* Controlling UI features like a loading animation overlay while the main app content is loaded

There are 3 user personas in this example.  In summary:
* **User 1** & **User 2** fetch user specific configuration from the server.  That configuration is parsed and used to generate a set of Apps specific to that user. The server also sets auth cookies for the  user.
* With **User 3**, a different App is launched for the user in a new Browser process using an OpenFin specific protocol handler pointed to a dynamically generated manifest for the app manifest
```javascript
document.location.href="fin://localhost:5090/manifest?user=openfin";
```
#### Dynamic Manifest Generation
The manifest in the case of the User 3 is dynamically generated with a unique security-realm that forces the App into its own browser process (providing cookie/user session isolation). In this example, this is just done with a timestamp, in a production system, a more contextually driven identifier would likely be used.  Code is in *app.js* and looks like this:

```javascript
res.send(`{
    "startup_app": {
        "name": "ws1-appA",
        "description": "Demonstration of the OpenFin App Bootstrap Pattern",
        "url": "http://localhost:5090/realm/appA.html?user=${req.query.user}",
        "icon": "http://localhost:5090/openfin.ico",
        "uuid": "ws1-appA",
        "autoShow": true,
        "alwaysOnTop": false
    },
    "runtime": {
        "arguments": "--security-realm=bgcTest-${ts}",
        "version": "stable"
    },
    ...
```
  Also note, that the query string is passed from the call to retrieve the manifest into the main URL for the app.  This is to allow the passing of user credentials or other state from the bootstrap.  Cookies, local storage, service workers, etc., aren't shared between Browser Processes - so they need to be passed through explicitly on the call.
