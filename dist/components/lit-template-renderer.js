import { LitElement, html } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
function leggiValorePerPath(data, path) {
    const parti = path.split(".").filter(Boolean);
    let corrente = data;
    for (const parte of parti) {
        if (corrente === null || typeof corrente !== "object") {
            return "";
        }
        corrente = corrente[parte];
    }
    return corrente;
}
function escapeHtml(value) {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\"/g, "&quot;")
        .replace(/'/g, "&#39;");
}
export class LitTemplateRenderer extends LitElement {
    constructor() {
        super(...arguments);
        this.templateHtml = "";
        this.data = {};
    }
    createRenderRoot() {
        return this;
    }
    compilaTemplate() {
        const template = this.templateHtml || "";
        const conRawHtml = template.replace(/\{\{\{\s*([\w.]+)\s*\}\}\}/g, (_match, key) => {
            const valore = leggiValorePerPath(this.data, key);
            return valore == null ? "" : String(valore);
        });
        return conRawHtml.replace(/\{\{\s*([\w.]+)\s*\}\}/g, (_match, key) => {
            const valore = leggiValorePerPath(this.data, key);
            return escapeHtml(valore == null ? "" : String(valore));
        });
    }
    render() {
        return html `${unsafeHTML(this.compilaTemplate())}`;
    }
}
LitTemplateRenderer.properties = {
    templateHtml: { type: String, attribute: "template-html" },
    data: { attribute: false }
};
if (!customElements.get("lit-template-renderer")) {
    customElements.define("lit-template-renderer", LitTemplateRenderer);
}
//# sourceMappingURL=lit-template-renderer.js.map