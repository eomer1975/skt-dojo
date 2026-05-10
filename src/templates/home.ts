import { html, nothing, TemplateResult } from "lit";
import { Pagina } from "../models/pagina.model.js";

function normalizzaParagrafi(testo: Pagina["testo"]): string[] {
  const paragrafi = Array.isArray(testo) ? testo : [testo];

  return paragrafi
    .map((paragrafo) => paragrafo.trim())
    .filter((paragrafo) => paragrafo.length > 0);
}

function renderElementiTemplate(
  elementi: Pagina["elementi"],
  creaPathAsset: (path: string) => string
): TemplateResult | typeof nothing {
  if (elementi.length === 0) {
    return nothing;
  }

  return html`
    <div class="hero-cards">
      ${elementi.map((elemento) => html`
        <article class="hero-card">
          <div class="hero-card-media">
            <img src="${creaPathAsset(elemento.immagine)}" alt="${elemento.titolo}">
          </div>
          <div class="hero-card-content">
            <h2>${elemento.titolo}</h2>
            ${renderTestoElemento(elemento.testo)}
          </div>
        </article>
      `)}
    </div>
  `;
}

function renderTestoElemento(testo: string | string[]): TemplateResult {
  if (Array.isArray(testo)) {
    return html`${testo.map((paragrafo) => html`<p>${paragrafo}</p>`)}`;
  }
  return html`<p>${testo}</p>`;
}

export function renderTemplateHome(
  pagina: Pagina,
  creaPathAsset: (path: string) => string
): TemplateResult {
  const paragrafi = normalizzaParagrafi(pagina.testo);
  const testoIntro = paragrafi[0] || "";
  const testoDefinizione = paragrafi.slice(1);

  return html`
    <section class="home-layout">
      <h1 class="home-title">${pagina.titolo}</h1>
      <div class="home-top-row">
        <div class="home-logo-box image-card">
          <img src="${creaPathAsset("assets/logo-black.png")}" alt="SKT Dojo logo">
        </div>
        <div class="home-intro-box text-card">
          ${testoIntro ? html`<p>${testoIntro}</p>` : nothing}
        </div>
      </div>
      <div class="home-main-row">
        <div class="home-image-box image-card">
          <img src="${creaPathAsset(pagina.immagine)}" alt="${pagina.titolo}">
        </div>
        <div class="home-definizione-box text-card">
          ${testoDefinizione.map((paragrafo) => html`<p>${paragrafo}</p>`)}
        </div>
      </div>
      <div class="home-elements">${renderElementiTemplate(pagina.elementi, creaPathAsset)}</div>
    </section>
  `;
}