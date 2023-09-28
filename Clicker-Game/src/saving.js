const saveData = document.querySelector("#saveText");


function findSave () {
    let out = "{ ";
    out += '"numCookies" : ' + cookieNum.innerText + ','
    out += '"increments" : [' + increments + '],'
    out += '"amountMiners" : ' + amountMiners.innerText + ',' 
    out += '"costMiners" : ' + costMiners.innerText + ',' 
    out += '"amountTrees" : ' + amountTrees.innerText + ',' 
    out += '"costTrees" : ' + costTrees.innerText + ',' 
    out += '"amountSauropods" : '+ amountSauropods.innerText + ',' 
    out += '"costSauropods" : ' + costSauropods.innerText + ','
    out += '"pointsPerSec" : ' + pointsPerSec
    out += "}"
    return out; 
}

function downloadSave() {
    const blob = new Blob([findSave()], {type:"octad-stream"})
    const href = URL.createObjectURL(blob)
    const a = Object.assign(document.createElement('a'), {href, 
        style:"display:none", 
        download:"clickerSave.txt"});
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(href);
    a.remove();
};

function loadSave() {
    if (cookieNum.innerText == 0) {
        const saveDatas = JSON.parse(saveData.value);
        cookieNum.innerText = saveDatas.numCookies || 0;
        amountMiners.innerText = saveDatas.amountMiners || 0
        costMiners.innerText = saveDatas.costMiners || costMiners.innerText * 1 
        amountTrees.innerText = saveDatas.amountTrees || 0
        costTrees.innerText = saveDatas.costTrees || costTrees.innerText * 1
        amountSauropods.innerText = saveDatas.amountSauropods || 0
        costSauropods.innerText = saveDatas.costSauropods || costSauropods.innerText * 1 
        increments = saveDatas.increments || 0

        setInterval(function() {
            cookieNum.innerText = (cookieNum.innerText * 1) + 1;
        }, 1000 / saveDatas.pointsPerSec )
    } else {
        alert("Saves can only be loaded on new games")
    }
}

