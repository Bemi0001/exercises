"use strict";

const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};

const select = document.querySelector("#languageSwitcher");

function setLanguage(locale) {
  texts[locale].texts.forEach((item) => {
    const el = document.querySelector(item.location);
    if (el) el.textContent = item.text;
  });
}


let locale = "da";
select.value = locale;
setLanguage(locale);


select.addEventListener("change", (e) => {
  locale = e.target.value;
  setLanguage(locale);
});
