let currentLang = "en";

function toggleLang() {
  currentLang = currentLang === "en" ? "hi" : "en";
  document.querySelectorAll("[data-en]").forEach(el => {
    el.innerText = el.getAttribute("data-" + currentLang);
  });
}

toggleLang(); // load English by default
