import { Pagina } from "../models/pagina.model.js";

export const pagine: Pagina[] = [
  {
    id: 1,
    parent: null,
    codice: "home",
    titolo: "Benvenuto nel Dojo",
    testo: "Scopri il nostro percorso di studio e crescita personale.",
    immagineSfondo: "assets/sfondi/yamabushi01.png",
    elementi: [
      {
        titolo: "I nostri corsi",
        immagine: "assets/legacy/corsi.jpg",
        testo: "Programmi adatti a principianti ed esperti."
      },
      {
        titolo: "Il Dojo",
        immagine: "assets/legacy/dojo.jpg",
        testo: "Uno spazio dedicato alla pratica e al rispetto reciproco."
      }
    ]
  },
  {
    id: 2,
    parent: null,
    codice: "ninja-kids",
    titolo: "Ninja Kids",
    testo: "Percorso dedicato ai piu giovani con attenzione a disciplina, gioco e crescita.",
    immagineSfondo: "assets/sfondi/yamabushi01.png",
    elementi: [
      {
        titolo: "Programma bambini",
        immagine: "assets/legacy/corsi.jpg",
        testo: "Attivita progressive per coordinazione, rispetto e concentrazione."
      },
      {
        titolo: "Obiettivi formativi",
        immagine: "assets/legacy/dojo.jpg",
        testo: "Sviluppo motorio, autocontrollo e collaborazione nel gruppo."
      }
    ]
  },
  {
    id: 3,
    parent: null,
    codice: "adulti",
    titolo: "Corsi adolescenti e adulti",
    testo: "Allenamento tecnico e tradizionale per principianti e praticanti avanzati.",
    immagineSfondo: "assets/sfondi/yamabushi01.png",
    elementi: [
      {
        titolo: "Lezioni settimanali",
        immagine: "assets/legacy/corsi.jpg",
        testo: "Studio di kihon, postura, distanza e principi di movimento."
      },
      {
        titolo: "Percorso personale",
        immagine: "assets/legacy/dojo.jpg",
        testo: "Progressione individuale nel rispetto dei tempi di apprendimento."
      }
    ]
  },
  {
    id: 4,
    parent: null,
    codice: "dove-quando",
    titolo: "Dove e Quando",
    testo: "Informazioni su sede del dojo, orari dei corsi e modalita di accesso.",
    immagineSfondo: "assets/sfondi/yamabushi01.png",
    elementi: [
      {
        titolo: "Sede",
        immagine: "assets/legacy/dojo.jpg",
        testo: "Indicazioni pratiche per raggiungerci e accedere alla sala."
      },
      {
        titolo: "Orari",
        immagine: "assets/legacy/corsi.jpg",
        testo: "Calendario lezioni aggiornato per gruppi e livelli."
      }
    ]
  },
  {
    id: 5,
    parent: null,
    codice: "bujinkan",
    titolo: "La Bujinkan",
    testo: "Panoramica su storia, principi e spirito della tradizione Bujinkan.",
    immagineSfondo: "assets/sfondi/yamabushi01.png",
    elementi: [
      {
        titolo: "Origini",
        immagine: "assets/legacy/dojo.jpg",
        testo: "Contesto storico e trasmissione della scuola fino a oggi."
      },
      {
        titolo: "Valori",
        immagine: "assets/legacy/corsi.jpg",
        testo: "Rispetto, umilta e ricerca continua nella pratica marziale."
      }
    ]
  },
  {
    id: 8,
    parent: 5,
    codice: "il-soke",
    titolo: "Il Soke",
    testo: "Profilo di Masaaki Hatsumi, fondatore della Bujinkan e figura centrale del Budo Tai Jutsu.",
    immagineSfondo: "assets/sfondi/yamabushi01.png",
    elementi: [
      {
        titolo: "Masaaki Hatsumi",
        immagine: "assets/legacy/dojo.jpg",
        testo: "Dalla formazione nel judo alla trasmissione del lignaggio ricevuto da Takamatsu Toshitsugu."
      },
      {
        titolo: "Fondazione della Bujinkan",
        immagine: "assets/legacy/corsi.jpg",
        testo: "La nascita di una organizzazione internazionale dedicata alla preservazione del Budo Tai Jutsu."
      }
    ]
  },
  {
    id: 9,
    parent: 5,
    codice: "i-maestri",
    titolo: "I Maestri",
    testo: "Le figure che hanno trasmesso il patrimonio tecnico e umano da Takamatsu Sensei a Hatsumi Sensei.",
    immagineSfondo: "assets/sfondi/maestri.png",
    elementi: [
      {
        titolo: "Takamatsu Toshitsugu",
        immagine: "assets/legacy/dojo.jpg",
        testo: "Il maestro da cui Hatsumi ha ricevuto insegnamenti, lignaggio e responsabilita di trasmissione."
      },
      {
        titolo: "Trasmissione diretta",
        immagine: "assets/legacy/corsi.jpg",
        testo: "La relazione maestro-allievo come fondamento dello studio tradizionale nel dojo."
      }
    ]
  },
  {
    id: 10,
    parent: 5,
    codice: "le-9-scuole",
    titolo: "Le 9 Scuole",
    testo: "Panoramica delle nove tradizioni marziali che compongono il Budo Tai Jutsu trasmesso nella Bujinkan.",
    immagineSfondo: "assets/sfondi/yamabushi01.png",
    elementi: [
      {
        titolo: "Tradizioni Koryu",
        immagine: "assets/legacy/corsi.jpg",
        testo: "Dalle scuole shinobi alle tradizioni samurai, nove lignaggi confluiscono nello studio moderno."
      },
      {
        titolo: "Studio integrato",
        immagine: "assets/legacy/dojo.jpg",
        testo: "Principi, distanza, postura e strategia emergono dall'incontro tra le diverse scuole."
      }
    ]
  },
  {
    id: 6,
    parent: null,
    codice: "regole",
    titolo: "Regole del Dojo",
    testo: "Linee guida di comportamento, sicurezza e partecipazione alla pratica.",
    immagineSfondo: "assets/sfondi/yamabushi01.png",
    elementi: [
      {
        titolo: "Etichetta",
        immagine: "assets/legacy/dojo.jpg",
        testo: "Norme di saluto, ordine e rispetto degli spazi comuni."
      },
      {
        titolo: "Sicurezza",
        immagine: "assets/legacy/corsi.jpg",
        testo: "Indicazioni essenziali per allenarsi in modo responsabile."
      }
    ]
  },
  {
    id: 7,
    parent: null,
    codice: "contatti",
    titolo: "Contatti",
    testo: "Riferimenti per informazioni, prove e iscrizioni ai corsi del dojo.",
    immagineSfondo: "assets/sfondi/yamabushi01.png",
    elementi: [
      {
        titolo: "Email e telefono",
        immagine: "assets/legacy/corsi.jpg",
        testo: "Canali diretti per richieste su orari, lezioni e disponibilita."
      },
      {
        titolo: "Richiedi una prova",
        immagine: "assets/legacy/dojo.jpg",
        testo: "Come prenotare una lezione conoscitiva e cosa portare."
      }
    ]
  }
];
