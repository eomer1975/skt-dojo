export interface ElementoPagina {
  titolo: string;
  immagine: string;
  testo: string | string[];
}

export interface Pagina {
  id: number;
  parent: number | null;
  codice: string;
  template: string;
  titolo: string;
  testo: string | string[];
  immagine: string;
  immagineSfondo: string;
  elementi: ElementoPagina[];
}
