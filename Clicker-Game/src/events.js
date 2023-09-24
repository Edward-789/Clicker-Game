const clickerButton = document.querySelector("#mainButton");
const minerButton = document.querySelector("#minerButton");
const treeButton = document.querySelector("#treeButton");
const sauropodButton = document.querySelector("#sauropodButton");
const cookieNum = document.querySelector("#numCookies");

const costMiners = document.querySelector("#costMiners");
const amountMiners = document.querySelector("#amountMiners");
const costTrees = document.querySelector("#costTrees");
const amountTrees = document.querySelector("#amountTrees");
const costSauropods = document.querySelector("#costSauropods");
const amountSauropods = document.querySelector("#amountSauropods");

let mainButtons = new mainButton(1);

clickerButton.addEventListener("click", function() {
  mainButtons.upClicks;
  console.log(findSave());
});

minerButton.addEventListener("click", function() {
  let i = new autoUpgrade(1, 5000, costMiners, amountMiners, 0);
});

treeButton.addEventListener("click", function() {
  let i = new autoUpgrade(1, 2000, costTrees, amountTrees, 1);
});

sauropodButton.addEventListener("click", function() {
  let i = new autoUpgrade(1, 333, costSauropods, amountSauropods, 2);
});
