let idol = Math.random() > 0.5 ? undefined : 'IVE';

let idol2: null | string = null;
if (Math.random() > 0.5) {
  idol2 = 'aespa';
}

let idol3 = Math.random() > 0.5 ? 123 : 'LE SSERAFIM';

let actor: number | string;
// actor.toUpperCase();
// actor.toFixed();
actor = "Nam Joo Hyuk";
actor.toUpperCase();

actor = 123;
actor.toFixed();

let actor2 = Math.random() > 0.5 ? "Seo Kang Jun" : 29;

if (actor2 === "Seo Kang Jun") {
  actor2.toUpperCase();
}

typeof actor2 === "string" ? actor2.toUpperCase() : actor2.toFixed();