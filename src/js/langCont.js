const observer = new MutationObserver(() => {
  console.log("Язык изменён на: " + document.documentElement.lang);
});

observer.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ["lang"],
});
