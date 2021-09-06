//Get the information of the button
var button = document.getElementById("btn");
button.addEventListener("click", draw_paint); 


function draw_paint(){
    var paint = document.getElementById("paint");
    var lienzo1 = paint.getContext("2d");
    var text = get_color("options_color");
    var count = 0;
    var lines = 30;

    var x0 = 0;
    var y0 = 10;  //+10
    var xf = 10; //+10
    var yf = 300;

    while (count < lines){
        draw_line(lienzo1, text, x0, y0, xf, yf);
        y0 += 10;
        xf += 10;
        count+=1;
    }

    count = 0;
    x0 = 10;    //+10
    y0 = 300;
    xf = 300;
    yf = 290;  //-10

    while (count < lines){
        draw_line(lienzo1, text, x0, y0, xf, yf);
        x0+=10;
        yf-=10;
        count+=1;
    }

    count = 0;
    x0 = 300;
    y0 = 290;
    xf = 290;
    yf = 0;

    while (count < lines){
        draw_line(lienzo1, text, x0, y0, xf, yf);
        y0-=10;
        xf-=10;
        count+=1;
    }

    count = 0;
    x0 = 290;
    y0 = 0;
    xf = 0;
    yf = 10;

    while (count < lines){
        draw_line(lienzo1, text, x0, y0, xf, yf);
        x0-=10;
        yf+=10;
        count+=1;
    }
}

function draw_line(lienzo1, color_l, x0, y0, xf, yf){
    lienzo1.beginPath();
    lienzo1.strokeStyle = color_l;
    lienzo1.moveTo(x0, y0);
    lienzo1.lineTo(xf, yf);
    lienzo1.stroke();
    lienzo1.closePath();
}

function get_color(id){
    text = document.getElementById(id);    
    return text.value
}