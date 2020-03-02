import $ from 'jquery';

export class DesignerHandles {
    static zoomSlider = '.zoom-slider input';
    static zoomPlus = '.zoom-slider .btn-plus';
    static zoomMinus = '.zoom-slider .btn-minus';

    static card = '.card';

    static ZoomSliderHandle() {
        return $(this.zoomSlider);
    }

    static ZoomPlusHandle() {
        return $(this.zoomPlus);
    }

    static ZoomMinusHandle() {
        return $(this.zoomMinus);
    }

    static CardHandle() {
        return $(this.card);
    }
}
