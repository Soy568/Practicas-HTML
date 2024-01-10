/* Trabajando con dar clic */

var Box = document.getElementById("Box");
var Boton = document.getElementById("Boton");

Boton.onclick = function() {
    Box.style.backgroundColor = "red";
};


/* Trabajando con mover mouse */
var elemento = document.getElementById("miElemento");

elemento.onmouseover = function(){
    elemento.style.backgroundColor = "yellow";  //Paso el mouse
};

elemento.onmouseout = function() {
    elemento.style.backgroundColor = "white";   //Retiro el mouse
};

/*Trabajando con Keydown */
document.onkeydown = function(evento) {
    if(evento.key === "Enter"){
        console.log("Se presiono la tecla Enter");
    };
};
