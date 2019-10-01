import { h } from '@stencil/core';
import { getIonMode } from '../../global/ionic-global';
import { createColorClasses } from '../../utils/theme';
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
export class CardHeader {
    constructor() {
        /**
         * If `true`, the card header will be translucent.
         */
        this.translucent = false;
    }
    hostData() {
        const mode = getIonMode(this);
        return {
            class: Object.assign({}, createColorClasses(this.color), { 'card-header-translucent': this.translucent, [mode]: true })
        };
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-card-header"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "ios": ["card-header.ios.scss"],
        "md": ["card-header.md.scss"]
    }; }
    static get styleUrls() { return {
        "ios": ["card-header.ios.css"],
        "md": ["card-header.md.css"]
    }; }
    static get properties() { return {
        "color": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "Color",
                "resolved": "string | undefined",
                "references": {
                    "Color": {
                        "location": "import",
                        "path": "../../interface"
                    }
                }
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "The color to use from your application's color palette.\nDefault options are: `\"primary\"`, `\"secondary\"`, `\"tertiary\"`, `\"success\"`, `\"warning\"`, `\"danger\"`, `\"light\"`, `\"medium\"`, and `\"dark\"`.\nFor more information on colors, see [theming](/docs/theming/basics)."
            },
            "attribute": "color",
            "reflect": false
        },
        "translucent": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "If `true`, the card header will be translucent."
            },
            "attribute": "translucent",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
}
