
/* Atributo onclick */
function displayDate() {
    document.getElementById("horaFecha").innerHTML=Date(); 
};

/* Trabajando al hacer clic Box */
var Box = document.getElementById("Box");
var Boton = document.getElementById("Boton");

Boton.onclick = function() {
    Box.style.backgroundColor = "black";
    Box.style.color="white";
};

/* Trabajando con mover mouse miElemento*/
var elemento = document.getElementById("miElemento");

elemento.onmouseover = function(){
    elemento.style.backgroundColor = "yellow";  //Paso el mouse
};

elemento.onmouseout = function() {
    elemento.style.backgroundColor = "white";   //Retiro el mouse
};

/* Trabajando con Keydown */
document.onkeydown = function(evento) {
    if(evento.key === "Enter"){
        console.log("Se presiono la tecla Enter");
    };
};

/* On Off Bombillo */
function onLamp() {
    document.getElementById('myLamp').src='img/Bombillo On.png'
    
};

function offLamp() {
    document.getElementById('myLamp').src='img/Bombillo Off.png'
};