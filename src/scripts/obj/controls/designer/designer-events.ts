import $ from 'jquery';
import { DesignerControls } from './designer-controls';
import { DesignerHandles } from './designer-handles';

export class DesignerEvents {
    static BindAllEvents() {
        $(document).on('input', DesignerHandles.zoomSlider, function() {
            const zoomLvl = parseFloat($(this).val() as string);
            if (zoomLvl && !isNaN(zoomLvl)) {
                DesignerControls.ChangeZoomScale(zoomLvl);
            }
        });
    }
}
