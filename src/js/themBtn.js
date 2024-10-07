const themBtn = document.getElementById("themBtn");
const linkTheme = document.getElementById("linkTheme");

const themList = ["light", "dark"];

let switchBtn = localStorage.getItem("theme") === "true";

const loadTheme = () => {
  linkTheme.setAttribute(
    "href",
    `./src/css/theme-${themList[switchBtn ? 1 : 0]}.css`
  );
};

themBtn.addEventListener("click", () => {
  switchBtn = !switchBtn;
  localStorage.setItem("theme", switchBtn);
  loadTheme();
});

loadTheme();
