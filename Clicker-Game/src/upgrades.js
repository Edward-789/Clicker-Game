class mainButton {
    constructor(increment) {
        this.increment = increment;
    }

    get upClicks() {
        cookieNum.innerText = (cookieNum.innerText * 1) + this.increment;
    }
}

class autoUpgrade {
    constructor(increment, interval, costObject, amountObject) {
        if (costObject.innerText * 1 < cookieNum.innerText * 1) {
            amountObject.innerText = (amountObject.innerText * 1) + 1;

            cookieNum.innerText = (cookieNum.innerText * 1) - (costObject.innerText * 1);

            costObject.innerText = Math.round(costObject.innerText * 1.2);  

            setInterval(function() {
                cookieNum.innerText = (cookieNum.innerText * 1) + increment;
            }, interval)
        } else {
            alert("youre too poor")
        }
    }
}