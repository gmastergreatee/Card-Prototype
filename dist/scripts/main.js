"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log(__dirname);
var startup_1 = require("./obj/electron/startup");
startup_1.Startup.PerformElectronStartupTasks();
startup_1.Startup.LoadDesigner();
