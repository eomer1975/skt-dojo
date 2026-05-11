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
    testo: ["I termini BuJutsu e Taijutsu indicano due metodi appartenenti alle Arti Marziali Tradizionali Giapponesi. Tali metodi contemplano l'utilizzo delle armi così come le abilità di combattimento a mani nude, insegnando i sistemi delle Koryu (stili tradizionali giapponesi).", "Il ninjutsu è la strategia e la tattica militare di guerra non convenzionale, guerriglia e spionaggio. La nostra scuola porta avanti la tradizione marziale delle seguenti scuole di Ninjutsu: Togakure Ryu, Gyokushin Ryu e Kumogakure Ryu.", "La difesa personale comprende tecniche pratiche utili alla difesa dalle aggressioni, preparazione psicologica e prevenzione. Sviluppiamo consapevolezza ambientale, de-escalation della violenza e gestione delle reazioni emotive."],
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
    id: 11,
    parent: null,
    codice: "dojo-cho",
    template: "standard",
    titolo: "Il Dojo Cho",
    testo: ["Il Dojo-Cho dello Shin Ki Tai Dojo, responsabile della scuola dal 2014, è Cristina De Angelis, attualmente II Dan Bujinkan, già Istruttrice di Judo e di Ju Jutsu.", "Cristina inizia la pratica delle arti marziali nel 1993, approdando al Judo e dedicandosi alla didattica. Nel 2011 si dedica al Ju Jutsu per ritrovare le radici della via della cedevolezza, e poco dopo si dedica anche al Budo Tai Jutsu.", "Nel 2023 riceve l'incarico di Referente Regionale per il Lazio nel Settore Ninjutsu CSEN."],
    immagine: "assets/legacy/dojo.jpg",
    immagineSfondo: "assets/sfondi/yamabushi01.png",
    elementi: [
      {
        titolo: "Ruolo e responsabilità",
        immagine: "assets/legacy/dojo.jpg",
        testo: "Il dojo cho guida la comunità con spirito di servizio e dedizione alla pratica."
      },
      {
        titolo: "Trasmissione della pratica",
        immagine: "assets/legacy/corsi.jpg",
        testo: "Custode della tradizione e facilitatore della crescita individuale e collettiva."
      }
    ]
  },
  {
    id: 4,
    parent: null,
    codice: "dove-quando",
    template: "standard",
    titolo: "Dove e Quando",
    testo: ["La nostra accademia svolge i propri corsi in diverse location. In ognuna delle sedi è possibile, previa prenotazione, accedere a delle classi di prova o organizzare delle lezioni one to one esclusive.", "CINECITTA': Viale Tito Labieno 13 - Martedì 20:00-21:30 e Sabato 10:30-12:30. GROTTE CELONI: Via di Grotte Celoni 21 - Lunedì e Giovedì con lezioni Ninja Kids, Taiso e classi per tutti i livelli.", "Per prenotare una classe di prova o una lezione esclusiva, contattaci su WhatsApp: +39 3207520031 o invia una e-mail: artimarzialiroma@shinkitaidojo.com"],
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
    testo: ["Il Budo Tai Jutsu è un'arte marziale nata dal connubio di nove antiche tradizioni marziali Samurai e Shinobi (Koryu). Precedentemente era conosciuta come Bujinkan Ninpō Taijutsu e poi Ninjutsu.", "Le 9 Koryu che compongono il Budo Tai Jutsu sono: Togakure-ryū Ninpō Taijutsu, Gyokko-ryū Kosshijutsu, Kuki Shinden Happō Hikenjutsu, Kotō-ryū Koppōjutsu, Shinden Fudō-ryū Dakentaijutsu, Takagi Yōshin-ryū Jūtaijutsu, Gyokushin-ryū Ninpō, Kumogakure-ryū Ninpō e Gikan-ryū Koppōjutsu.", "Bujinkan (武神館), 'casa del guerriero divino', è un'organizzazione fondata nel 1974 da Hatsumi Sensei per onorare il suo insegnante Soke Takamatsu Toshitsugu. Lo Honbu Dōjō della Bujinkan si trova a Noda, nei pressi di Tokyo."],
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
    testo: ["Masaaki Hatsumi (2 Dicembre 1931) è il fondatore della Bujinkan e attualmente risiede a Noda, Chiba, in Giappone. Inizia lo studio delle arti marziali a 7 anni praticando Kendo e successivamente Judo, ricevendo nel 1951 il quarto dan.", "Laureatosi in Medicina, Hatsumi decise di dedicarsi alla ricerca di un Maestro completo. All'età di 26 anni incontrò Takamatsu Toshitsugu, conosciuto come 'Moko no tora' la tigre mongola, riconosciuto come l'ultimo ninja.", "Il 2 Aprile 1972, Takamatsu Sensei, all'età di 85 anni, muore trasmettendo la carica di Soke ad Hatsumi Masaaki, suo fedele allievo da 15 anni. Questo evento segna l'inizio di una nuova era per il Ninjutsu, che per mano di Hatsumi diviene organizzazione internazionale."],
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
    testo: ["Takamatsu Toshitsugu, conosciuto come 'Moko no tora', la tigre mongola, è oggi riconosciuto come l'ultimo ninja. Alla sua anzianità conservava uno spirito indomito e le sue lezioni impressionavano moltissimo i suoi studenti.", "Takamatsu trasmise la carica di Soke ad Hatsumi Masaaki il 2 Aprile 1972, all'età di 85 anni, dopo essere stato maestro fedele per 15 anni. Questo evento segna l'inizio di una nuova era per il Ninjutsu e il Budo Tai Jutsu.", "La relazione maestro-allievo rimane il fondamento dello studio tradizionale nel dojo. La trasmissione diretta del lignaggio garantisce l'autenticità delle tecniche e lo spirito della pratica."],
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
    testo: ["Le 9 Koryu (scuole tradizionali) che compongono il Budo Tai Jutsu sono: Togakure-ryū Ninpō Taijutsu, Gyokko-ryū Kosshijutsu, Kuki Shinden Happō Hikenjutsu, Kotō-ryū Koppōjutsu, Shinden Fudō-ryū Dakentaijutsu, Takagi Yōshin-ryū Jūtaijutsu, Gyokushin-ryū Ninpō, Kumogakure-ryū Ninpō e Gikan-ryū Koppōjutsu.", "Dalle scuole shinobi alle tradizioni samurai, nove lignaggi confluiscono nello studio moderno, rappresentando sia l'arte della guerriglia che le tecniche dei samurai tradizionali.", "Principi, distanza, postura e strategia emergono dall'incontro e dallo studio integrato tra le diverse scuole, creando il Budo Tai Jutsu come pratica completa."],
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
    testo: ["Il nostro proposito è vivere una vita sana senza far danno alla società, mediante il culto della mutua relazione fra la naturalezza e l'umanità attraverso il cammino marziale.", "Tutti i membri devono possedere la tessera internazionale della federazione per ogni anno, rilasciata dall'Honbu Dojo in Giappone. I diplomi per grado vengono spediti dal Soke Masaaki Hatsumi, e gli istruttori che insegnano devono possedere l'autorizzazione scritta dal Soke.", "I membri devono seguire il Bufu Ikkan (il cammino marziale come principio di vita) per proteggere la giustizia e la felicità attraverso il cammino marziale senza orientarsi verso il profitto o i desideri personali."],
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
    testo: "Vuoi prenotare una lezione di prova? Contattaci! INFOLINE: email: shinkitaidojo@gmail.com – Tel.: +39 3207520031",
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
