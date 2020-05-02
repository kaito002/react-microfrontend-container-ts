"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var path = require("path");
var app = express_1.default();
var PORT = process.env.REACT_APP_SERVER_PORT || 8080;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path.resolve(__dirname, "..", "build")));
var onServerStarted = function () {
    console.log("Server is running on ::" + PORT);
};
app.listen(PORT, onServerStarted);
