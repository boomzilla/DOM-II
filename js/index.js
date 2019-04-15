// Your code goes here

//for the next two functions (initInterstitial and the load event listener),
//I am trying to do an "interstitial" effect.
//this is useful if the actual content is large
//however, the way I implemented it (I think), "load" listener will actually be triggered
//once the interstitial (not the actual content!) has loaded
//
//it's not that big of a deal, tho, since I'm still learning

function initInterstitial(){
    let startBod = document.createElement("body");
    document.body = startBod;
    let introHeader = document.createElement("h1");
    let textNode = document.createTextNode("Get ready for adventure!");
    introHeader.appendChild(textNode);
    startBod.appendChild(introHeader);
}

let defaultDoc = document.body;
initInterstitial();

window.addEventListener("load", (event) => {
    let id = setInterval(frame, 20);
    let transOpaque = 100;
    function frame(){
        if (transOpaque <= 0){
            //finished
            clearInterval(id);
            document.body = defaultDoc;
        } else {
            transOpaque--;
            document.body.style.opacity = (transOpaque/100);
        }
    }
});