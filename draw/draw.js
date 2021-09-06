var canvs1 = document.getElementById("draw1");
lienzo = canvs1.getContext("2d"); //Lienzo is canvas in spanish

lienzo.beginPath();
lienzo.strokeStyle = "lightblue";
lienzo.moveTo(50, 50);
lienzo.lineTo(0,20);
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.strokeStyle = "orange";
lienzo.moveTo(300, 300);
lienzo.lineTo(10, 10);
lienzo.stroke();
lienzo.closePath();


lienzo.beginPath();
lienzo.strokeStyle = "black";
lienzo.moveTo(0, 0);
lienzo.lineTo(300, 0);
lienzo.lineTo(300, 300);
lienzo.lineTo(0, 300);
lienzo.lineTo(0, 0);
lienzo.stroke();
lienzo.closePath();
