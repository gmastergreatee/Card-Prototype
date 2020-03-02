"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = __importDefault(require("jquery"));
var startup_1 = require("./scripts/obj/electron/startup");
jquery_1.default(document).ready(function () {
    startup_1.Startup.PerformElectronStartupTasks();
    startup_1.Startup.LoadDesigner();
});
