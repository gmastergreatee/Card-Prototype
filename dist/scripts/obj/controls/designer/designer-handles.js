"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = __importDefault(require("jquery"));
var DesignerHandles = /** @class */ (function () {
    function DesignerHandles() {
    }
    DesignerHandles.ZoomSliderHandle = function () {
        return jquery_1.default(this.zoomSlider);
    };
    DesignerHandles.ZoomPlusHandle = function () {
        return jquery_1.default(this.zoomPlus);
    };
    DesignerHandles.ZoomMinusHandle = function () {
        return jquery_1.default(this.zoomMinus);
    };
    DesignerHandles.CardHandle = function () {
        return jquery_1.default(this.card);
    };
    DesignerHandles.zoomSlider = '.zoom-slider input';
    DesignerHandles.zoomPlus = '.zoom-slider .btn-plus';
    DesignerHandles.zoomMinus = '.zoom-slider .btn-minus';
    DesignerHandles.card = '.card';
    return DesignerHandles;
}());
exports.DesignerHandles = DesignerHandles;
