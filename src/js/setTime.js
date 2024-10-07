setInterval(() => {}, 500);
setTimeout(() => {}, 500);

const timeoutID = setTimeout(() => {
  console.log("setTimeout  1000");
}, 1000);

const setIntervalID = setInterval(() => {
  console.log("setTimeout 500");
}, 500);

// остановка
clearTimeout(timeoutID);
clearInterval(setIntervalID);



// смена языка
// смена фона
