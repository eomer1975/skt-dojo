import { pagine } from "./data/pagine.js";
import { caricaPaginaDaCodice, leggiCodicePaginaDaUrl } from "./engine/pagina-engine.js";
const sfondiDisponibili = [
    "assets/sfondi/samurai01.png",
    "assets/sfondi/samurai02.png",
    "assets/sfondi/yamabushi01.png",
    "assets/sfondi/maestri.png"
];
let ultimoSfondoIndex = -1;
let sfondoRenderId = 0;
let ultimoTransitionIndex = -1;
let activeBgLayerIndex = 0;
let navLinks = [];
const cacheSfondoPerCodice = new Map();
const paginePerCodice = new Map(pagine.map((pagina) => [pagina.codice, pagina]));
const figliPerParent = new Map();
for (const pagina of pagine) {
    if (pagina.parent === null) {
        continue;
    }
    const figli = figliPerParent.get(pagina.parent) || [];
    figli.push(pagina);
    figliPerParent.set(pagina.parent, figli);
}
const heading = document.querySelector(".hero h1");
const intro = document.querySelector(".hero p");
const menuToggle = document.querySelector("#menu-toggle");
const navContainer = document.querySelector(".nav-links");
const bgLayers = Array.from(document.querySelectorAll(".bg-layer"));
function normalizzaSegmentiDuplicati(path) {
    const segmenti = path.split("/").filter(Boolean);
    const compressi = [];
    for (const segmento of segmenti) {
        if (compressi[compressi.length - 1] !== segmento) {
            compressi.push(segmento);
        }
    }
    return compressi.length > 0 ? `/${compressi.join("/")}` : "/";
}
function normalizzaUrlIniziale() {
    const pathnameNormalizzato = normalizzaSegmentiDuplicati(window.location.pathname);
    if (pathnameNormalizzato === window.location.pathname) {
        return;
    }
    const prossimoUrl = `${pathnameNormalizzato}${window.location.search}${window.location.hash}`;
    window.history.replaceState(window.history.state, "", prossimoUrl);
}
normalizzaUrlIniziale();
const appRootUrl = new URL("../", import.meta.url);
const basePath = appRootUrl.pathname.replace(/\/$/, "");
const transizioni = [
    "transition-fade",
    "transition-zoom",
    "transition-swipe"
];
function normalizzaPathname(pathname) {
    if (!basePath) {
        return pathname;
    }
    if (pathname === basePath || pathname === `${basePath}/`) {
        return "/";
    }
    if (pathname.startsWith(`${basePath}/`)) {
        return pathname.slice(basePath.length);
    }
    return pathname;
}
function creaPathPagina(codice) {
    return new URL(codice, appRootUrl).pathname;
}
function creaPathAsset(path) {
    if (/^https?:\/\//.test(path)) {
        return path;
    }
    const pathRelativo = path.replace(/^\//, "");
    return new URL(pathRelativo, appRootUrl).pathname;
}
function aggiornaRiferimentiMenu() {
    navLinks = navContainer
        ? Array.from(navContainer.querySelectorAll("a[href]"))
        : [];
}
function creaLinkMenu(pagina) {
    const link = document.createElement("a");
    link.href = creaPathPagina(pagina.codice);
    link.textContent = pagina.titolo;
    link.classList.add("nav-link");
    return link;
}
function impostaStatoSottomenu(item, isOpen) {
    item.classList.toggle("is-open", isOpen);
    const link = item.querySelector(".nav-link--parent");
    if (link) {
        link.setAttribute("aria-expanded", String(isOpen));
    }
}
function preparaMenuConSottomenu() {
    if (!(navContainer instanceof HTMLElement)) {
        return;
    }
    for (const child of Array.from(navContainer.children)) {
        if (!(child instanceof HTMLAnchorElement)) {
            continue;
        }
        const href = child.getAttribute("href");
        if (!href) {
            continue;
        }
        const codice = leggiCodicePaginaDaUrl(href);
        const pagina = paginePerCodice.get(codice);
        if (!pagina) {
            child.classList.add("nav-link");
            continue;
        }
        child.href = creaPathPagina(pagina.codice);
        child.classList.add("nav-link");
        const figli = figliPerParent.get(pagina.id) || [];
        if (figli.length === 0) {
            continue;
        }
        const item = document.createElement("div");
        item.className = "nav-item nav-item--has-children";
        item.dataset.pageCode = pagina.codice;
        const parent = document.createElement("div");
        parent.className = "nav-parent";
        child.classList.add("nav-link--parent");
        child.setAttribute("aria-expanded", "false");
        const submenu = document.createElement("div");
        submenu.className = "nav-submenu";
        for (const figlio of figli) {
            const linkFiglio = creaLinkMenu(figlio);
            linkFiglio.classList.add("nav-sublink");
            submenu.append(linkFiglio);
        }
        navContainer.replaceChild(item, child);
        parent.append(child);
        item.append(parent, submenu);
    }
    aggiornaRiferimentiMenu();
}
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
    return creaPathAsset(sfondiDisponibili[prossimoIndex]);
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
        creaPathAsset(`assets/sfondi/${codicePagina}.jpg`),
        creaPathAsset(`assets/sfondi/${codicePagina}.png`)
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
    const sfondoFinale = sfondoCodice || creaPathAsset(fallback);
    applicaTransizioneSfondo(sfondoFinale);
}
function aggiornaLinkAttivo(codicePagina) {
    var _a;
    const paginaAttiva = caricaPaginaDaCodice(codicePagina);
    const parentAttivo = (_a = paginaAttiva === null || paginaAttiva === void 0 ? void 0 : paginaAttiva.parent) !== null && _a !== void 0 ? _a : null;
    for (const link of navLinks) {
        const href = link.getAttribute("href") || "";
        const linkCodice = leggiCodicePaginaDaUrl(normalizzaPathname(new URL(href, window.location.origin).pathname));
        const paginaLink = paginePerCodice.get(linkCodice);
        const isAttivo = linkCodice === codicePagina || (paginaLink === null || paginaLink === void 0 ? void 0 : paginaLink.id) === parentAttivo;
        const isCorrente = linkCodice === codicePagina;
        link.classList.toggle("is-active", isAttivo);
        if (isCorrente) {
            link.setAttribute("aria-current", "page");
        }
        else {
            link.removeAttribute("aria-current");
        }
    }
    if (!(navContainer instanceof HTMLElement)) {
        return;
    }
    const gruppi = Array.from(navContainer.querySelectorAll(".nav-item--has-children"));
    for (const gruppo of gruppi) {
        const codiceGruppo = gruppo.dataset.pageCode || "";
        const paginaGruppo = paginePerCodice.get(codiceGruppo);
        const isRamoAttivo = codiceGruppo === codicePagina || (paginaGruppo === null || paginaGruppo === void 0 ? void 0 : paginaGruppo.id) === parentAttivo;
        gruppo.classList.toggle("is-active", isRamoAttivo);
        impostaStatoSottomenu(gruppo, false);
    }
}
function renderPagina(pathname) {
    const codicePagina = leggiCodicePaginaDaUrl(normalizzaPathname(pathname));
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
    const prossimoPath = trovata ? creaPathPagina(codice) : pathname;
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
preparaMenuConSottomenu();
if (navContainer) {
    navContainer.addEventListener("click", (event) => {
        const target = event.target instanceof HTMLElement ? event.target : null;
        if (!target) {
            return;
        }
        const link = target.closest("a[href]");
        if (!link || !navContainer.contains(link)) {
            return;
        }
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
    document.addEventListener("click", (event) => {
        const target = event.target;
        if (!(target instanceof Node) || navContainer.contains(target)) {
            return;
        }
        for (const gruppo of Array.from(navContainer.querySelectorAll(".nav-item--has-children"))) {
            impostaStatoSottomenu(gruppo, false);
        }
    });
}
window.addEventListener("popstate", () => {
    naviga(window.location.pathname, "none");
});
if (window.location.pathname === "/") {
    naviga(creaPathPagina("home"), "replace");
}
else {
    const pathCorrente = normalizzaPathname(window.location.pathname) === "/"
        ? creaPathPagina("home")
        : window.location.pathname;
    naviga(pathCorrente, "none");
}
//# sourceMappingURL=main.js.map