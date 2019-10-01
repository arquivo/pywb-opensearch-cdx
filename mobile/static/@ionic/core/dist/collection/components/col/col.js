import { h } from '@stencil/core';
import { getIonMode } from '../../global/ionic-global';
import { matchBreakpoint } from '../../utils/media';
const win = window;
const SUPPORTS_VARS = !!(win.CSS && win.CSS.supports && win.CSS.supports('--a: 0'));
const BREAKPOINTS = ['', 'xs', 'sm', 'md', 'lg', 'xl'];
export class Col {
    onResize() {
        this.el.forceUpdate();
    }
    // Loop through all of the breakpoints to see if the media query
    // matches and grab the column value from the relevant prop if so
    getColumns(property) {
        let matched;
        for (const breakpoint of BREAKPOINTS) {
            const matches = matchBreakpoint(breakpoint);
            // Grab the value of the property, if it exists and our
            // media query matches we return the value
            const columns = this[property + breakpoint.charAt(0).toUpperCase() + breakpoint.slice(1)];
            if (matches && columns !== undefined) {
                matched = columns;
            }
        }
        // Return the last matched columns since the breakpoints
        // increase in size and we want to return the largest match
        return matched;
    }
    calculateSize() {
        const columns = this.getColumns('size');
        // If size wasn't set for any breakpoint
        // or if the user set the size without a value
        // it means we need to stick with the default and return
        // e.g. <ion-col size-md>
        if (!columns || columns === '') {
            return;
        }
        // If the size is set to auto then don't calculate a size
        const colSize = (columns === 'auto')
            ? 'auto'
            // If CSS supports variables we should use the grid columns var
            : SUPPORTS_VARS ? `calc(calc(${columns} / var(--ion-grid-columns, 12)) * 100%)`
                // Convert the columns to a percentage by dividing by the total number
                // of columns (12) and then multiplying by 100
                : ((columns / 12) * 100) + '%';
        return {
            'flex': `0 0 ${colSize}`,
            'width': `${colSize}`,
            'max-width': `${colSize}`
        };
    }
    // Called by push, pull, and offset since they use the same calculations
    calculatePosition(property, modifier) {
        const columns = this.getColumns(property);
        if (!columns) {
            return;
        }
        // If the number of columns passed are greater than 0 and less than
        // 12 we can position the column, else default to auto
        const amount = SUPPORTS_VARS
            // If CSS supports variables we should use the grid columns var
            ? `calc(calc(${columns} / var(--ion-grid-columns, 12)) * 100%)`
            // Convert the columns to a percentage by dividing by the total number
            // of columns (12) and then multiplying by 100
            : (columns > 0 && columns < 12) ? (columns / 12 * 100) + '%' : 'auto';
        return {
            [modifier]: amount
        };
    }
    calculateOffset(isRTL) {
        return this.calculatePosition('offset', isRTL ? 'margin-right' : 'margin-left');
    }
    calculatePull(isRTL) {
        return this.calculatePosition('pull', isRTL ? 'left' : 'right');
    }
    calculatePush(isRTL) {
        return this.calculatePosition('push', isRTL ? 'right' : 'left');
    }
    hostData() {
        const isRTL = document.dir === 'rtl';
        const mode = getIonMode(this);
        return {
            class: {
                [mode]: true
            },
            style: Object.assign({}, this.calculateOffset(isRTL), this.calculatePull(isRTL), this.calculatePush(isRTL), this.calculateSize())
        };
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-col"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["col.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["col.css"]
    }; }
    static get properties() { return {
        "offset": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string | undefined",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "The amount to offset the column, in terms of how many columns it should shift to the end\nof the total available."
            },
            "attribute": "offset",
            "reflect": false
        },
        "offsetXs": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string | undefined",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "The amount to offset the column for xs screens, in terms of how many columns it should shift\nto the end of the total available."
            },
            "attribute": "offset-xs",
            "reflect": false
        },
        "offsetSm": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string | undefined",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "The amount to offset the column for sm screens, in terms of how many columns it should shift\nto the end of the total available."
            },
            "attribute": "offset-sm",
            "reflect": false
        },
        "offsetMd": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string | undefined",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "The amount to offset the column for md screens, in terms of how many columns it should shift\nto the end of the total available."
            },
            "attribute": "offset-md",
            "reflect": false
        },
        "offsetLg": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string | undefined",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "The amount to offset the column for lg screens, in terms of how many columns it should shift\nto the end of the total available."
            },
            "attribute": "offset-lg",
            "reflect": false
        },
        "offsetXl": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string | undefined",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "The amount to offset the column for xl screens, in terms of how many columns it should shift\nto the end of the total available."
            },
            "attribute": "offset-xl",
            "reflect": false
        },
        "pull": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string | undefined",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "The amount to pull the column, in terms of how many columns it should shift to the start of\nthe total available."
            },
            "attribute": "pull",
            "reflect": false
        },
        "pullXs": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string | undefined",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "The amount to pull the column for xs screens, in terms of how many columns it should shift\nto the start of the total available."
            },
            "attribute": "pull-xs",
            "reflect": false
        },
        "pullSm": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string | undefined",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "The amount to pull the column for sm screens, in terms of how many columns it should shift\nto the start of the total available."
            },
            "attribute": "pull-sm",
            "reflect": false
        },
        "pullMd": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string | undefined",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "The amount to pull the column for md screens, in terms of how many columns it should shift\nto the start of the total available."
            },
            "attribute": "pull-md",
            "reflect": false
        },
        "pullLg": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string | undefined",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "The amount to pull the column for lg screens, in terms of how many columns it should shift\nto the start of the total available."
            },
            "attribute": "pull-lg",
            "reflect": false
        },
        "pullXl": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string | undefined",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "The amount to pull the column for xl screens, in terms of how many columns it should shift\nto the start of the total available."
            },
            "attribute": "pull-xl",
            "reflect": false
        },
        "push": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string | undefined",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "The amount to push the column, in terms of how many columns it should shift to the end\nof the total available."
            },
            "attribute": "push",
            "reflect": false
        },
        "pushXs": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string | undefined",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "The amount to push the column for xs screens, in terms of how many columns it should shift\nto the end of the total available."
            },
            "attribute": "push-xs",
            "reflect": false
        },
        "pushSm": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string | undefined",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "The amount to push the column for sm screens, in terms of how many columns it should shift\nto the end of the total available."
            },
            "attribute": "push-sm",
            "reflect": false
        },
        "pushMd": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string | undefined",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "The amount to push the column for md screens, in terms of how many columns it should shift\nto the end of the total available."
            },
            "attribute": "push-md",
            "reflect": false
        },
        "pushLg": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string | undefined",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "The amount to push the column for lg screens, in terms of how many columns it should shift\nto the end of the total available."
            },
            "attribute": "push-lg",
            "reflect": false
        },
        "pushXl": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string | undefined",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "The amount to push the column for xl screens, in terms of how many columns it should shift\nto the end of the total available."
            },
            "attribute": "push-xl",
            "reflect": false
        },
        "size": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string | undefined",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "The size of the column, in terms of how many columns it should take up out of the total\navailable. If `\"auto\"` is passed, the column will be the size of its content."
            },
            "attribute": "size",
            "reflect": false
        },
        "sizeXs": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string | undefined",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "The size of the column for xs screens, in terms of how many columns it should take up out\nof the total available. If `\"auto\"` is passed, the column will be the size of its content."
            },
            "attribute": "size-xs",
            "reflect": false
        },
        "sizeSm": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string | undefined",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "The size of the column for sm screens, in terms of how many columns it should take up out\nof the total available. If `\"auto\"` is passed, the column will be the size of its content."
            },
            "attribute": "size-sm",
            "reflect": false
        },
        "sizeMd": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string | undefined",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "The size of the column for md screens, in terms of how many columns it should take up out\nof the total available. If `\"auto\"` is passed, the column will be the size of its content."
            },
            "attribute": "size-md",
            "reflect": false
        },
        "sizeLg": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string | undefined",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "The size of the column for lg screens, in terms of how many columns it should take up out\nof the total available. If `\"auto\"` is passed, the column will be the size of its content."
            },
            "attribute": "size-lg",
            "reflect": false
        },
        "sizeXl": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string | undefined",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "The size of the column for xl screens, in terms of how many columns it should take up out\nof the total available. If `\"auto\"` is passed, the column will be the size of its content."
            },
            "attribute": "size-xl",
            "reflect": false
        }
    }; }
    static get elementRef() { return "el"; }
    static get listeners() { return [{
            "name": "resize",
            "method": "onResize",
            "target": "window",
            "capture": false,
            "passive": true
        }]; }
}
