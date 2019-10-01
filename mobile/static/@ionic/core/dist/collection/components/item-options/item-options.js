import { getIonMode } from '../../global/ionic-global';
import { isEndSide } from '../../utils/helpers';
export class ItemOptions {
    constructor() {
        /**
         * The side the option button should be on. Possible values: `"start"` and `"end"`. If you have multiple `ion-item-options`, a side must be provided for each.
         *
         */
        this.side = 'end';
    }
    /** @internal */
    async fireSwipeEvent() {
        this.ionSwipe.emit({
            side: this.side
        });
    }
    hostData() {
        const mode = getIonMode(this);
        const isEnd = isEndSide(this.side);
        return {
            class: {
                [mode]: true,
                // Used internally for styling
                [`item-options-${mode}`]: true,
                'item-options-start': !isEnd,
                'item-options-end': isEnd
            }
        };
    }
    static get is() { return "ion-item-options"; }
    static get originalStyleUrls() { return {
        "ios": ["item-options.ios.scss"],
        "md": ["item-options.md.scss"]
    }; }
    static get styleUrls() { return {
        "ios": ["item-options.ios.css"],
        "md": ["item-options.md.css"]
    }; }
    static get properties() { return {
        "side": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "Side",
                "resolved": "\"end\" | \"start\"",
                "references": {
                    "Side": {
                        "location": "import",
                        "path": "../../interface"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The side the option button should be on. Possible values: `\"start\"` and `\"end\"`. If you have multiple `ion-item-options`, a side must be provided for each."
            },
            "attribute": "side",
            "reflect": false,
            "defaultValue": "'end'"
        }
    }; }
    static get events() { return [{
            "method": "ionSwipe",
            "name": "ionSwipe",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when the item has been fully swiped."
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get methods() { return {
        "fireSwipeEvent": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": [{
                        "name": "internal",
                        "text": undefined
                    }]
            }
        }
    }; }
    static get elementRef() { return "el"; }
}
