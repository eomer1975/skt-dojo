import { pagine } from "../data/pagine.js";
export function leggiCodicePaginaDaUrl(pathname) {
    const pulito = pathname.replace(/^\/+|\/+$/g, "");
    return pulito || "home";
}
export function caricaPaginaDaCodice(codice) {
    return pagine.find((pagina) => pagina.codice === codice);
}
export function caricaPaginaDaUrl(pathname) {
    const codice = leggiCodicePaginaDaUrl(pathname);
    return caricaPaginaDaCodice(codice);
}
//# sourceMappingURL=pagina-engine.js.map