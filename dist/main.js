// src/data/pagine.ts
var pagine = [
  {
    id: 1,
    parent: null,
    codice: "home",
    template: "home",
    titolo: "Shin ki tai dojo Roma",
    testo: [
      "Un dojo Bujinkan a Roma. Migliorati studioando il Budo taijutsu, il sistema codificato da Masaaki Hatsumi che unisce nove ryuha giapponesi in un percorso di crescita personale e marziale.",
      "Nella nostra accademia pratichiamo arti marziali tradizionali giapponesi, in particolare il Bujutsu e il Taijutsu, antiche discipline nate sul campo di battaglia e perfezionate nei secoli come via di crescita personale.",
      "Le nostre lezioni combinano studio tecnico, allenamento fisico e ricerca interiore: ogni movimento \xE8 occasione per scoprire qualcosa di s\xE9, migliorare la concentrazione e rafforzare il corpo in modo armonioso.",
      "Nel nostro dojo si pratica in amicizia, con attenzione e spirito di collaborazione. Ogni lezione \xE8 un incontro tra persone che condividono la stessa ricerca: diventare pi\xF9 presenti, pi\xF9 forti e pi\xF9 gentili."
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
      "Attraverso giochi di equilibrio, percorsi ninja, esercizi di coordinazione, cadute, tecniche di difesa e attivit\xE0 di gruppo, ogni allenamento diventa un\u2019avventura capace di sviluppare corpo, mente e carattere.",
      "Nel nostro dojo la cooperazione viene prima della competizione. I bambini imparano ad aiutarsi, a superare le difficolt\xE0 con coraggio e a trasformare l\u2019energia in concentrazione e fiducia in s\xE9 stessi. Ogni lezione alterna momenti dinamici e divertenti ad altri pi\xF9 calmi, dedicati alla respirazione, all\u2019attenzione e all\u2019autocontrollo."
    ],
    immagine: "assets/ninja_kids2.png",
    immagineSfondo: "assets/sfondi/yamabushi01.png",
    elementi: [
      {
        titolo: "Programma bambini",
        immagine: "assets/ninja_kids1.png",
        testo: [
          "Il percorso \xE8 pensato per bambini e ragazzi fino ai 14 anni e unisce spirito marziale, fantasia e amicizia in un ambiente sicuro e accogliente. I piccoli ninja si allenano insieme, affrontano sfide, ridono, collaborano e costruiscono legami autentici, guidati da istruttori esperti che seguono la crescita di ogni allievo con attenzione e passione.",
          "Per noi diventare ninja significa imparare a essere forti, gentili e uniti."
        ]
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

// src/engine/pagina-engine.ts
function leggiCodicePaginaDaUrl(pathname) {
  const pulito = pathname.replace(/^\/+|\/+$/g, "");
  if (!pulito) {
    return "home";
  }
  const segmenti = pulito.split("/").filter(Boolean);
  return segmenti[segmenti.length - 1] || "home";
}
function caricaPaginaDaCodice(codice) {
  return pagine.find((pagina) => pagina.codice === codice);
}

// node_modules/@lit/reactive-element/css-tag.js
var t = globalThis;
var e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var s = /* @__PURE__ */ Symbol();
var o = /* @__PURE__ */ new WeakMap();
var n = class {
  constructor(t3, e4, o5) {
    if (this._$cssResult$ = true, o5 !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t3, this.t = e4;
  }
  get styleSheet() {
    let t3 = this.o;
    const s4 = this.t;
    if (e && void 0 === t3) {
      const e4 = void 0 !== s4 && 1 === s4.length;
      e4 && (t3 = o.get(s4)), void 0 === t3 && ((this.o = t3 = new CSSStyleSheet()).replaceSync(this.cssText), e4 && o.set(s4, t3));
    }
    return t3;
  }
  toString() {
    return this.cssText;
  }
};
var r = (t3) => new n("string" == typeof t3 ? t3 : t3 + "", void 0, s);
var S = (s4, o5) => {
  if (e) s4.adoptedStyleSheets = o5.map((t3) => t3 instanceof CSSStyleSheet ? t3 : t3.styleSheet);
  else for (const e4 of o5) {
    const o6 = document.createElement("style"), n4 = t.litNonce;
    void 0 !== n4 && o6.setAttribute("nonce", n4), o6.textContent = e4.cssText, s4.appendChild(o6);
  }
};
var c = e ? (t3) => t3 : (t3) => t3 instanceof CSSStyleSheet ? ((t4) => {
  let e4 = "";
  for (const s4 of t4.cssRules) e4 += s4.cssText;
  return r(e4);
})(t3) : t3;

// node_modules/@lit/reactive-element/reactive-element.js
var { is: i2, defineProperty: e2, getOwnPropertyDescriptor: h, getOwnPropertyNames: r2, getOwnPropertySymbols: o2, getPrototypeOf: n2 } = Object;
var a = globalThis;
var c2 = a.trustedTypes;
var l = c2 ? c2.emptyScript : "";
var p = a.reactiveElementPolyfillSupport;
var d = (t3, s4) => t3;
var u = { toAttribute(t3, s4) {
  switch (s4) {
    case Boolean:
      t3 = t3 ? l : null;
      break;
    case Object:
    case Array:
      t3 = null == t3 ? t3 : JSON.stringify(t3);
  }
  return t3;
}, fromAttribute(t3, s4) {
  let i5 = t3;
  switch (s4) {
    case Boolean:
      i5 = null !== t3;
      break;
    case Number:
      i5 = null === t3 ? null : Number(t3);
      break;
    case Object:
    case Array:
      try {
        i5 = JSON.parse(t3);
      } catch (t4) {
        i5 = null;
      }
  }
  return i5;
} };
var f = (t3, s4) => !i2(t3, s4);
var b = { attribute: true, type: String, converter: u, reflect: false, useDefault: false, hasChanged: f };
Symbol.metadata ?? (Symbol.metadata = /* @__PURE__ */ Symbol("metadata")), a.litPropertyMetadata ?? (a.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
var y = class extends HTMLElement {
  static addInitializer(t3) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t3);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t3, s4 = b) {
    if (s4.state && (s4.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t3) && ((s4 = Object.create(s4)).wrapped = true), this.elementProperties.set(t3, s4), !s4.noAccessor) {
      const i5 = /* @__PURE__ */ Symbol(), h3 = this.getPropertyDescriptor(t3, i5, s4);
      void 0 !== h3 && e2(this.prototype, t3, h3);
    }
  }
  static getPropertyDescriptor(t3, s4, i5) {
    const { get: e4, set: r4 } = h(this.prototype, t3) ?? { get() {
      return this[s4];
    }, set(t4) {
      this[s4] = t4;
    } };
    return { get: e4, set(s5) {
      const h3 = e4?.call(this);
      r4?.call(this, s5), this.requestUpdate(t3, h3, i5);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t3) {
    return this.elementProperties.get(t3) ?? b;
  }
  static _$Ei() {
    if (this.hasOwnProperty(d("elementProperties"))) return;
    const t3 = n2(this);
    t3.finalize(), void 0 !== t3.l && (this.l = [...t3.l]), this.elementProperties = new Map(t3.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(d("finalized"))) return;
    if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d("properties"))) {
      const t4 = this.properties, s4 = [...r2(t4), ...o2(t4)];
      for (const i5 of s4) this.createProperty(i5, t4[i5]);
    }
    const t3 = this[Symbol.metadata];
    if (null !== t3) {
      const s4 = litPropertyMetadata.get(t3);
      if (void 0 !== s4) for (const [t4, i5] of s4) this.elementProperties.set(t4, i5);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t4, s4] of this.elementProperties) {
      const i5 = this._$Eu(t4, s4);
      void 0 !== i5 && this._$Eh.set(i5, t4);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(s4) {
    const i5 = [];
    if (Array.isArray(s4)) {
      const e4 = new Set(s4.flat(1 / 0).reverse());
      for (const s5 of e4) i5.unshift(c(s5));
    } else void 0 !== s4 && i5.push(c(s4));
    return i5;
  }
  static _$Eu(t3, s4) {
    const i5 = s4.attribute;
    return false === i5 ? void 0 : "string" == typeof i5 ? i5 : "string" == typeof t3 ? t3.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((t3) => this.enableUpdating = t3), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t3) => t3(this));
  }
  addController(t3) {
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t3), void 0 !== this.renderRoot && this.isConnected && t3.hostConnected?.();
  }
  removeController(t3) {
    this._$EO?.delete(t3);
  }
  _$E_() {
    const t3 = /* @__PURE__ */ new Map(), s4 = this.constructor.elementProperties;
    for (const i5 of s4.keys()) this.hasOwnProperty(i5) && (t3.set(i5, this[i5]), delete this[i5]);
    t3.size > 0 && (this._$Ep = t3);
  }
  createRenderRoot() {
    const t3 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return S(t3, this.constructor.elementStyles), t3;
  }
  connectedCallback() {
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), this._$EO?.forEach((t3) => t3.hostConnected?.());
  }
  enableUpdating(t3) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((t3) => t3.hostDisconnected?.());
  }
  attributeChangedCallback(t3, s4, i5) {
    this._$AK(t3, i5);
  }
  _$ET(t3, s4) {
    const i5 = this.constructor.elementProperties.get(t3), e4 = this.constructor._$Eu(t3, i5);
    if (void 0 !== e4 && true === i5.reflect) {
      const h3 = (void 0 !== i5.converter?.toAttribute ? i5.converter : u).toAttribute(s4, i5.type);
      this._$Em = t3, null == h3 ? this.removeAttribute(e4) : this.setAttribute(e4, h3), this._$Em = null;
    }
  }
  _$AK(t3, s4) {
    const i5 = this.constructor, e4 = i5._$Eh.get(t3);
    if (void 0 !== e4 && this._$Em !== e4) {
      const t4 = i5.getPropertyOptions(e4), h3 = "function" == typeof t4.converter ? { fromAttribute: t4.converter } : void 0 !== t4.converter?.fromAttribute ? t4.converter : u;
      this._$Em = e4;
      const r4 = h3.fromAttribute(s4, t4.type);
      this[e4] = r4 ?? this._$Ej?.get(e4) ?? r4, this._$Em = null;
    }
  }
  requestUpdate(t3, s4, i5, e4 = false, h3) {
    if (void 0 !== t3) {
      const r4 = this.constructor;
      if (false === e4 && (h3 = this[t3]), i5 ?? (i5 = r4.getPropertyOptions(t3)), !((i5.hasChanged ?? f)(h3, s4) || i5.useDefault && i5.reflect && h3 === this._$Ej?.get(t3) && !this.hasAttribute(r4._$Eu(t3, i5)))) return;
      this.C(t3, s4, i5);
    }
    false === this.isUpdatePending && (this._$ES = this._$EP());
  }
  C(t3, s4, { useDefault: i5, reflect: e4, wrapped: h3 }, r4) {
    i5 && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t3) && (this._$Ej.set(t3, r4 ?? s4 ?? this[t3]), true !== h3 || void 0 !== r4) || (this._$AL.has(t3) || (this.hasUpdated || i5 || (s4 = void 0), this._$AL.set(t3, s4)), true === e4 && this._$Em !== t3 && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t3));
  }
  async _$EP() {
    this.isUpdatePending = true;
    try {
      await this._$ES;
    } catch (t4) {
      Promise.reject(t4);
    }
    const t3 = this.scheduleUpdate();
    return null != t3 && await t3, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [t5, s5] of this._$Ep) this[t5] = s5;
        this._$Ep = void 0;
      }
      const t4 = this.constructor.elementProperties;
      if (t4.size > 0) for (const [s5, i5] of t4) {
        const { wrapped: t5 } = i5, e4 = this[s5];
        true !== t5 || this._$AL.has(s5) || void 0 === e4 || this.C(s5, void 0, i5, e4);
      }
    }
    let t3 = false;
    const s4 = this._$AL;
    try {
      t3 = this.shouldUpdate(s4), t3 ? (this.willUpdate(s4), this._$EO?.forEach((t4) => t4.hostUpdate?.()), this.update(s4)) : this._$EM();
    } catch (s5) {
      throw t3 = false, this._$EM(), s5;
    }
    t3 && this._$AE(s4);
  }
  willUpdate(t3) {
  }
  _$AE(t3) {
    this._$EO?.forEach((t4) => t4.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t3)), this.updated(t3);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t3) {
    return true;
  }
  update(t3) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((t4) => this._$ET(t4, this[t4]))), this._$EM();
  }
  updated(t3) {
  }
  firstUpdated(t3) {
  }
};
y.elementStyles = [], y.shadowRootOptions = { mode: "open" }, y[d("elementProperties")] = /* @__PURE__ */ new Map(), y[d("finalized")] = /* @__PURE__ */ new Map(), p?.({ ReactiveElement: y }), (a.reactiveElementVersions ?? (a.reactiveElementVersions = [])).push("2.1.2");

