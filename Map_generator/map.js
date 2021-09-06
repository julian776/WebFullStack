var map = document.getElementById("village");
var village = map.getContext("2d");

var lienzo = {
    url:"tile.png",
    loadOK:false
}
lienzo.image = new Image();
lienzo.image.src = lienzo.url;
lienzo.image.addEventListener("load", drawLienzo);

var cow = {
    url:"vaca.png",
    loadOK:false
}
cow.image = new Image();
cow.image.src = cow.url;
cow.image.addEventListener("load", drawCow);

var pig = {
    url:"cerdo.png",
    loadOK:false
}
pig.image = new Image();
pig.image.src = pig.url;
pig.image.addEventListener("load", drawPig);

var chiken = {
    url:"pollo.png",
    loadOK:false
}
chiken.image = new Image();
chiken.image.src = chiken.url;
chiken.image.addEventListener("load", drawChiken);

function drawLienzo(){
    lienzo.loadOK = true;
    draw_map();
}

function drawCow(){
    cow.loadOK = true;
    draw_map();
}
function drawPig(){
    pig.loadOK = true;
    draw_map();
}
function drawChiken(){
    chiken.loadOK = true;
    draw_map();
}

function draw_map(){
    if(lienzo.loadOK){
        village.drawImage(lienzo.image, 0, 0);
    }
    if(cow.loadOK){
        var quantity = randm(1, 6);
        for(var v=0; v < quantity; v++){
            var x0 = randm(0, 420);
            var y0 = randm(0, 420);
            village.drawImage(cow.image, x0, y0);
    
        }    
    }
    if(chiken.loadOK){
        var quantity = randm(1, 6);
        for(var v=0; v < quantity; v++){
            var x0 = randm(0, 420);
            var y0 = randm(0, 420);
            village.drawImage(chiken.image, x0, y0);
        }    
    }    
    if(pig.loadOK){
        var quantity = randm(1,6);
        for(var v=0; v < quantity; v++){
            var x0 = randm(0, 420);
            var y0 = randm(0, 420);
            village.drawImage(pig.image, x0, y0);
        }    
    }
}
function randm(min, max){
    result = Math.floor(Math.random()*(max-min-1)+min);
    return result
}