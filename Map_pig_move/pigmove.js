var canv = document.getElementById("pigmap");
var map = canv.getContext("2d");

var pig = {
    loadOK: false,
    url: "cerdo.png"
}

pig.image = new Image();
pig.image.src = pig.url;
pig.image.addEventListener("load", loadPig);

var lienzo = {
    loadOK: false,
    url: "tile.png"
}

lienzo.image = new Image();
lienzo.image.src = lienzo.url;
lienzo.image.addEventListener("load", loadLienzo);

x0 = 200;
y0 = 250;
document.addEventListener("keydown", movePig);

function movePig(event){
    var key = keyPress(event);
    if (key!=null){
        var movex = key[0];
        var movey = key[1];
        updatePos(movex, movey);

    }
}

function keyPress(event){
    key = event.keyCode;
    switch(key){
        case 38:
            return [0, -20]
        case 39:
            return [+20, 0]
        case 40:
            return [0, +20]
        case 37:
             return [-20, 0]
        default:
            return null
    }
}

function updatePos(movex, movey){
    x0 = x0 + (movex)
    y0 = y0 + movey
    if (lienzo.loadOK){
        map.drawImage(lienzo.image, 0, 0);
    }
    if (pig.loadOK){
            map.drawImage(pig.image, x0, y0);
    }    
}

function loadLienzo(){
    lienzo.loadOK = true;
    draw();
}

function loadPig(){
    pig.loadOK = true;
    draw();
}

function draw(){
    if (lienzo.loadOK){
        map.drawImage(lienzo.image, 0, 0);
    }
    if (pig.loadOK){
        map.drawImage(pig.image, 200, 250);
    }
}

