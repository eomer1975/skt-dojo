import { pagine } from "../data/pagine";
import { Pagina } from "../models/pagina.model";

export function leggiCodicePaginaDaUrl(pathname: string): string {
  const pulito = pathname.replace(/^\/+|\/+$/g, "");
  return pulito || "home";
}

export function caricaPaginaDaCodice(codice: string): Pagina | undefined {
  return pagine.find((pagina) => pagina.codice === codice);
}

export function caricaPaginaDaUrl(pathname: string): Pagina | undefined {
  const codice = leggiCodicePaginaDaUrl(pathname);
  return caricaPaginaDaCodice(codice);
}
