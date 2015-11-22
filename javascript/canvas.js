var c = document.getElementById("iconoInicio");
var cxt = c.getContext("2d");

cxt.beginPath();
cxt.fillStyle = "black";
cxt.moveTo(10/2,10/2);
cxt.lineTo(35/2,10/2);
cxt.lineTo(35/2,30/2);
cxt.lineTo(60/2,30/2);
cxt.lineTo(60/2,10/2);
cxt.lineTo(85/2,10/2);
cxt.lineTo(85/2,30/2);
cxt.lineTo(105/2,30/2);
cxt.lineTo(105/2,10/2);

cxt.lineTo(130/2,10/2);
cxt.lineTo(130/2,45/2);
cxt.lineTo(105/2,60/2);
cxt.lineTo(105/2,100/2);
cxt.lineTo(130/2,130/2);
cxt.lineTo(10/2,130/2);
cxt.lineTo(35/2,102/2);
cxt.lineTo(35/2,60/2);
cxt.lineTo(10/2,45/2);
cxt.lineTo(10/2,10/2);
cxt.fill();
cxt.closePath();

//Puerta
cxt.beginPath();
cxt.moveTo(50/2,90/2);
cxt.lineTo(90/2,90/2);
cxt.lineTo(90/2,128/2);
cxt.lineTo(50/2,128/2);
cxt.lineTo(50/2,90/2);
cxt.fillStyle = "white";
cxt.fill();
cxt.stroke();
cxt.closePath();


var c = document.getElementById("iconoCivis");
var cxt = c.getContext("2d");

cxt.beginPath();
cxt.fillStyle = "black";
cxt.moveTo(23/2,10/2);
cxt.lineTo(118/2,10/2);
cxt.lineTo(118/2,130/2);
cxt.lineTo(73/2,78/2);
cxt.lineTo(22/2,130/2);
cxt.lineTo(23/2,10/2);
cxt.fill();
cxt.stroke();
cxt.closePath();

var c = document.getElementById("iconoUnidades");
var cxt = c.getContext("2d");

cxt.beginPath();
cxt.fillStyle = "black";
cxt.moveTo(62/2,130/2);
cxt.lineTo(57/2,130/2);
cxt.lineTo(57/2,80/2);
cxt.lineTo(22/2,80/2);
cxt.lineTo(22/2,20/2);
cxt.lineTo(120/2,20/2);
cxt.lineTo(120/2,80/2);
cxt.lineTo(82/2,80/2);
cxt.lineTo(82/2,130/2);
cxt.lineTo(57/2,130/2);

//Arriba martillo
cxt.moveTo(43/2,20/2);
cxt.lineTo(43/2,10/2);
cxt.lineTo(97/2,10/2);
cxt.lineTo(97/2,20/2);
cxt.fill();
cxt.stroke();
cxt.closePath();

//Lineas lado martillo
cxt.beginPath();
cxt.moveTo(112/2,20/2);
cxt.lineTo(112/2,80/2);
cxt.lineTo(114/2,80/2);
cxt.lineTo(114/2,20/2);
cxt.moveTo(27/2,20/2);
cxt.lineTo(27/2,70/2);
cxt.lineTo(30/2,20/2);
cxt.lineTo(30/2,70/2);
cxt.fillStyle = "white";
cxt.fill();
cxt.stroke();
cxt.closePath();

var c = document.getElementById("iconoGaleria");
var cxt = c.getContext("2d");

//Cuadrados superiores
cxt.beginPath();
cxt.moveTo(15/2,15/2);
cxt.lineTo(45/2,15/2);
cxt.lineTo(45/2,45/2);
cxt.lineTo(15/2,45/2);
cxt.lineTo(15/2,15/2);

cxt.moveTo(55/2,15/2);
cxt.lineTo(55/2,45/2);
cxt.lineTo(85/2,45/2);
cxt.lineTo(85/2,15/2);
cxt.lineTo(55/2,15/2);

cxt.moveTo(95/2,15/2);
cxt.lineTo(95/2,45/2);
cxt.lineTo(125/2,45/2);
cxt.lineTo(125/2,15/2);
cxt.lineTo(95/2,15/2);

//Cuadrados medios
cxt.moveTo(15/2,55/2);
cxt.lineTo(15/2,85/2);
cxt.lineTo(45/2,85/2);
cxt.lineTo(45/2,55/2);
cxt.lineTo(15/2,55/2);

cxt.moveTo(55/2,55/2);
cxt.lineTo(55/2,85/2);
cxt.lineTo(85/2,85/2);
cxt.lineTo(85/2,55/2);
cxt.lineTo(55/2,55/2);

cxt.moveTo(95/2,55/2);
cxt.lineTo(95/2,85/2);
cxt.lineTo(125/2,85/2);
cxt.lineTo(125/2,55/2);
cxt.lineTo(95/2,55/2);

//Rectangulo inferior
cxt.moveTo(15/2,95/2);
cxt.lineTo(125/2,95/2);
cxt.lineTo(125/2,125/2);
cxt.lineTo(15/2,125/2);
cxt.lineTo(15/2,95/2);
cxt.fill();
cxt.stroke();

