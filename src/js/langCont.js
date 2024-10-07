const mainTag = document.querySelector("main");

const logLanguage = () => {
  // console.log("Язык: " + document.documentElement.lang);
  fetch(`src/json/${document.documentElement.lang}.json`) //data -'https/...'
    .then((response) => response.json())
    .then((data) => contentRendering(data))
    .catch((error) => console.log("error"));
};

const observer = new MutationObserver(logLanguage);

logLanguage();

observer.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ["lang"],
});

function contentRendering(data) {
  // console.log(data);
  mainTag.innerHTML = `
  <h1>${data.regular_expressions.title}</h1>
  <div class="mainCont">
  ${data.regular_expressions.items
    .map((categorys) => {
      return `
      <div class="mainContBlock">
      <h2>${categorys.category}</h2>
      <ul>
      ${categorys.items
        .map((item, index) => {
          const className = index % 2 === 0 ? "even" : "odd"; // Определяем класс
          return `<li class="${className}"><strong>${item.code}</strong><span>${item.description}</span></li>`;
        })
        .join("")} 
      </ul>
      </div>`;
    })
    .join("")}
  </div>
  `;
}
