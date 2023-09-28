let increments = [10, 12, 25];
let pointsPerSec = 0;

function upClicks() {
        cookieNum.innerText = (cookieNum.innerText * 1) + 1;
}

function autoUpgrade(increment, interval, costObject, amountObject, typeOfUpgrade) {
    if (costObject.innerText * 1 <= cookieNum.innerText * 1) {
        amountObject.innerText = (amountObject.innerText * 1) + 1;

        cookieNum.innerText = (cookieNum.innerText * 1) - (costObject.innerText * 1);

        costObject.innerText = (costObject.innerText * 1) + increments[typeOfUpgrade];

        pointsPerSec += increment * (1000 / interval)

        if (amountObject.innerText % 8 == 0) {
            increments[typeOfUpgrade] = Math.round(increments[typeOfUpgrade] * 1.1)
        }

        setInterval(function() {
            cookieNum.innerText = (cookieNum.innerText * 1) + increment;
        }, interval)
    } else {
        alert("youre too poor")
    }
}
