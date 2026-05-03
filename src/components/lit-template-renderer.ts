import { LitElement, html } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

function leggiValorePerPath(data: Record<string, unknown>, path: string): unknown {
  const parti = path.split(".").filter(Boolean);
  let corrente: unknown = data;

  for (const parte of parti) {
    if (corrente === null || typeof corrente !== "object") {
      return "";
    }

    corrente = (corrente as Record<string, unknown>)[parte];
  }

  return corrente;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export class LitTemplateRenderer extends LitElement {
  static properties = {
    templateHtml: { type: String, attribute: "template-html" },
    data: { attribute: false }
  };

  templateHtml = "";
  data: Record<string, unknown> = {};

  createRenderRoot(): this {
    return this;
  }

  private compilaTemplate(): string {
    const template = this.templateHtml || "";

    const conRawHtml = template.replace(/\{\{\{\s*([\w.]+)\s*\}\}\}/g, (_match, key: string) => {
      const valore = leggiValorePerPath(this.data, key);
      return valore == null ? "" : String(valore);
    });

    return conRawHtml.replace(/\{\{\s*([\w.]+)\s*\}\}/g, (_match, key: string) => {
      const valore = leggiValorePerPath(this.data, key);
      return escapeHtml(valore == null ? "" : String(valore));
    });
  }

  render() {
    return html`${unsafeHTML(this.compilaTemplate())}`;
  }
}

if (!customElements.get("lit-template-renderer")) {
  customElements.define("lit-template-renderer", LitTemplateRenderer);
}

declare global {
  interface HTMLElementTagNameMap {
    "lit-template-renderer": LitTemplateRenderer;
  }
}
