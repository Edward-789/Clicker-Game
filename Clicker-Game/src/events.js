const clickerButton = document.querySelector("#mainButton");
const minerButton = document.querySelector("#minerButton");
const treeButton = document.querySelector("#treeButton");
const sauropodButton = document.querySelector("#sauropodButton");
const cookieNum = document.querySelector("#numCookies")

let mainButtons = new mainButton(1)

clickerButton.addEventListener("click", function() {mainButtons.upClicks});
minerButton.addEventListener("click", function() {let i = new autoUpgrade(1, 5000, document.querySelector("#costMiners"), document.querySelector("#amountMiners"), 0)})
treeButton.addEventListener("click", function() {let i = new autoUpgrade(1, 2000, document.querySelector("#costTrees"), document.querySelector("#amountTrees"), 1)})
sauropodButton.addEventListener("click", function() {let i = new autoUpgrade(1, 333, document.querySelector("#costSauropods"), document.querySelector("#amountSauropods"), 2)})
