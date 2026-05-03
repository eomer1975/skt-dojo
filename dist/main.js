// src/data/pagine.ts
var pagine = [
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
  constructor(t4, e6, o6) {
    if (this._$cssResult$ = true, o6 !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t4, this.t = e6;
  }
  get styleSheet() {
    let t4 = this.o;
    const s4 = this.t;
    if (e && void 0 === t4) {
      const e6 = void 0 !== s4 && 1 === s4.length;
      e6 && (t4 = o.get(s4)), void 0 === t4 && ((this.o = t4 = new CSSStyleSheet()).replaceSync(this.cssText), e6 && o.set(s4, t4));
    }
    return t4;
  }
  toString() {
    return this.cssText;
  }
};
var r = (t4) => new n("string" == typeof t4 ? t4 : t4 + "", void 0, s);
var S = (s4, o6) => {
  if (e) s4.adoptedStyleSheets = o6.map((t4) => t4 instanceof CSSStyleSheet ? t4 : t4.styleSheet);
  else for (const e6 of o6) {
    const o7 = document.createElement("style"), n4 = t.litNonce;
    void 0 !== n4 && o7.setAttribute("nonce", n4), o7.textContent = e6.cssText, s4.appendChild(o7);
  }
};
var c = e ? (t4) => t4 : (t4) => t4 instanceof CSSStyleSheet ? ((t5) => {
  let e6 = "";
  for (const s4 of t5.cssRules) e6 += s4.cssText;
  return r(e6);
})(t4) : t4;

// node_modules/@lit/reactive-element/reactive-element.js
var { is: i2, defineProperty: e2, getOwnPropertyDescriptor: h, getOwnPropertyNames: r2, getOwnPropertySymbols: o2, getPrototypeOf: n2 } = Object;
var a = globalThis;
var c2 = a.trustedTypes;
var l = c2 ? c2.emptyScript : "";
var p = a.reactiveElementPolyfillSupport;
var d = (t4, s4) => t4;
var u = { toAttribute(t4, s4) {
  switch (s4) {
    case Boolean:
      t4 = t4 ? l : null;
      break;
    case Object:
    case Array:
      t4 = null == t4 ? t4 : JSON.stringify(t4);
  }
  return t4;
}, fromAttribute(t4, s4) {
  let i6 = t4;
  switch (s4) {
    case Boolean:
      i6 = null !== t4;
      break;
    case Number:
      i6 = null === t4 ? null : Number(t4);
      break;
    case Object:
    case Array:
      try {
        i6 = JSON.parse(t4);
      } catch (t5) {
        i6 = null;
      }
  }
  return i6;
} };
var f = (t4, s4) => !i2(t4, s4);
var b = { attribute: true, type: String, converter: u, reflect: false, useDefault: false, hasChanged: f };
Symbol.metadata ?? (Symbol.metadata = /* @__PURE__ */ Symbol("metadata")), a.litPropertyMetadata ?? (a.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
var y = class extends HTMLElement {
  static addInitializer(t4) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t4);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t4, s4 = b) {
    if (s4.state && (s4.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t4) && ((s4 = Object.create(s4)).wrapped = true), this.elementProperties.set(t4, s4), !s4.noAccessor) {
      const i6 = /* @__PURE__ */ Symbol(), h3 = this.getPropertyDescriptor(t4, i6, s4);
      void 0 !== h3 && e2(this.prototype, t4, h3);
    }
  }
  static getPropertyDescriptor(t4, s4, i6) {
    const { get: e6, set: r4 } = h(this.prototype, t4) ?? { get() {
      return this[s4];
    }, set(t5) {
      this[s4] = t5;
    } };
    return { get: e6, set(s5) {
      const h3 = e6?.call(this);
      r4?.call(this, s5), this.requestUpdate(t4, h3, i6);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t4) {
    return this.elementProperties.get(t4) ?? b;
  }
  static _$Ei() {
    if (this.hasOwnProperty(d("elementProperties"))) return;
    const t4 = n2(this);
    t4.finalize(), void 0 !== t4.l && (this.l = [...t4.l]), this.elementProperties = new Map(t4.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(d("finalized"))) return;
    if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d("properties"))) {
      const t5 = this.properties, s4 = [...r2(t5), ...o2(t5)];
      for (const i6 of s4) this.createProperty(i6, t5[i6]);
    }
    const t4 = this[Symbol.metadata];
    if (null !== t4) {
      const s4 = litPropertyMetadata.get(t4);
      if (void 0 !== s4) for (const [t5, i6] of s4) this.elementProperties.set(t5, i6);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t5, s4] of this.elementProperties) {
      const i6 = this._$Eu(t5, s4);
      void 0 !== i6 && this._$Eh.set(i6, t5);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(s4) {
    const i6 = [];
    if (Array.isArray(s4)) {
      const e6 = new Set(s4.flat(1 / 0).reverse());
      for (const s5 of e6) i6.unshift(c(s5));
    } else void 0 !== s4 && i6.push(c(s4));
    return i6;
  }
  static _$Eu(t4, s4) {
    const i6 = s4.attribute;
    return false === i6 ? void 0 : "string" == typeof i6 ? i6 : "string" == typeof t4 ? t4.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((t4) => this.enableUpdating = t4), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t4) => t4(this));
  }
  addController(t4) {
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t4), void 0 !== this.renderRoot && this.isConnected && t4.hostConnected?.();
  }
  removeController(t4) {
    this._$EO?.delete(t4);
  }
  _$E_() {
    const t4 = /* @__PURE__ */ new Map(), s4 = this.constructor.elementProperties;
    for (const i6 of s4.keys()) this.hasOwnProperty(i6) && (t4.set(i6, this[i6]), delete this[i6]);
    t4.size > 0 && (this._$Ep = t4);
  }
  createRenderRoot() {
    const t4 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return S(t4, this.constructor.elementStyles), t4;
  }
  connectedCallback() {
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), this._$EO?.forEach((t4) => t4.hostConnected?.());
  }
  enableUpdating(t4) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((t4) => t4.hostDisconnected?.());
  }
  attributeChangedCallback(t4, s4, i6) {
    this._$AK(t4, i6);
  }
  _$ET(t4, s4) {
    const i6 = this.constructor.elementProperties.get(t4), e6 = this.constructor._$Eu(t4, i6);
    if (void 0 !== e6 && true === i6.reflect) {
      const h3 = (void 0 !== i6.converter?.toAttribute ? i6.converter : u).toAttribute(s4, i6.type);
      this._$Em = t4, null == h3 ? this.removeAttribute(e6) : this.setAttribute(e6, h3), this._$Em = null;
    }
  }
  _$AK(t4, s4) {
    const i6 = this.constructor, e6 = i6._$Eh.get(t4);
    if (void 0 !== e6 && this._$Em !== e6) {
      const t5 = i6.getPropertyOptions(e6), h3 = "function" == typeof t5.converter ? { fromAttribute: t5.converter } : void 0 !== t5.converter?.fromAttribute ? t5.converter : u;
      this._$Em = e6;
      const r4 = h3.fromAttribute(s4, t5.type);
      this[e6] = r4 ?? this._$Ej?.get(e6) ?? r4, this._$Em = null;
    }
  }
  requestUpdate(t4, s4, i6, e6 = false, h3) {
    if (void 0 !== t4) {
      const r4 = this.constructor;
      if (false === e6 && (h3 = this[t4]), i6 ?? (i6 = r4.getPropertyOptions(t4)), !((i6.hasChanged ?? f)(h3, s4) || i6.useDefault && i6.reflect && h3 === this._$Ej?.get(t4) && !this.hasAttribute(r4._$Eu(t4, i6)))) return;
      this.C(t4, s4, i6);
    }
    false === this.isUpdatePending && (this._$ES = this._$EP());
  }
  C(t4, s4, { useDefault: i6, reflect: e6, wrapped: h3 }, r4) {
    i6 && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t4) && (this._$Ej.set(t4, r4 ?? s4 ?? this[t4]), true !== h3 || void 0 !== r4) || (this._$AL.has(t4) || (this.hasUpdated || i6 || (s4 = void 0), this._$AL.set(t4, s4)), true === e6 && this._$Em !== t4 && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t4));
  }
  async _$EP() {
    this.isUpdatePending = true;
    try {
      await this._$ES;
    } catch (t5) {
      Promise.reject(t5);
    }
    const t4 = this.scheduleUpdate();
    return null != t4 && await t4, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [t6, s5] of this._$Ep) this[t6] = s5;
        this._$Ep = void 0;
      }
      const t5 = this.constructor.elementProperties;
      if (t5.size > 0) for (const [s5, i6] of t5) {
        const { wrapped: t6 } = i6, e6 = this[s5];
        true !== t6 || this._$AL.has(s5) || void 0 === e6 || this.C(s5, void 0, i6, e6);
      }
    }
    let t4 = false;
    const s4 = this._$AL;
    try {
      t4 = this.shouldUpdate(s4), t4 ? (this.willUpdate(s4), this._$EO?.forEach((t5) => t5.hostUpdate?.()), this.update(s4)) : this._$EM();
    } catch (s5) {
      throw t4 = false, this._$EM(), s5;
    }
    t4 && this._$AE(s4);
  }
  willUpdate(t4) {
  }
  _$AE(t4) {
    this._$EO?.forEach((t5) => t5.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t4)), this.updated(t4);
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
  shouldUpdate(t4) {
    return true;
  }
  update(t4) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((t5) => this._$ET(t5, this[t5]))), this._$EM();
  }
  updated(t4) {
  }
  firstUpdated(t4) {
  }
};
y.elementStyles = [], y.shadowRootOptions = { mode: "open" }, y[d("elementProperties")] = /* @__PURE__ */ new Map(), y[d("finalized")] = /* @__PURE__ */ new Map(), p?.({ ReactiveElement: y }), (a.reactiveElementVersions ?? (a.reactiveElementVersions = [])).push("2.1.2");

