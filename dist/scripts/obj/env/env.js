"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var Environment = /** @class */ (function () {
    function Environment() {
    }
    Environment.IsDevelopmentEnvironment = function () {
        return electron_1.remote.process.argv[2] == '--dev';
    };
    return Environment;
}());
exports.Environment = Environment;
