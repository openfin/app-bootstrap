const conf = [
    [
        {
            entity: "asset",
            props: {
                alias: "hyperblotter-chart2"
            }
        },
        {
            entity: "app",
            props: {
                "name": "appA",
                "url": "http://localhost:5090/ws-1/appA.html",
                "uuid": "ws-1-appA",
                "autoShow": true,
                icon: "http://localhost:5090/openfin.ico",
                taskbarIconGroup: "app-bootstrap-id"
            },
            "position": {
                left: .5,
                top: 0,
                width: .5,
                height: .5
            }
        },
        {
            entity: "app",
            props: {
                "name": "appB",
                "url": "http://localhost:5090/ws-1/appB.html",
                "uuid": "ws-1-appB",
                "autoShow": true,
                icon: "http://localhost:5090/openfin.ico",
                taskbarIconGroup: "app-bootstrap-id"
            },
            "position": {
                left: .5,
                top: .5,
                width: .5,
                height: .5
            }
        },
        {
            entity: 'app',
            props: {
                name: 'hyperblotteroriginal',
                url: 'http://localhost:5090/hyperblotterBuilds/original/index.html',
                uuid: 'hyperblotteroriginal',
                autoShow: true,
                frame: false,
                alwaysOnTop: true,
                defaultTop: 50,
                defaultLeft: 10,
                cornerRounding: {
                    width: 5,
                    height: 5
                },
                defaultHeight: 90,
                defaultWidth: 360,
                icon: 'http://localhost:5090/hyperblotterBuilds/original/images/hyperblotter_icon.ico'
            }
        }
    ],
    [
        {
            entity: "asset",
            props: {
                alias: "hyperblotter-chart"
            }
        },
        {
            entity: "app",
            props: {
                "name": "appA",
                "url": "http://localhost:5090/ws-2/appA.html",
                "uuid": "ws-2-appA",
                "autoShow": true,
                icon: "http://localhost:5090/openfin.ico",
                taskbarIconGroup: "app-bootstrap-id"
            },
            "position": {
                left: .5,
                top: 0,
                width: .5,
                height: .5
            }
        },
        {
            entity: "app",
            props: {
                "name": "appB",
                "url": "http://localhost:5090/ws-2/appB.html",
                "uuid": "ws-2-appB",
                "autoShow": true,
                icon: "http://localhost:5090/openfin.ico",
                taskbarIconGroup: "app-bootstrap-id"
            },
            "position": {
                left: .5,
                top: .5,
                width: .5,
                height: .5
            }
        },
        {
            entity: "app",
            props: {
                "name": "HyperblotterRevamped",
                "description": "Hyperblotter Demo",
                "url": "http://localhost:5090/hyperblotterBuilds/revamped/index.html",
                "icon": "http://localhost:5090/hyperblotterBuilds/revamped/images/hyperblotter_icon.ico",
                "uuid": "hyperblotter",
                "autoShow": true,
                "defaultWidth": 360,
                "maxWidth": 360,
                "minWidth": 360,
                "maxHeight": 90,
                "defaultHeight": 90,
                "minHeight": 90,
                "defaultTop": 50,
                "defaultLeft": 10,
                "resizable": false,
                "maximizable": false,
                "frame": false,
                "alwaysOnTop": true,
                "cornerRounding": {
                    "width": 5,
                    "height": 5
                }
            }

        }
    ]
    /*
    ,
    [
        {
            entity: "asset",
            props: {
                alias: "hyperblotter-chart2"
            }
        }
    ]
    */
];

module.exports = conf;