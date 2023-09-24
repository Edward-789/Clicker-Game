const saveData = document.querySelector("#saveText");


function findSave () {
    let out = "{ ";
    out += '"numCookies" : ' + cookieNum.innerText + ','
    out += '"increments" : "[' + increments + ']",'
    out += '"amountMiners" : ' + amountMiners.innerText + ',' 
    out += '"costMiners" : ' + costMiners.innerText + ',' 
    out += '"amountTrees" : ' + amountTrees.innerText + ',' 
    out += '"costTrees" : ' + costTrees.innerText + ',' 
    out += '"amountSauropods" : ' + amountSauropods.innerText + ',' 
    out += '"costSauropods" : ' + costSauropods.innerText
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
    const saveDatas = JSON.parse(saveData.value);
    cookieNum.innerText = saveDatas.numCookies;
    amountMiners.innerText = saveDatas.amountMiners;
    costMiners.innerText = saveDatas.costMiners;
    amountTrees.innerText = saveDatas.amountTrees;
    costTrees.innerText = saveDatas.costTrees;
    amountSauropods.innerText = saveDatas.amountSauropods;
    costSauropods.innerText = saveDatas.costSauropods;

    for (let i = 0; i <= saveDatas.increments.length; i++) {
        increments[i] = saveDatas.increments[i];
    }
    
}