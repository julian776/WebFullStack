//In this JavaScript you can draw free with keyboard and also with your mouse.
var paint = document.getElementById("first_canvas");
var canv = paint.getContext("2d");
x0 = 250;
y0 = 250;

document.addEventListener("keyup", drawLine);
color = "black"

function drawLine(event){
    var key = event.keyCode
    if (key==38 || key==37 || key==40 || key==39){
        pos = line(x0, y0, key);
        x0 = pos[0];
        y0 = pos[1];
    }
}

function line(x0, y0, to){
    canv.beginPath();
    canv.strokeStyle = color;
    canv.moveTo(x0, y0);
    if (to == 38){
        canv.lineTo(x0, y0-10);
        y0-=10;
    }
    else if(to == 40){
        canv.lineTo(x0, y0+10);
        y0+=10;
    }
    else if(to == 39){
        canv.lineTo(x0+10, y0);
        x0+=10;
    }
    else if(to == 37){
        canv.lineTo(x0-10, y0);
        x0-=10;
    }
    canv.stroke();
    canv.closePath();
    return [x0, y0]
}

