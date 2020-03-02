export class DesignerResources {
    static designer = `
        <div class="d-flex flex-row h-100 d-print-none">
            <div class="d-flex flex-column wp-200 overflow-hidden bg-dark border-right border-info">
                <h4 class="px-2 text-center">
                    Items
                </h4>
                <hr class="m-0 border-info" />
            </div>
            <div class="d-flex flex-row flex-grow-1 position-relative overflow-auto templater">
                <div class="position-absolute" id="deselector"></div>
                <div class="position-fixed rotate-90 d-flex flex-column zoom-slider">
                    <button class="btn btn-sm btn-light btn-plus"></button>
                    <input type="range" min="1" max="5" step="0.1" value="2" />
                    <button class="btn btn-sm btn-light btn-minus"></button>
                </div>
                <div class="card border border-0 position-relative" style="transform: scale(2);transform-origin:0 0;">
                    <span id="all-items">
                        <span id="txt1" style="top:0;left:0">
                            Text
                        </span>
                    </span>
                    <span id="resizer" style="top:100px;left:100px;width:30px;height:30px;display:none">
                        <span class="res-bg"></span>
                        <table>
                            <tr>
                                <td class="align-top">
                                    <div class="handle" style="cursor:nw-resize" data-id="1"></div>
                                </td>
                                <td class="align-top">
                                    <div class="handle mx-auto" style="cursor:ns-resize" data-id="2"></div>
                                </td>
                                <td class="align-top">
                                    <div class="handle ml-auto mr-0" style="cursor:ne-resize" data-id="3"></div>
                                </td>
                            </tr>
                            <tr>
                                <td class="align-middle">
                                    <div class="handle" style="cursor:w-resize" data-id="4"></div>
                                </td>
                                <td></td>
                                <td class="align-middle">
                                    <div class="handle ml-auto mr-0" style="cursor:e-resize" data-id="5"></div>
                                </td>
                            </tr>
                            <tr>
                                <td class="align-bottom">
                                    <div class="handle" style="cursor:ne-resize" data-id="6"></div>
                                </td>
                                <td class="align-bottom">
                                    <div class="handle mx-auto" style="cursor:ns-resize" data-id="7"></div>
                                </td>
                                <td class="align-bottom">
                                    <div class="handle ml-auto mr-0" style="cursor:nw-resize" data-id="8"></div>
                                </td>
                            </tr>
                        </table>
                    </span>
                </div>
            </div>
            <div class="d-flex flex-column wp-200 overflow-hidden bg-dark border-info border-left">
                <h4 class="px-2 text-center">
                    Properties
                </h4>
                <hr class="m-0 border-info" />
                <div class="p-2">
                    Some stuff here
                </div>
                <hr class="m-0 border-info" />
                <h4 class="px-2 text-center">
                    Hierarchy
                </h4>
                <hr class="m-0 border-info" />
            </div>
        </div>`;
}
