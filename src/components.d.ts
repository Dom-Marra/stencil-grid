/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppGrid {
        "data": Array<any>;
    }
    interface AppHome {
    }
    interface AppRoot {
    }
}
declare global {
    interface HTMLAppGridElement extends Components.AppGrid, HTMLStencilElement {
    }
    var HTMLAppGridElement: {
        prototype: HTMLAppGridElement;
        new (): HTMLAppGridElement;
    };
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLElementTagNameMap {
        "app-grid": HTMLAppGridElement;
        "app-home": HTMLAppHomeElement;
        "app-root": HTMLAppRootElement;
    }
}
declare namespace LocalJSX {
    interface AppGrid {
        "data"?: Array<any>;
    }
    interface AppHome {
    }
    interface AppRoot {
    }
    interface IntrinsicElements {
        "app-grid": AppGrid;
        "app-home": AppHome;
        "app-root": AppRoot;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-grid": LocalJSX.AppGrid & JSXBase.HTMLAttributes<HTMLAppGridElement>;
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
        }
    }
}
