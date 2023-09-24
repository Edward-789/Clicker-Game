let increments = [10, 12, 25];

class mainButton {
    constructor(increment) {
        this.increment = increment;
    }

    get upClicks() {
        cookieNum.innerText = (cookieNum.innerText * 1) + this.increment;
    }
}

class autoUpgrade {
    constructor(increment, interval, costObject, amountObject, typeOfUpgrade) {
        if (costObject.innerText * 1 < cookieNum.innerText * 1) {
            amountObject.innerText = (amountObject.innerText * 1) + 1;

            cookieNum.innerText = (cookieNum.innerText * 1) - (costObject.innerText * 1);

            costObject.innerText = (costObject.innerText * 1) + increments[typeOfUpgrade];

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
}
