var combi = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

function randomHexColors() {
    var r = hexCode();
    document.body.style.background = r;
    console.log(r);
}
function hexCode() {
    let theHex = '#';
    for (let i = 0; i < 6; i++) {
        theHex += combi[Math.floor(Math.random() * combi.length)]
    }
    console.log(theHex);
    return theHex;
}
document.body.addEventListener('click', randomHexColors())
