import $ from 'jquery';
import { remote } from 'electron';
import { Environment } from '../env/env';
import { DesignerResources } from '../resources/res';
import { DesignerEvents } from '../controls/designer/designer-events';

export class Startup {
    public static PerformElectronStartupTasks() {
        if (!Environment.IsDevelopmentEnvironment()) {
            remote.getCurrentWindow().setMenu(null);
        }
    }

    public static LoadDesigner() {
        $('body').html(DesignerResources.designer);
        DesignerEvents.BindAllEvents();
    }
}
