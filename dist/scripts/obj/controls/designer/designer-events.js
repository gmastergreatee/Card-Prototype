"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = __importDefault(require("jquery"));
var designer_controls_1 = require("./designer-controls");
var designer_handles_1 = require("./designer-handles");
var DesignerEvents = /** @class */ (function () {
    function DesignerEvents() {
    }
    DesignerEvents.BindAllEvents = function () {
        jquery_1.default(document).on('input', designer_handles_1.DesignerHandles.zoomSlider, function () {
            var zoomLvl = parseFloat(jquery_1.default(this).val());
            if (zoomLvl && !isNaN(zoomLvl)) {
                designer_controls_1.DesignerControls.ChangeZoomScale(zoomLvl);
            }
        });
    };
    return DesignerEvents;
}());
exports.DesignerEvents = DesignerEvents;
