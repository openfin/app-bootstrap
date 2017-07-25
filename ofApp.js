const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const conf = require('./userConfig');
const openfinLauncher = require('openfin-launcher');

app.use(express.static("."));
app.use(cookieParser());

app.get('/doLogin',function(req,res){
    var r = '';
    var u = req.query.user;
  //mock setting user credentials cookie
  //support multiple user personas
  //set cookie with list of users
  //To DO: get users cookie from req... manage adding, removing user
    var ucookie = req.cookies ? req.cookies.users : null;
    console.log("ucookie " + ucookie);
    if (ucookie) {
        ucookie = ucookie.split(",");
        if (ucookie.indexOf(u) === -1){
            console.log("add persona " + u);
            ucookie.push(u);
            res.cookie("users",ucookie.join(","));
        }
    } else {
        res.cookie("users",u);
    }
  //
    r = conf[(u-1)];
    res.send(r);
});

// app.get('/manifest', function (req, res) {
//     var ts = Date.now();
//     res.send(`{
//         "startup_app": {
//             "name": "ws1-appA",
//             "description": "Demonstration of the OpenFin App Bootstrap Pattern",
//             "url": "http://localhost:5090/realm/appA.html?user=${req.query.user}",
//             "icon": "http://localhost:5090/openfin.ico",
//             "uuid": "ws1-appA",
//             "autoShow": true,
//             "alwaysOnTop": false
//         },
//         "runtime": {
//             "arguments": "--security-realm=bgcTest-${ts}",
//             "version": "stable"
//         },
//         "appAssets": [],
//         "shortcut": {
//             "company": "OpenFin",
//             "description": "Demonstration of the OpenFin App Bootstrap Pattern",
//             "icon": "http://localhost:5090/openfin.ico",
//             "name": "App Bootstrap"
//         }
//         }`
//     );
// });
app.get('/manifest', function (req, res) {
    var ts = Date.now();
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
        "appAssets": [],
        "shortcut": {
            "company": "OpenFin",
            "description": "Demonstration of the OpenFin App Bootstrap Pattern",
            "icon": "http://localhost:5090/openfin.ico",
            "name": "App Bootstrap"
        }
        }`
    );
});

let localServer = app.listen(5090, function () {
    console.log('App Bootstrap example listening on port 5090!')
    openfinLauncher.launchOpenFin({
        configPath: 'http://localhost:5090/app.json'
    }).then(() => {
        localServer.close()
    }).fail((error) => {
        console.log('Launch error:' + error)
    })
})
