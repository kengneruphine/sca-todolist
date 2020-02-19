"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//const express = require("express");
//const app = express();
var app = (0, _express["default"])();
var port = 3000;
app.get('/', function (req, res) {
  res.send("Hello World");
});
var server = app.listen(port, function () {
  return console.log("App is listening on port ".concat(port));
});
var _default = server;
exports["default"] = _default;