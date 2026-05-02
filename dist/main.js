import { caricaPaginaDaCodice, leggiCodicePaginaDaUrl } from "./engine/pagina-engine.js";
const sfondiDisponibili = [
    "assets/sfondi/samurai01.png",
    "assets/sfondi/samurai02.png",
    "assets/sfondi/yamabushi01.png"
];
let ultimoSfondoIndex = -1;
let sfondoRenderId = 0;
let ultimoTransitionIndex = -1;
let activeBgLayerIndex = 0;
const cacheSfondoPerCodice = new Map();
const heading = document.querySelector(".hero h1");
const intro = document.querySelector(".hero p");
const menuToggle = document.querySelector("#menu-toggle");
const navLinks = Array.from(document.querySelectorAll(".topbar a[href]"));
const bgLayers = Array.from(document.querySelectorAll(".bg-layer"));
const transizioni = [
    "transition-fade",
    "transition-zoom",
    "transition-swipe"
];
function scegliSfondoRandom() {
    if (sfondiDisponibili.length === 0) {
        return "";
    }
    if (sfondiDisponibili.length === 1) {
        return sfondiDisponibili[0];
    }
    let prossimoIndex = Math.floor(Math.random() * sfondiDisponibili.length);
    while (prossimoIndex === ultimoSfondoIndex) {
        prossimoIndex = Math.floor(Math.random() * sfondiDisponibili.length);
    }
    ultimoSfondoIndex = prossimoIndex;
    return sfondiDisponibili[prossimoIndex];
}
function scegliTransizioneRandom() {
    if (transizioni.length === 1) {
        return transizioni[0];
    }
    let prossimoIndex = Math.floor(Math.random() * transizioni.length);
    while (prossimoIndex === ultimoTransitionIndex) {
        prossimoIndex = Math.floor(Math.random() * transizioni.length);
    }
    ultimoTransitionIndex = prossimoIndex;
    return transizioni[prossimoIndex];
}
function applicaTransizioneSfondo(url) {
    if (bgLayers.length < 2) {
        document.body.style.backgroundImage = `url('${url}')`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        return;
    }
    const outgoingLayer = bgLayers[activeBgLayerIndex];
    const incomingIndex = activeBgLayerIndex === 0 ? 1 : 0;
    const incomingLayer = bgLayers[incomingIndex];
    const classeTransizione = scegliTransizioneRandom();
    incomingLayer.style.backgroundImage = `url('${url}')`;
    incomingLayer.classList.remove("transition-fade", "transition-zoom", "transition-swipe", "is-entering");
    void incomingLayer.offsetWidth;
    incomingLayer.classList.add("is-active", "is-entering", classeTransizione);
    outgoingLayer.classList.remove("is-active");
    window.setTimeout(() => {
        incomingLayer.classList.remove("is-entering", classeTransizione);
    }, 1000);
    activeBgLayerIndex = incomingIndex;
}
function verificaEsistenzaImmagine(url) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = url;
    });
}
async function impostaSfondoPagina(codicePagina, fallback) {
    const renderIdCorrente = ++sfondoRenderId;
    const sfondiCodice = [
        `assets/sfondi/${codicePagina}.jpg`,
        `assets/sfondi/${codicePagina}.png`
    ];
    let sfondoCodice = cacheSfondoPerCodice.get(codicePagina);
    if (sfondoCodice === undefined) {
        sfondoCodice = null;
        for (const candidato of sfondiCodice) {
            const esiste = await verificaEsistenzaImmagine(candidato);
            if (esiste) {
                sfondoCodice = candidato;
                break;
            }
        }
        cacheSfondoPerCodice.set(codicePagina, sfondoCodice);
    }
    if (renderIdCorrente !== sfondoRenderId) {
        return;
    }
    const sfondoFinale = sfondoCodice || fallback;
    applicaTransizioneSfondo(sfondoFinale);
}
function aggiornaLinkAttivo(codicePagina) {
    for (const link of navLinks) {
        const linkPath = new URL(link.href, window.location.origin).pathname;
        const linkCodice = leggiCodicePaginaDaUrl(linkPath);
        const isAttivo = linkCodice === codicePagina;
        link.classList.toggle("is-active", isAttivo);
        if (isAttivo) {
            link.setAttribute("aria-current", "page");
        }
        else {
            link.removeAttribute("aria-current");
        }
    }
}
function renderPagina(pathname) {
    const codicePagina = leggiCodicePaginaDaUrl(pathname);
    const pagina = caricaPaginaDaCodice(codicePagina);
    if (heading instanceof HTMLElement) {
        heading.textContent = pagina ? pagina.titolo : "Pagina non trovata";
    }
    if (intro instanceof HTMLElement) {
        intro.textContent = pagina
            ? pagina.testo
            : "Il codice pagina non esiste. Controlla l'URL.";
    }
    if (pagina) {
        const sfondoRandom = scegliSfondoRandom();
        const fallbackSfondo = sfondoRandom || pagina.immagineSfondo;
        void impostaSfondoPagina(codicePagina, fallbackSfondo);
        document.title = `${pagina.titolo} | SKT Dojo`;
    }
    else {
        sfondoRenderId++;
        if (bgLayers.length > 0) {
            bgLayers[0].style.backgroundImage = "none";
            bgLayers[1].style.backgroundImage = "none";
        }
        else {
            document.body.style.backgroundImage = "none";
        }
        document.title = "Pagina non trovata | SKT Dojo";
    }
    aggiornaLinkAttivo(codicePagina);
    return { codice: codicePagina, trovata: Boolean(pagina) };
}
function naviga(pathname, historyMode = "push") {
    const { codice, trovata } = renderPagina(pathname);
    const prossimoPath = trovata ? `/${codice}` : pathname;
    if (historyMode === "push" && prossimoPath !== window.location.pathname) {
        window.history.pushState({ codice }, "", prossimoPath);
    }
    if (historyMode === "replace" && prossimoPath !== window.location.pathname) {
        window.history.replaceState({ codice }, "", prossimoPath);
    }
    if (menuToggle) {
        menuToggle.checked = false;
    }
}
for (const link of navLinks) {
    link.addEventListener("click", (event) => {
        if (event.defaultPrevented || event.button !== 0) {
            return;
        }
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
            return;
        }
        const href = link.getAttribute("href");
        if (!href) {
            return;
        }
        const url = new URL(href, window.location.origin);
        if (url.origin !== window.location.origin) {
            return;
        }
        event.preventDefault();
        naviga(url.pathname, "push");
    });
}
window.addEventListener("popstate", () => {
    naviga(window.location.pathname, "none");
});
if (window.location.pathname === "/") {
    naviga("/home", "replace");
}
else {
    naviga(window.location.pathname, "none");
}
//# sourceMappingURL=main.js.map