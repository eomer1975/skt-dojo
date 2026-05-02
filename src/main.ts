import { caricaPaginaDaUrl } from "./engine/pagina-engine";

const heading = document.querySelector("h1");
const intro = document.querySelector("p");
const paginaCorrente = caricaPaginaDaUrl(window.location.pathname);

if (heading instanceof HTMLElement) {
  heading.textContent = paginaCorrente ? paginaCorrente.titolo : "Pagina non trovata";
}

if (intro instanceof HTMLElement) {
  intro.textContent = paginaCorrente
    ? paginaCorrente.testo
    : "Il codice pagina non esiste. Controlla l'URL.";
}

if (paginaCorrente) {
  document.body.style.backgroundImage = `url('${paginaCorrente.immagineSfondo}')`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
}

console.log("Pagina caricata da URL", paginaCorrente);
