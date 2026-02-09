"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const themeSelect = document.querySelector("#themeSelect");
  const body = document.body;


  themeSelect.value = body.dataset.theme;

  
  themeSelect.addEventListener("change", (event) => {
    const selectedTheme = event.target.value;

   
    body.dataset.theme = selectedTheme;
  });
});
