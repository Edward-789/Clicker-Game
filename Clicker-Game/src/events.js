const clickerButton = document.querySelector("#mainButton");
const minerButton = document.querySelector("#minerButton");
const cookieNum = document.querySelector("#numCookies")

let mainButtons = new mainButton(1)

clickerButton.addEventListener("click", function() {mainButtons.upClicks});
minerButton.addEventListener("click", function() {let i = new autoUpgrade(1, 5000, document.querySelector("#costMiners"), document.querySelector("#amountMiners"))})