// node_modules/lit-html/lit-html.js
var t2 = globalThis;
var i3 = (t3) => t3;
var s2 = t2.trustedTypes;
var e3 = s2 ? s2.createPolicy("lit-html", { createHTML: (t3) => t3 }) : void 0;
var h2 = "$lit$";
var o3 = `lit$${Math.random().toFixed(9).slice(2)}$`;
var n3 = "?" + o3;
var r3 = `<${n3}>`;
var l2 = document;
var c3 = () => l2.createComment("");
var a2 = (t3) => null === t3 || "object" != typeof t3 && "function" != typeof t3;
var u2 = Array.isArray;
var d2 = (t3) => u2(t3) || "function" == typeof t3?.[Symbol.iterator];
var f2 = "[ 	\n\f\r]";
var v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var _ = /-->/g;
var m = />/g;
var p2 = RegExp(`>|${f2}(?:([^\\s"'>=/]+)(${f2}*=${f2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
var g = /'/g;
var $ = /"/g;
var y2 = /^(?:script|style|textarea|title)$/i;
var x = (t3) => (i5, ...s4) => ({ _$litType$: t3, strings: i5, values: s4 });
var b2 = x(1);
var w = x(2);
var T = x(3);
var E = /* @__PURE__ */ Symbol.for("lit-noChange");
var A = /* @__PURE__ */ Symbol.for("lit-nothing");
var C = /* @__PURE__ */ new WeakMap();
var P = l2.createTreeWalker(l2, 129);
function V(t3, i5) {
  if (!u2(t3) || !t3.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return void 0 !== e3 ? e3.createHTML(i5) : i5;
}
var N = (t3, i5) => {
  const s4 = t3.length - 1, e4 = [];
  let n4, l3 = 2 === i5 ? "<svg>" : 3 === i5 ? "<math>" : "", c4 = v;
  for (let i6 = 0; i6 < s4; i6++) {
    const s5 = t3[i6];
    let a3, u3, d3 = -1, f3 = 0;
    for (; f3 < s5.length && (c4.lastIndex = f3, u3 = c4.exec(s5), null !== u3); ) f3 = c4.lastIndex, c4 === v ? "!--" === u3[1] ? c4 = _ : void 0 !== u3[1] ? c4 = m : void 0 !== u3[2] ? (y2.test(u3[2]) && (n4 = RegExp("</" + u3[2], "g")), c4 = p2) : void 0 !== u3[3] && (c4 = p2) : c4 === p2 ? ">" === u3[0] ? (c4 = n4 ?? v, d3 = -1) : void 0 === u3[1] ? d3 = -2 : (d3 = c4.lastIndex - u3[2].length, a3 = u3[1], c4 = void 0 === u3[3] ? p2 : '"' === u3[3] ? $ : g) : c4 === $ || c4 === g ? c4 = p2 : c4 === _ || c4 === m ? c4 = v : (c4 = p2, n4 = void 0);
    const x2 = c4 === p2 && t3[i6 + 1].startsWith("/>") ? " " : "";
    l3 += c4 === v ? s5 + r3 : d3 >= 0 ? (e4.push(a3), s5.slice(0, d3) + h2 + s5.slice(d3) + o3 + x2) : s5 + o3 + (-2 === d3 ? i6 : x2);
  }
  return [V(t3, l3 + (t3[s4] || "<?>") + (2 === i5 ? "</svg>" : 3 === i5 ? "</math>" : "")), e4];
};
var S2 = class _S {
  constructor({ strings: t3, _$litType$: i5 }, e4) {
    let r4;
    this.parts = [];
    let l3 = 0, a3 = 0;
    const u3 = t3.length - 1, d3 = this.parts, [f3, v2] = N(t3, i5);
    if (this.el = _S.createElement(f3, e4), P.currentNode = this.el.content, 2 === i5 || 3 === i5) {
      const t4 = this.el.content.firstChild;
      t4.replaceWith(...t4.childNodes);
    }
    for (; null !== (r4 = P.nextNode()) && d3.length < u3; ) {
      if (1 === r4.nodeType) {
        if (r4.hasAttributes()) for (const t4 of r4.getAttributeNames()) if (t4.endsWith(h2)) {
          const i6 = v2[a3++], s4 = r4.getAttribute(t4).split(o3), e5 = /([.?@])?(.*)/.exec(i6);
          d3.push({ type: 1, index: l3, name: e5[2], strings: s4, ctor: "." === e5[1] ? I : "?" === e5[1] ? L : "@" === e5[1] ? z : H }), r4.removeAttribute(t4);
        } else t4.startsWith(o3) && (d3.push({ type: 6, index: l3 }), r4.removeAttribute(t4));
        if (y2.test(r4.tagName)) {
          const t4 = r4.textContent.split(o3), i6 = t4.length - 1;
          if (i6 > 0) {
            r4.textContent = s2 ? s2.emptyScript : "";
            for (let s4 = 0; s4 < i6; s4++) r4.append(t4[s4], c3()), P.nextNode(), d3.push({ type: 2, index: ++l3 });
            r4.append(t4[i6], c3());
          }
        }
      } else if (8 === r4.nodeType) if (r4.data === n3) d3.push({ type: 2, index: l3 });
      else {
        let t4 = -1;
        for (; -1 !== (t4 = r4.data.indexOf(o3, t4 + 1)); ) d3.push({ type: 7, index: l3 }), t4 += o3.length - 1;
      }
      l3++;
    }
  }
  static createElement(t3, i5) {
    const s4 = l2.createElement("template");
    return s4.innerHTML = t3, s4;
  }
};
function M(t3, i5, s4 = t3, e4) {
  if (i5 === E) return i5;
  let h3 = void 0 !== e4 ? s4._$Co?.[e4] : s4._$Cl;
  const o5 = a2(i5) ? void 0 : i5._$litDirective$;
  return h3?.constructor !== o5 && (h3?._$AO?.(false), void 0 === o5 ? h3 = void 0 : (h3 = new o5(t3), h3._$AT(t3, s4, e4)), void 0 !== e4 ? (s4._$Co ?? (s4._$Co = []))[e4] = h3 : s4._$Cl = h3), void 0 !== h3 && (i5 = M(t3, h3._$AS(t3, i5.values), h3, e4)), i5;
}
var R = class {
  constructor(t3, i5) {
    this._$AV = [], this._$AN = void 0, this._$AD = t3, this._$AM = i5;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t3) {
    const { el: { content: i5 }, parts: s4 } = this._$AD, e4 = (t3?.creationScope ?? l2).importNode(i5, true);
    P.currentNode = e4;
    let h3 = P.nextNode(), o5 = 0, n4 = 0, r4 = s4[0];
    for (; void 0 !== r4; ) {
      if (o5 === r4.index) {
        let i6;
        2 === r4.type ? i6 = new k(h3, h3.nextSibling, this, t3) : 1 === r4.type ? i6 = new r4.ctor(h3, r4.name, r4.strings, this, t3) : 6 === r4.type && (i6 = new Z(h3, this, t3)), this._$AV.push(i6), r4 = s4[++n4];
      }
      o5 !== r4?.index && (h3 = P.nextNode(), o5++);
    }
    return P.currentNode = l2, e4;
  }
  p(t3) {
    let i5 = 0;
    for (const s4 of this._$AV) void 0 !== s4 && (void 0 !== s4.strings ? (s4._$AI(t3, s4, i5), i5 += s4.strings.length - 2) : s4._$AI(t3[i5])), i5++;
  }
};
var k = class _k {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t3, i5, s4, e4) {
    this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t3, this._$AB = i5, this._$AM = s4, this.options = e4, this._$Cv = e4?.isConnected ?? true;
  }
  get parentNode() {
    let t3 = this._$AA.parentNode;
    const i5 = this._$AM;
    return void 0 !== i5 && 11 === t3?.nodeType && (t3 = i5.parentNode), t3;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t3, i5 = this) {
    t3 = M(this, t3, i5), a2(t3) ? t3 === A || null == t3 || "" === t3 ? (this._$AH !== A && this._$AR(), this._$AH = A) : t3 !== this._$AH && t3 !== E && this._(t3) : void 0 !== t3._$litType$ ? this.$(t3) : void 0 !== t3.nodeType ? this.T(t3) : d2(t3) ? this.k(t3) : this._(t3);
  }
  O(t3) {
    return this._$AA.parentNode.insertBefore(t3, this._$AB);
  }
  T(t3) {
    this._$AH !== t3 && (this._$AR(), this._$AH = this.O(t3));
  }
  _(t3) {
    this._$AH !== A && a2(this._$AH) ? this._$AA.nextSibling.data = t3 : this.T(l2.createTextNode(t3)), this._$AH = t3;
  }
  $(t3) {
    const { values: i5, _$litType$: s4 } = t3, e4 = "number" == typeof s4 ? this._$AC(t3) : (void 0 === s4.el && (s4.el = S2.createElement(V(s4.h, s4.h[0]), this.options)), s4);
    if (this._$AH?._$AD === e4) this._$AH.p(i5);
    else {
      const t4 = new R(e4, this), s5 = t4.u(this.options);
      t4.p(i5), this.T(s5), this._$AH = t4;
    }
  }
  _$AC(t3) {
    let i5 = C.get(t3.strings);
    return void 0 === i5 && C.set(t3.strings, i5 = new S2(t3)), i5;
  }
  k(t3) {
    u2(this._$AH) || (this._$AH = [], this._$AR());
    const i5 = this._$AH;
    let s4, e4 = 0;
    for (const h3 of t3) e4 === i5.length ? i5.push(s4 = new _k(this.O(c3()), this.O(c3()), this, this.options)) : s4 = i5[e4], s4._$AI(h3), e4++;
    e4 < i5.length && (this._$AR(s4 && s4._$AB.nextSibling, e4), i5.length = e4);
  }
  _$AR(t3 = this._$AA.nextSibling, s4) {
    for (this._$AP?.(false, true, s4); t3 !== this._$AB; ) {
      const s5 = i3(t3).nextSibling;
      i3(t3).remove(), t3 = s5;
    }
  }
  setConnected(t3) {
    void 0 === this._$AM && (this._$Cv = t3, this._$AP?.(t3));
  }
};
var H = class {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t3, i5, s4, e4, h3) {
    this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t3, this.name = i5, this._$AM = e4, this.options = h3, s4.length > 2 || "" !== s4[0] || "" !== s4[1] ? (this._$AH = Array(s4.length - 1).fill(new String()), this.strings = s4) : this._$AH = A;
  }
  _$AI(t3, i5 = this, s4, e4) {
    const h3 = this.strings;
    let o5 = false;
    if (void 0 === h3) t3 = M(this, t3, i5, 0), o5 = !a2(t3) || t3 !== this._$AH && t3 !== E, o5 && (this._$AH = t3);
    else {
      const e5 = t3;
      let n4, r4;
      for (t3 = h3[0], n4 = 0; n4 < h3.length - 1; n4++) r4 = M(this, e5[s4 + n4], i5, n4), r4 === E && (r4 = this._$AH[n4]), o5 || (o5 = !a2(r4) || r4 !== this._$AH[n4]), r4 === A ? t3 = A : t3 !== A && (t3 += (r4 ?? "") + h3[n4 + 1]), this._$AH[n4] = r4;
    }
    o5 && !e4 && this.j(t3);
  }
  j(t3) {
    t3 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t3 ?? "");
  }
};
var I = class extends H {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t3) {
    this.element[this.name] = t3 === A ? void 0 : t3;
  }
};
var L = class extends H {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t3) {
    this.element.toggleAttribute(this.name, !!t3 && t3 !== A);
  }
};
var z = class extends H {
  constructor(t3, i5, s4, e4, h3) {
    super(t3, i5, s4, e4, h3), this.type = 5;
  }
  _$AI(t3, i5 = this) {
    if ((t3 = M(this, t3, i5, 0) ?? A) === E) return;
    const s4 = this._$AH, e4 = t3 === A && s4 !== A || t3.capture !== s4.capture || t3.once !== s4.once || t3.passive !== s4.passive, h3 = t3 !== A && (s4 === A || e4);
    e4 && this.element.removeEventListener(this.name, this, s4), h3 && this.element.addEventListener(this.name, this, t3), this._$AH = t3;
  }
  handleEvent(t3) {
    "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t3) : this._$AH.handleEvent(t3);
  }
};
var Z = class {
  constructor(t3, i5, s4) {
    this.element = t3, this.type = 6, this._$AN = void 0, this._$AM = i5, this.options = s4;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t3) {
    M(this, t3);
  }
};
var B = t2.litHtmlPolyfillSupport;
B?.(S2, k), (t2.litHtmlVersions ?? (t2.litHtmlVersions = [])).push("3.3.2");
var D = (t3, i5, s4) => {
  const e4 = s4?.renderBefore ?? i5;
  let h3 = e4._$litPart$;
  if (void 0 === h3) {
    const t4 = s4?.renderBefore ?? null;
    e4._$litPart$ = h3 = new k(i5.insertBefore(c3(), t4), t4, void 0, s4 ?? {});
  }
  return h3._$AI(t3), h3;
};

// node_modules/lit-element/lit-element.js
var s3 = globalThis;
var i4 = class extends y {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var _a;
    const t3 = super.createRenderRoot();
    return (_a = this.renderOptions).renderBefore ?? (_a.renderBefore = t3.firstChild), t3;
  }
  update(t3) {
    const r4 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t3), this._$Do = D(r4, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(true);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(false);
  }
  render() {
    return E;
  }
};
i4._$litElement$ = true, i4["finalized"] = true, s3.litElementHydrateSupport?.({ LitElement: i4 });
var o4 = s3.litElementPolyfillSupport;
o4?.({ LitElement: i4 });
(s3.litElementVersions ?? (s3.litElementVersions = [])).push("4.2.2");

// src/templates/home.ts
function normalizzaParagrafi(testo) {
  const paragrafi = Array.isArray(testo) ? testo : [testo];
  return paragrafi.map((paragrafo) => paragrafo.trim()).filter((paragrafo) => paragrafo.length > 0);
}
function renderElementiTemplate(elementi, creaPathAsset2) {
  if (elementi.length === 0) {
    return A;
  }
  return b2`
    <div class="hero-cards">
      ${elementi.map((elemento) => b2`
        <article class="hero-card">
          <div class="hero-card-media">
            <img src="${creaPathAsset2(elemento.immagine)}" alt="${elemento.titolo}">
          </div>
          <div class="hero-card-content">
            <h2>${elemento.titolo}</h2>
            ${renderTestoElemento(elemento.testo)}
          </div>
        </article>
      `)}
    </div>
  `;
}
function renderTestoElemento(testo) {
  if (Array.isArray(testo)) {
    return b2`${testo.map((paragrafo) => b2`<p>${paragrafo}</p>`)}`;
  }
  return b2`<p>${testo}</p>`;
}
function renderTemplateHome(pagina, creaPathAsset2) {
  const paragrafi = normalizzaParagrafi(pagina.testo);
  const testoIntro = paragrafi[0] || "";
  const testoDefinizione = paragrafi.slice(1);
  return b2`
    <section class="home-layout">
      <h1 class="home-title">${pagina.titolo}</h1>
      <div class="home-top-row">
        <div class="home-logo-box image-card">
          <img src="${creaPathAsset2("assets/logo-black.png")}" alt="SKT Dojo logo">
        </div>
        <div class="home-intro-box text-card">
          ${testoIntro ? b2`<p>${testoIntro}</p>` : A}
        </div>
      </div>
      <div class="home-main-row">
        <div class="home-image-box image-card">
          <img src="${creaPathAsset2(pagina.immagine)}" alt="${pagina.titolo}">
        </div>
        <div class="home-definizione-box text-card">
          ${testoDefinizione.map((paragrafo) => b2`<p>${paragrafo}</p>`)}
        </div>
      </div>
      <div class="home-elements">${renderElementiTemplate(pagina.elementi, creaPathAsset2)}</div>
    </section>
  `;
}

// src/templates/ninja-kids.ts
function normalizzaParagrafi2(testo) {
  const paragrafi = Array.isArray(testo) ? testo : [testo];
  return paragrafi.map((paragrafo) => paragrafo.trim()).filter((paragrafo) => paragrafo.length > 0);
}
function renderElementiTemplate2(elementi, creaPathAsset2) {
  if (elementi.length === 0) {
    return A;
  }
  return b2`
    <div class="hero-cards">
      ${elementi.map((elemento) => b2`
        <article class="hero-card">
          <div class="hero-card-media">
            <img src="${creaPathAsset2(elemento.immagine)}" alt="${elemento.titolo}">
          </div>
          <div class="hero-card-content">
            <h2>${elemento.titolo}</h2>
            ${renderTestoElemento2(elemento.testo)}
          </div>
        </article>
      `)}
    </div>
  `;
}
function renderTestoElemento2(testo) {
  if (Array.isArray(testo)) {
    return b2`${testo.map((paragrafo) => b2`<p>${paragrafo}</p>`)}`;
  }
  return b2`<p>${testo}</p>`;
}
function renderTemplateNinjaKids(pagina, creaPathAsset2) {
  const paragrafi = normalizzaParagrafi2(pagina.testo);
  const testoIntro = paragrafi[0] || "";
  const testoDefinizione = paragrafi.slice(1);
  return b2`
    <section class="ninjakids-layout">
      <h1 class="ninjakids-title">${pagina.titolo}</h1>
      <div class="ninjakids-top-row">
        <div class="ninjakids-logo-box">
          <img src="${creaPathAsset2("assets/logo-ninja-kids-02.png")}" alt="Ninja Kids logo">
        </div>
        <div class="ninjakids-intro-box text-card">
          ${testoIntro ? b2`<p>${testoIntro}</p>` : A}
        </div>
      </div>
      <div class="ninjakids-main-row">
        <div class="ninjakids-image-box image-card">
          <img src="${creaPathAsset2(pagina.immagine)}" alt="${pagina.titolo}">
        </div>
        <div class="ninjakids-definizione-box text-card">
          ${testoDefinizione.map((paragrafo) => b2`<p>${paragrafo}</p>`)}
        </div>
      </div>
      <div class="ninjakids-elements">${renderElementiTemplate2(pagina.elementi, creaPathAsset2)}</div>
    </section>
  `;
}

// src/main.ts
var sfondiDisponibili = [
  "assets/sfondi/samurai01.png",
  "assets/sfondi/samurai02.png",
  "assets/sfondi/yamabushi01.png",
  "assets/sfondi/maestri.png"
];
var ultimoSfondoIndex = -1;
var sfondoRenderId = 0;
var ultimoTransitionIndex = -1;
var activeBgLayerIndex = 0;
var navLinks = [];
var cacheSfondoPerCodice = /* @__PURE__ */ new Map();
var paginePerCodice = new Map(pagine.map((pagina) => [pagina.codice, pagina]));
var figliPerParent = /* @__PURE__ */ new Map();
for (const pagina of pagine) {
  if (pagina.parent === null) {
    continue;
  }
  const figli = figliPerParent.get(pagina.parent) || [];
  figli.push(pagina);
  figliPerParent.set(pagina.parent, figli);
}
var pageRenderer = document.querySelector("#page-renderer");
var menuToggle = document.querySelector("#menu-toggle");
var navContainer = document.querySelector(".nav-links");
var bgLayers = Array.from(document.querySelectorAll(".bg-layer"));
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
var appRootUrl = new URL("../", import.meta.url);
var basePath = appRootUrl.pathname.replace(/\/$/, "");
var origin = window.location.origin;
var transizioni = [
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
  if (path.startsWith("//")) {
    return `${window.location.protocol}${path}`;
  }
  if (path.startsWith("/")) {
    return new URL(path, origin).pathname;
  }
  const pathRelativo = path.replace(/^\//, "");
  return new URL(pathRelativo, appRootUrl).pathname;
}
function aggiornaRiferimentiMenu() {
  navLinks = navContainer ? Array.from(navContainer.querySelectorAll("a[href]")) : [];
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
  }, 1e3);
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
  if (sfondoCodice === void 0) {
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
  const paginaAttiva = caricaPaginaDaCodice(codicePagina);
  const parentAttivo = paginaAttiva?.parent ?? null;
  for (const link of navLinks) {
    const href = link.getAttribute("href") || "";
    const linkCodice = leggiCodicePaginaDaUrl(normalizzaPathname(new URL(href, window.location.origin).pathname));
    const paginaLink = paginePerCodice.get(linkCodice);
    const isAttivo = linkCodice === codicePagina || paginaLink?.id === parentAttivo;
    const isCorrente = linkCodice === codicePagina;
    link.classList.toggle("is-active", isAttivo);
    if (isCorrente) {
      link.setAttribute("aria-current", "page");
    } else {
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
    const isRamoAttivo = codiceGruppo === codicePagina || paginaGruppo?.id === parentAttivo;
    gruppo.classList.toggle("is-active", isRamoAttivo);
    impostaStatoSottomenu(gruppo, false);
  }
}
function normalizzaParagrafi3(testo) {
  const paragrafi = Array.isArray(testo) ? testo : [testo];
  return paragrafi.map((paragrafo) => paragrafo.trim()).filter((paragrafo) => paragrafo.length > 0);
}
function renderElementiTemplate3(elementi) {
  if (elementi.length === 0) {
    return A;
  }
  return b2`
    <div class="hero-cards">
      ${elementi.map((elemento) => b2`
        <article class="hero-card">
          <img src="${creaPathAsset(elemento.immagine)}" alt="${elemento.titolo}">
          <h2>${elemento.titolo}</h2>
          ${renderTestoElemento3(elemento.testo)}
        </article>
      `)}
    </div>
  `;
}
function renderTestoElemento3(testo) {
  if (Array.isArray(testo)) {
    return b2`${testo.map((paragrafo) => b2`<p>${paragrafo}</p>`)}`;
  }
  return b2`<p>${testo}</p>`;
}
function renderTestoTemplate(testo) {
  const paragrafi = normalizzaParagrafi3(testo);
  if (paragrafi.length === 0) {
    return b2``;
  }
  return b2`
    <div class="text-cards">
      ${paragrafi.map((paragrafo) => b2`
        <article class="text-card">
          <p>${paragrafo}</p>
        </article>
      `)}
    </div>
  `;
}
function renderTemplateStandard(pagina) {
  return b2`
    <h1>${pagina.titolo}</h1>
    ${renderTestoTemplate(pagina.testo)}
    ${renderElementiTemplate3(pagina.elementi)}
  `;
}
function renderTemplatePagina(pagina) {
  if (pagina.template === "home") {
    return renderTemplateHome(pagina, creaPathAsset);
  }
  if (pagina.template === "ninja-kids") {
    return renderTemplateNinjaKids(pagina, creaPathAsset);
  }
  return renderTemplateStandard(pagina);
}
function renderTemplateNotFound() {
  return b2`
    <h1>Pagina non trovata</h1>
    <div class="text-cards">
      <article class="text-card">
        <p>Il codice pagina non esiste. Controlla l'URL.</p>
      </article>
    </div>
  `;
}
function renderPagina(pathname) {
  const codicePagina = leggiCodicePaginaDaUrl(normalizzaPathname(pathname));
  const pagina = caricaPaginaDaCodice(codicePagina);
  if (pageRenderer instanceof HTMLElement) {
    if (pagina) {
      D(renderTemplatePagina(pagina), pageRenderer);
    } else {
      D(renderTemplateNotFound(), pageRenderer);
    }
  }
  if (pagina) {
    const sfondoRandom = scegliSfondoRandom();
    const fallbackSfondo = sfondoRandom || pagina.immagineSfondo;
    void impostaSfondoPagina(codicePagina, fallbackSfondo);
    document.title = `${pagina.titolo} | SKT Dojo`;
  } else {
    sfondoRenderId++;
    if (bgLayers.length > 0) {
      bgLayers[0].style.backgroundImage = "none";
      bgLayers[1].style.backgroundImage = "none";
    } else {
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
    const url = new URL(href, origin);
    if (url.origin !== origin) {
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
} else {
  const pathCorrente = normalizzaPathname(window.location.pathname) === "/" ? creaPathPagina("home") : window.location.pathname;
  naviga(pathCorrente, "none");
}
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=main.js.map
