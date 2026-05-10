import { Pagina } from "../models/pagina.model.js";

export const pagine: Pagina[] = [
  {
    id: 1,
    parent: null,
    codice: "home",
    template: "home",
    titolo: "Shin ki tai dojo Roma",
    testo: ["Un dojo Bujinkan a Roma. Migliorati studioando il Budo taijutsu, il sistema codificato da Masaaki Hatsumi che unisce nove ryuha giapponesi in un percorso di crescita personale e marziale.",
      "Nella nostra accademia pratichiamo arti marziali tradizionali giapponesi, in particolare il Bujutsu e il Taijutsu, antiche discipline nate sul campo di battaglia e perfezionate nei secoli come via di crescita personale.",
      "Le nostre lezioni combinano studio tecnico, allenamento fisico e ricerca interiore: ogni movimento è occasione per scoprire qualcosa di sé, migliorare la concentrazione e rafforzare il corpo in modo armonioso.",
      "Nel nostro dojo si pratica in amicizia, con attenzione e spirito di collaborazione. Ogni lezione è un incontro tra persone che condividono la stessa ricerca: diventare più presenti, più forti e più gentili."
    ],
    immagine: "assets/home.png",
    immagineSfondo: "assets/sfondi/yamabushi01.png",
    elementi: [
      {
        titolo: "I nostri corsi",
        immagine: "assets/corsi-piccolo.png",
        testo: "Programmi adatti a principianti ed esperti."
      }
    ]
  },
  {
    id: 2,
    parent: null,
    codice: "ninja-kids",
    template: "ninja-kids",
    titolo: "Ninja Kids",
    testo: [
      "Percorso dedicato ai piu giovani con attenzione a disciplina, gioco e crescita. Nel corso Ninja Kids i bambini non imparano soltanto tecniche di movimento: imparano a crescere insieme.",
      "Attraverso giochi di equilibrio, percorsi ninja, esercizi di coordinazione, cadute, tecniche di difesa e attività di gruppo, ogni allenamento diventa un’avventura capace di sviluppare corpo, mente e carattere.",
      "Nel nostro dojo la cooperazione viene prima della competizione. I bambini imparano ad aiutarsi, a superare le difficoltà con coraggio e a trasformare l’energia in concentrazione e fiducia in sé stessi. Ogni lezione alterna momenti dinamici e divertenti ad altri più calmi, dedicati alla respirazione, all’attenzione e all’autocontrollo."
    ],
    immagine: "assets/ninja_kids2.png",
    immagineSfondo: "assets/sfondi/yamabushi01.png",
    elementi: [
      {
        titolo: "Programma bambini",
        immagine: "assets/ninja_kids1.png",
        testo: ["Il percorso è pensato per bambini e ragazzi fino ai 14 anni e unisce spirito marziale, fantasia e amicizia in un ambiente sicuro e accogliente. I piccoli ninja si allenano insieme, affrontano sfide, ridono, collaborano e costruiscono legami autentici, guidati da istruttori esperti che seguono la crescita di ogni allievo con attenzione e passione.",
          "Per noi diventare ninja significa imparare a essere forti, gentili e uniti."]
      },
      {
        titolo: "Obiettivi formativi",
        immagine: "assets/amicizia01.png",
        testo: "Sviluppo motorio, autocontrollo e collaborazione nel gruppo."
      }
    ]
  },
  {
    id: 3,
    parent: null,
    codice: "adulti",
    template: "standard",
    titolo: "Corsi adolescenti e adulti",
    testo: "Allenamento tecnico e tradizionale per principianti e praticanti avanzati.",
    immagine: "assets/legacy/corsi.jpg",
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
    template: "standard",
    titolo: "Dove e Quando",
    testo: "Informazioni su sede del dojo, orari dei corsi e modalita di accesso.",
    immagine: "assets/legacy/dojo.jpg",
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
    template: "standard",
    titolo: "La Bujinkan",
    testo: "Panoramica su storia, principi e spirito della tradizione Bujinkan.",
    immagine: "assets/legacy/dojo.jpg",
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
    template: "standard",
    titolo: "Il Soke",
    testo: "Profilo di Masaaki Hatsumi, fondatore della Bujinkan e figura centrale del Budo Tai Jutsu.",
    immagine: "assets/legacy/dojo.jpg",
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
    template: "standard",
    titolo: "I Maestri",
    testo: "Le figure che hanno trasmesso il patrimonio tecnico e umano da Takamatsu Sensei a Hatsumi Sensei.",
    immagine: "assets/legacy/dojo.jpg",
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
    template: "standard",
    titolo: "Le 9 Scuole",
    testo: "Panoramica delle nove tradizioni marziali che compongono il Budo Tai Jutsu trasmesso nella Bujinkan.",
    immagine: "assets/legacy/corsi.jpg",
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
    template: "standard",
    titolo: "Regole del Dojo",
    testo: "Linee guida di comportamento, sicurezza e partecipazione alla pratica.",
    immagine: "assets/legacy/dojo.jpg",
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
    template: "standard",
    titolo: "Contatti",
    testo: "Riferimenti per informazioni, prove e iscrizioni ai corsi del dojo.",
    immagine: "assets/legacy/corsi.jpg",
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
