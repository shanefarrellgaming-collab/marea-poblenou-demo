const translations={
es:{
navFood:"Sabores",navExperience:"Experiencia",navVisit:"Visítanos",navBook:"Reservar",eyebrow:"Poblenou · Barcelona",
heroText:"Tapas, cocina mediterránea y espíritu italiano en un rincón de barrio hecho para compartir.",
callBook:"Llamar para reservar",findUs:"Cómo llegar",ratingLabel:"Valoración en Tripadvisor",daysLabel:"Abierto todos los días",
allDayTitle:"Todo el día",allDayLabel:"Desayuno · comida · cena · copas",foodEyebrow:"Una mesa para quedarse",
foodTitle:"Sabores con acento mediterráneo.",
foodIntro:"Una propuesta informal y generosa donde conviven tapas españolas, inspiración italiana y platos pensados para compartir, desde el brunch hasta la última copa.",
photoSmall:"Compartir es parte del plan",photoTitle:"Tapas, vino y buena compañía.",card1Title:"Desayuno & Brunch",
card1Text:"Empieza el día sin prisas, en pleno Poblenou.",card2Title:"Tapas & Compartir",
card2Text:"Sabores españoles para pedir al centro y probar un poco de todo.",card3Title:"Toque Italiano",
card3Text:"Una influencia italiana que completa una carta mediterránea y cercana.",card4Title:"Copas & Tardeo",
card4Text:"Para alargar la sobremesa y dejar que la tarde se convierta en noche.",expEyebrow:"El ambiente importa",
expTitle:"Un pequeño rincón con mucha personalidad.",
expText:"Marea combina el ritmo del barrio con una experiencia relajada y cercana: mesa compartida, servicio amable y una ubicación perfecta para descubrir Poblenou.",
quote:"“Una experiencia estupenda: ambiente agradable, atención impecable y comida que invita a volver.”",
reviews:"14 opiniones en Tripadvisor",visitEyebrow:"Ven a vernos",visitTitle:"En el corazón de Poblenou.",
monTue:"Lunes — Martes",wedSat:"Miércoles — Sábado",sun:"Domingo",emailUs:"Escríbenos",
closingEyebrow:"Nos vemos en Poblenou",closingTitle:"Una mesa. Muchas ganas de volver.",
closingText:"Pasa por Marea para desayunar, compartir unas tapas o quedarte hasta la última copa.",
closingButton:"Reservar por teléfono",demoBadge:"DEMO NO OFICIAL · Concepto creado para presentar al negocio"
},
en:{
navFood:"Flavours",navExperience:"Experience",navVisit:"Visit us",navBook:"Book",eyebrow:"Poblenou · Barcelona",
heroText:"Tapas, Mediterranean cooking and Italian spirit in a neighbourhood spot made for sharing.",
callBook:"Call to book",findUs:"Find us",ratingLabel:"Tripadvisor rating",daysLabel:"Open every day",
allDayTitle:"All day",allDayLabel:"Breakfast · lunch · dinner · drinks",foodEyebrow:"A table worth staying at",
foodTitle:"Mediterranean flavours, Poblenou energy.",
foodIntro:"A relaxed, generous mix of Spanish tapas, Italian inspiration and dishes made for sharing — from brunch through the last drink.",
photoSmall:"Sharing is part of the plan",photoTitle:"Tapas, wine and good company.",card1Title:"Breakfast & Brunch",
card1Text:"Start the day slowly, right in the heart of Poblenou.",card2Title:"Tapas & Sharing",
card2Text:"Spanish flavours made for the middle of the table and trying a bit of everything.",card3Title:"Italian Touch",
card3Text:"Italian influence rounds out a warm, Mediterranean menu.",card4Title:"Drinks & Evenings",
card4Text:"Stay for another round and let the afternoon turn into evening.",expEyebrow:"Atmosphere matters",
expTitle:"A small corner with plenty of personality.",
expText:"Marea brings together the rhythm of the neighbourhood and an easygoing experience: shared plates, friendly service and a great base for exploring Poblenou.",
quote:"“A great experience: welcoming atmosphere, excellent attention and food that makes you want to come back.”",
reviews:"14 Tripadvisor reviews",visitEyebrow:"Come see us",visitTitle:"In the heart of Poblenou.",
monTue:"Monday — Tuesday",wedSat:"Wednesday — Saturday",sun:"Sunday",emailUs:"Email us",
closingEyebrow:"See you in Poblenou",closingTitle:"One table. Plenty of reasons to return.",
closingText:"Drop into Marea for breakfast, shared tapas or a drink that turns into another.",
closingButton:"Book by phone",demoBadge:"UNOFFICIAL DEMO · Concept created to present to the business"
}};
document.querySelectorAll(".lang button").forEach(btn=>{
btn.addEventListener("click",()=>{
const lang=btn.dataset.lang;
document.documentElement.lang=lang;
document.querySelectorAll(".lang button").forEach(b=>b.classList.toggle("active",b===btn));
document.querySelectorAll("[data-i18n]").forEach(el=>{
const key=el.dataset.i18n;
if(translations[lang][key])el.textContent=translations[lang][key];
});
});
});