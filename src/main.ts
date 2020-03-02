import $ from 'jquery';
import { remote } from 'electron';
import { Environment } from './scripts/obj/env/env';
import { Startup } from './scripts/obj/electron/startup';

$(document).ready(function() {
    Startup.PerformElectronStartupTasks();
    Startup.LoadDesigner();
});
