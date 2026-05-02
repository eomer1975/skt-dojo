export interface ElementoPagina {
  titolo: string;
  immagine: string;
  testo: string;
}

export interface Pagina {
  id: number;
  codice: string;
  titolo: string;
  testo: string;
  immagineSfondo: string;
  elementi: ElementoPagina[];
}
