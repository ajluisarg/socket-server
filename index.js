var server_1 = require("./class/server");
var router_1 = require("./routes/router");
var bodyParser = require("body-parser");
var cors_1 = require('cors');
var server = server_1["default"].instance;
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());
server.app.use(cors_1["default"]({ origin: true, credentials: true }));
server.app.use('/', router_1["default"]);
server.start(function () {
    console.log("server listening on port " + server.port);
});
