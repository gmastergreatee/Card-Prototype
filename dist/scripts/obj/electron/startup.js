"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = __importDefault(require("jquery"));
var electron_1 = require("electron");
var env_1 = require("../env/env");
var res_1 = require("../resources/res");
var designer_events_1 = require("../controls/designer/designer-events");
var Startup = /** @class */ (function () {
    function Startup() {
    }
    Startup.PerformElectronStartupTasks = function () {
        if (!env_1.Environment.IsDevelopmentEnvironment()) {
            electron_1.remote.getCurrentWindow().setMenu(null);
        }
    };
    Startup.LoadDesigner = function () {
        jquery_1.default('body').html(res_1.DesignerResources.designer);
        designer_events_1.DesignerEvents.BindAllEvents();
    };
    return Startup;
}());
exports.Startup = Startup;
