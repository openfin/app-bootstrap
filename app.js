var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');

app.use(express.static("."));

app.use(cookieParser());

app.get('/doLogin',function(req,res){
  var r = '';
  var conf =  [[
    {entity:"asset",
    props:{
      alias:"hyperblotter-chart"}
    },
    {
        entity:"app",
        props:{
          "name": "appA",
          "url": "http://localhost:5090/ws-1/appA.html",
          "uuid": "ws-1-appA",
          "autoShow": true,
          icon:"http://localhost:5090/openfin.ico",
          taskbarIconGroup:"app-bootstrap-id"
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
          icon:"http://localhost:5090/openfin.ico",
          taskbarIconGroup:"app-bootstrap-id"
        },
        "position":{
          left:.5,
          top:.5,
          width:.5,
          height:.5
        }
      }],
      [
        {entity:"asset",
        props:{
          alias:"hyperblotter-chart2"}
        },
        {
            entity:"app",
            props:{
              "name": "appA",
              "url": "http://localhost:5090/ws-2/appA.html",
              "uuid": "ws-2-appA",
              "autoShow": true,
              icon:"http://localhost:5090/openfin.ico",
              taskbarIconGroup:"app-bootstrap-id"
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
              icon:"http://localhost:5090/openfin.ico",
              taskbarIconGroup:"app-bootstrap-id"
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
}
else {
    res.cookie("users",u);
}
  //
  r = conf[(u-1)];
  res.send(r);
});

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
  }`);
})

app.listen(5090, function () {
  console.log('App Bootstrap example listening on port 5090!')
})
