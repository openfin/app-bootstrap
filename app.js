var express = require('express')
var app = express()

app.use(express.static("."));

app.get('/doLogin',function(req,res){
  var r = '';
  var conf =  [[
    {
        entity:"app",
        props:{
          "name": "appA",
          "url": "http://localhost:5090/ws-1/appA.html",
          "uuid": "ws-1-appA",
          "autoShow": true,
          "icon": "http://localhost:8080/openfin.ico"
        },
        "position":{
          left:.5,
          top:0,
          width:.5,
          height:.5
        }
      },
      {
        entity:"app",
        props:{
          "name": "appB",
          "url": "http://localhost:5090/ws-1/appB.html",
          "uuid": "ws-1-appB",
          "autoShow": true,
          "icon": "http://localhost:8080/openfin.ico"
        },
        "position":{
          left:.5,
          top:.5,
          width:.5,
          height:.5
        }
      }],
      [
        {
            entity:"app",
            props:{
              "name": "appA",
              "url": "http://localhost:5090/ws-2/appA.html",
              "uuid": "ws-2-appA",
              "autoShow": true,
              "icon": "http://localhost:8080/openfin.ico"
            },
            "position":{
              left:.5,
              top:0,
              width:.5,
              height:.5
            }
          },
          {
            entity:"app",
            props:{
              "name": "appB",
              "url": "http://localhost:5090/ws-2/appB.html",
              "uuid": "ws-2-appB",
              "autoShow": true,
              "icon": "http://localhost:8080/openfin.ico"
            },
            "position":{
              left:.5,
              top:.5,
              width:.5,
              height:.5
            }
          }]
    ];
  var u = req.query.user;
  r = conf[u];
  res.send(r);
});

app.get('/manifest.json', function (req, res) {
  var ts = Date.now();
  res.send(`{
      "startup_app": {
          "name": "ws1-appA",
          "description": "Demonstration of the OpenFin App Bootstrap Pattern",
          "url": "http://localhost:5090/realm/appA.html",
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
  }`);
})

app.listen(5090, function () {
  console.log('App Bootstrap exampple listening on port 5090!')
})
