import $ from 'jquery';
import { DesignerHandles } from './designer-handles';

export class DesignerControls {
    static ChangeZoomScale(scale: number) {
        DesignerHandles.CardHandle().css('transform', 'scale(' + scale + ')');
    }
}
