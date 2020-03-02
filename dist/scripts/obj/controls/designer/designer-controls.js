"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var designer_handles_1 = require("./designer-handles");
var DesignerControls = /** @class */ (function () {
    function DesignerControls() {
    }
    DesignerControls.ChangeZoomScale = function (scale) {
        designer_handles_1.DesignerHandles.CardHandle().css('transform', 'scale(' + scale + ')');
    };
    return DesignerControls;
}());
exports.DesignerControls = DesignerControls;