// node_modules/lit-html/lit-html.js
var t2 = globalThis;
var i3 = (t4) => t4;
var s2 = t2.trustedTypes;
var e3 = s2 ? s2.createPolicy("lit-html", { createHTML: (t4) => t4 }) : void 0;
var h2 = "$lit$";
var o3 = `lit$${Math.random().toFixed(9).slice(2)}$`;
var n3 = "?" + o3;
var r3 = `<${n3}>`;
var l2 = document;
var c3 = () => l2.createComment("");
var a2 = (t4) => null === t4 || "object" != typeof t4 && "function" != typeof t4;
var u2 = Array.isArray;
var d2 = (t4) => u2(t4) || "function" == typeof t4?.[Symbol.iterator];
var f2 = "[ 	\n\f\r]";
var v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var _ = /-->/g;
var m = />/g;
var p2 = RegExp(`>|${f2}(?:([^\\s"'>=/]+)(${f2}*=${f2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
var g = /'/g;
var $ = /"/g;
var y2 = /^(?:script|style|textarea|title)$/i;
var x = (t4) => (i6, ...s4) => ({ _$litType$: t4, strings: i6, values: s4 });
var b2 = x(1);
var w = x(2);
var T = x(3);
var E = /* @__PURE__ */ Symbol.for("lit-noChange");
var A = /* @__PURE__ */ Symbol.for("lit-nothing");
var C = /* @__PURE__ */ new WeakMap();
var P = l2.createTreeWalker(l2, 129);
function V(t4, i6) {
  if (!u2(t4) || !t4.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return void 0 !== e3 ? e3.createHTML(i6) : i6;
}
var N = (t4, i6) => {
  const s4 = t4.length - 1, e6 = [];
  let n4, l3 = 2 === i6 ? "<svg>" : 3 === i6 ? "<math>" : "", c4 = v;
  for (let i7 = 0; i7 < s4; i7++) {
    const s5 = t4[i7];
    let a3, u3, d3 = -1, f3 = 0;
    for (; f3 < s5.length && (c4.lastIndex = f3, u3 = c4.exec(s5), null !== u3); ) f3 = c4.lastIndex, c4 === v ? "!--" === u3[1] ? c4 = _ : void 0 !== u3[1] ? c4 = m : void 0 !== u3[2] ? (y2.test(u3[2]) && (n4 = RegExp("</" + u3[2], "g")), c4 = p2) : void 0 !== u3[3] && (c4 = p2) : c4 === p2 ? ">" === u3[0] ? (c4 = n4 ?? v, d3 = -1) : void 0 === u3[1] ? d3 = -2 : (d3 = c4.lastIndex - u3[2].length, a3 = u3[1], c4 = void 0 === u3[3] ? p2 : '"' === u3[3] ? $ : g) : c4 === $ || c4 === g ? c4 = p2 : c4 === _ || c4 === m ? c4 = v : (c4 = p2, n4 = void 0);
    const x2 = c4 === p2 && t4[i7 + 1].startsWith("/>") ? " " : "";
    l3 += c4 === v ? s5 + r3 : d3 >= 0 ? (e6.push(a3), s5.slice(0, d3) + h2 + s5.slice(d3) + o3 + x2) : s5 + o3 + (-2 === d3 ? i7 : x2);
  }
  return [V(t4, l3 + (t4[s4] || "<?>") + (2 === i6 ? "</svg>" : 3 === i6 ? "</math>" : "")), e6];
};
var S2 = class _S {
  constructor({ strings: t4, _$litType$: i6 }, e6) {
    let r4;
    this.parts = [];
    let l3 = 0, a3 = 0;
    const u3 = t4.length - 1, d3 = this.parts, [f3, v2] = N(t4, i6);
    if (this.el = _S.createElement(f3, e6), P.currentNode = this.el.content, 2 === i6 || 3 === i6) {
      const t5 = this.el.content.firstChild;
      t5.replaceWith(...t5.childNodes);
    }
    for (; null !== (r4 = P.nextNode()) && d3.length < u3; ) {
      if (1 === r4.nodeType) {
        if (r4.hasAttributes()) for (const t5 of r4.getAttributeNames()) if (t5.endsWith(h2)) {
          const i7 = v2[a3++], s4 = r4.getAttribute(t5).split(o3), e7 = /([.?@])?(.*)/.exec(i7);
          d3.push({ type: 1, index: l3, name: e7[2], strings: s4, ctor: "." === e7[1] ? I : "?" === e7[1] ? L : "@" === e7[1] ? z : H }), r4.removeAttribute(t5);
        } else t5.startsWith(o3) && (d3.push({ type: 6, index: l3 }), r4.removeAttribute(t5));
        if (y2.test(r4.tagName)) {
          const t5 = r4.textContent.split(o3), i7 = t5.length - 1;
          if (i7 > 0) {
            r4.textContent = s2 ? s2.emptyScript : "";
            for (let s4 = 0; s4 < i7; s4++) r4.append(t5[s4], c3()), P.nextNode(), d3.push({ type: 2, index: ++l3 });
            r4.append(t5[i7], c3());
          }
        }
      } else if (8 === r4.nodeType) if (r4.data === n3) d3.push({ type: 2, index: l3 });
      else {
        let t5 = -1;
        for (; -1 !== (t5 = r4.data.indexOf(o3, t5 + 1)); ) d3.push({ type: 7, index: l3 }), t5 += o3.length - 1;
      }
      l3++;
    }
  }
  static createElement(t4, i6) {
    const s4 = l2.createElement("template");
    return s4.innerHTML = t4, s4;
  }
};
function M(t4, i6, s4 = t4, e6) {
  if (i6 === E) return i6;
  let h3 = void 0 !== e6 ? s4._$Co?.[e6] : s4._$Cl;
  const o6 = a2(i6) ? void 0 : i6._$litDirective$;
  return h3?.constructor !== o6 && (h3?._$AO?.(false), void 0 === o6 ? h3 = void 0 : (h3 = new o6(t4), h3._$AT(t4, s4, e6)), void 0 !== e6 ? (s4._$Co ?? (s4._$Co = []))[e6] = h3 : s4._$Cl = h3), void 0 !== h3 && (i6 = M(t4, h3._$AS(t4, i6.values), h3, e6)), i6;
}
var R = class {
  constructor(t4, i6) {
    this._$AV = [], this._$AN = void 0, this._$AD = t4, this._$AM = i6;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t4) {
    const { el: { content: i6 }, parts: s4 } = this._$AD, e6 = (t4?.creationScope ?? l2).importNode(i6, true);
    P.currentNode = e6;
    let h3 = P.nextNode(), o6 = 0, n4 = 0, r4 = s4[0];
    for (; void 0 !== r4; ) {
      if (o6 === r4.index) {
        let i7;
        2 === r4.type ? i7 = new k(h3, h3.nextSibling, this, t4) : 1 === r4.type ? i7 = new r4.ctor(h3, r4.name, r4.strings, this, t4) : 6 === r4.type && (i7 = new Z(h3, this, t4)), this._$AV.push(i7), r4 = s4[++n4];
      }
      o6 !== r4?.index && (h3 = P.nextNode(), o6++);
    }
    return P.currentNode = l2, e6;
  }
  p(t4) {
    let i6 = 0;
    for (const s4 of this._$AV) void 0 !== s4 && (void 0 !== s4.strings ? (s4._$AI(t4, s4, i6), i6 += s4.strings.length - 2) : s4._$AI(t4[i6])), i6++;
  }
};
var k = class _k {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t4, i6, s4, e6) {
    this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t4, this._$AB = i6, this._$AM = s4, this.options = e6, this._$Cv = e6?.isConnected ?? true;
  }
  get parentNode() {
    let t4 = this._$AA.parentNode;
    const i6 = this._$AM;
    return void 0 !== i6 && 11 === t4?.nodeType && (t4 = i6.parentNode), t4;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t4, i6 = this) {
    t4 = M(this, t4, i6), a2(t4) ? t4 === A || null == t4 || "" === t4 ? (this._$AH !== A && this._$AR(), this._$AH = A) : t4 !== this._$AH && t4 !== E && this._(t4) : void 0 !== t4._$litType$ ? this.$(t4) : void 0 !== t4.nodeType ? this.T(t4) : d2(t4) ? this.k(t4) : this._(t4);
  }
  O(t4) {
    return this._$AA.parentNode.insertBefore(t4, this._$AB);
  }
  T(t4) {
    this._$AH !== t4 && (this._$AR(), this._$AH = this.O(t4));
  }
  _(t4) {
    this._$AH !== A && a2(this._$AH) ? this._$AA.nextSibling.data = t4 : this.T(l2.createTextNode(t4)), this._$AH = t4;
  }
  $(t4) {
    const { values: i6, _$litType$: s4 } = t4, e6 = "number" == typeof s4 ? this._$AC(t4) : (void 0 === s4.el && (s4.el = S2.createElement(V(s4.h, s4.h[0]), this.options)), s4);
    if (this._$AH?._$AD === e6) this._$AH.p(i6);
    else {
      const t5 = new R(e6, this), s5 = t5.u(this.options);
      t5.p(i6), this.T(s5), this._$AH = t5;
    }
  }
  _$AC(t4) {
    let i6 = C.get(t4.strings);
    return void 0 === i6 && C.set(t4.strings, i6 = new S2(t4)), i6;
  }
  k(t4) {
    u2(this._$AH) || (this._$AH = [], this._$AR());
    const i6 = this._$AH;
    let s4, e6 = 0;
    for (const h3 of t4) e6 === i6.length ? i6.push(s4 = new _k(this.O(c3()), this.O(c3()), this, this.options)) : s4 = i6[e6], s4._$AI(h3), e6++;
    e6 < i6.length && (this._$AR(s4 && s4._$AB.nextSibling, e6), i6.length = e6);
  }
  _$AR(t4 = this._$AA.nextSibling, s4) {
    for (this._$AP?.(false, true, s4); t4 !== this._$AB; ) {
      const s5 = i3(t4).nextSibling;
      i3(t4).remove(), t4 = s5;
    }
  }
  setConnected(t4) {
    void 0 === this._$AM && (this._$Cv = t4, this._$AP?.(t4));
  }
};
var H = class {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t4, i6, s4, e6, h3) {
    this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t4, this.name = i6, this._$AM = e6, this.options = h3, s4.length > 2 || "" !== s4[0] || "" !== s4[1] ? (this._$AH = Array(s4.length - 1).fill(new String()), this.strings = s4) : this._$AH = A;
  }
  _$AI(t4, i6 = this, s4, e6) {
    const h3 = this.strings;
    let o6 = false;
    if (void 0 === h3) t4 = M(this, t4, i6, 0), o6 = !a2(t4) || t4 !== this._$AH && t4 !== E, o6 && (this._$AH = t4);
    else {
      const e7 = t4;
      let n4, r4;
      for (t4 = h3[0], n4 = 0; n4 < h3.length - 1; n4++) r4 = M(this, e7[s4 + n4], i6, n4), r4 === E && (r4 = this._$AH[n4]), o6 || (o6 = !a2(r4) || r4 !== this._$AH[n4]), r4 === A ? t4 = A : t4 !== A && (t4 += (r4 ?? "") + h3[n4 + 1]), this._$AH[n4] = r4;
    }
    o6 && !e6 && this.j(t4);
  }
  j(t4) {
    t4 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t4 ?? "");
  }
};
var I = class extends H {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t4) {
    this.element[this.name] = t4 === A ? void 0 : t4;
  }
};
var L = class extends H {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t4) {
    this.element.toggleAttribute(this.name, !!t4 && t4 !== A);
  }
};
var z = class extends H {
  constructor(t4, i6, s4, e6, h3) {
    super(t4, i6, s4, e6, h3), this.type = 5;
  }
  _$AI(t4, i6 = this) {
    if ((t4 = M(this, t4, i6, 0) ?? A) === E) return;
    const s4 = this._$AH, e6 = t4 === A && s4 !== A || t4.capture !== s4.capture || t4.once !== s4.once || t4.passive !== s4.passive, h3 = t4 !== A && (s4 === A || e6);
    e6 && this.element.removeEventListener(this.name, this, s4), h3 && this.element.addEventListener(this.name, this, t4), this._$AH = t4;
  }
  handleEvent(t4) {
    "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t4) : this._$AH.handleEvent(t4);
  }
};
var Z = class {
  constructor(t4, i6, s4) {
    this.element = t4, this.type = 6, this._$AN = void 0, this._$AM = i6, this.options = s4;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t4) {
    M(this, t4);
  }
};
var B = t2.litHtmlPolyfillSupport;
B?.(S2, k), (t2.litHtmlVersions ?? (t2.litHtmlVersions = [])).push("3.3.2");
var D = (t4, i6, s4) => {
  const e6 = s4?.renderBefore ?? i6;
  let h3 = e6._$litPart$;
  if (void 0 === h3) {
    const t5 = s4?.renderBefore ?? null;
    e6._$litPart$ = h3 = new k(i6.insertBefore(c3(), t5), t5, void 0, s4 ?? {});
  }
  return h3._$AI(t4), h3;
};

// node_modules/lit-element/lit-element.js
var s3 = globalThis;
var i4 = class extends y {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var _a;
    const t4 = super.createRenderRoot();
    return (_a = this.renderOptions).renderBefore ?? (_a.renderBefore = t4.firstChild), t4;
  }
  update(t4) {
    const r4 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t4), this._$Do = D(r4, this.renderRoot, this.renderOptions);
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

// node_modules/lit-html/directive.js
var t3 = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 };
var e4 = (t4) => (...e6) => ({ _$litDirective$: t4, values: e6 });
var i5 = class {
  constructor(t4) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t4, e6, i6) {
    this._$Ct = t4, this._$AM = e6, this._$Ci = i6;
  }
  _$AS(t4, e6) {
    return this.update(t4, e6);
  }
  update(t4, e6) {
    return this.render(...e6);
  }
};

// node_modules/lit-html/directives/unsafe-html.js
var e5 = class extends i5 {
  constructor(i6) {
    if (super(i6), this.it = A, i6.type !== t3.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(r4) {
    if (r4 === A || null == r4) return this._t = void 0, this.it = r4;
    if (r4 === E) return r4;
    if ("string" != typeof r4) throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (r4 === this.it) return this._t;
    this.it = r4;
    const s4 = [r4];
    return s4.raw = s4, this._t = { _$litType$: this.constructor.resultType, strings: s4, values: [] };
  }
};
e5.directiveName = "unsafeHTML", e5.resultType = 1;
var o5 = e4(e5);

// src/components/lit-template-renderer.ts
function leggiValorePerPath(data, path) {
  const parti = path.split(".").filter(Boolean);
  let corrente = data;
  for (const parte of parti) {
    if (corrente === null || typeof corrente !== "object") {
      return "";
    }
    corrente = corrente[parte];
  }
  return corrente;
}
function escapeHtml(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;").replace(/'/g, "&#39;");
}
var LitTemplateRenderer = class extends i4 {
  constructor() {
    super(...arguments);
    this.templateHtml = "";
    this.data = {};
  }
  createRenderRoot() {
    return this;
  }
  compilaTemplate() {
    const template = this.templateHtml || "";
    const conRawHtml = template.replace(/\{\{\{\s*([\w.]+)\s*\}\}\}/g, (_match, key) => {
      const valore = leggiValorePerPath(this.data, key);
      return valore == null ? "" : String(valore);
    });
    return conRawHtml.replace(/\{\{\s*([\w.]+)\s*\}\}/g, (_match, key) => {
      const valore = leggiValorePerPath(this.data, key);
      return escapeHtml(valore == null ? "" : String(valore));
    });
  }
  render() {
    return b2`${o5(this.compilaTemplate())}`;
  }
};
LitTemplateRenderer.properties = {
  templateHtml: { type: String, attribute: "template-html" },
  data: { attribute: false }
};
if (!customElements.get("lit-template-renderer")) {
  customElements.define("lit-template-renderer", LitTemplateRenderer);
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
var templatePagina = `
  <h1>{{titolo}}</h1>
  <p>{{testo}}</p>
  <div class="hero-cards">{{{elementiHtml}}}</div>
`;
var templateNotFound = `
  <h1>{{titolo}}</h1>
  <p>{{testo}}</p>
`;
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
function creaElementiHtml(elementi) {
  if (elementi.length === 0) {
    return "";
  }
  return elementi.map((elemento) => {
    return `
        <article class="hero-card">
          <img src="${creaPathAsset(elemento.immagine)}" alt="${elemento.titolo}">
          <h2>${elemento.titolo}</h2>
          <p>${elemento.testo}</p>
        </article>
      `;
  }).join("");
}
function renderPagina(pathname) {
  const codicePagina = leggiCodicePaginaDaUrl(normalizzaPathname(pathname));
  const pagina = caricaPaginaDaCodice(codicePagina);
  if (pageRenderer instanceof LitTemplateRenderer) {
    if (pagina) {
      pageRenderer.templateHtml = templatePagina;
      pageRenderer.data = {
        titolo: pagina.titolo,
        testo: pagina.testo,
        elementiHtml: creaElementiHtml(pagina.elementi)
      };
    } else {
      pageRenderer.templateHtml = templateNotFound;
      pageRenderer.data = {
        titolo: "Pagina non trovata",
        testo: "Il codice pagina non esiste. Controlla l'URL."
      };
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
lit-html/directive.js:
lit-html/directives/unsafe-html.js:
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
