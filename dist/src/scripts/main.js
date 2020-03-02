"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var test_1 = require("./obj/test");
test_1.Testing.logToConsole(electron_1.remote.getGlobal('env'));
