const langHTML = document.documentElement;
const langBtn = document.getElementById("langBtn");

const langList = ["en", "ru"];
let locStor = localStorage.getItem("language") || langList[0];

function setLanguage(lang) {
  langHTML.lang = lang;
  langBtn.textContent = lang;
}

setLanguage(locStor);

langBtn.addEventListener("click", () => {
  const langNow = langList.findIndex((val) => val === langHTML.lang);
  const assig = langList[(langNow + 1) % langList.length];

  setLanguage(assig);
  localStorage.setItem("language", assig);
});
