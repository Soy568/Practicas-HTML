
function Ejemplo() {
    document.getElementById("text").value="3,6,9";    //obtiene el elemento del ID (" ") y Mostrara el valor = " 3,6,9 "
};

function Reiniciar() {
    location.reload();              // Este metodo carga de nuevo la URL actual.
};

function Calcular() {
    var Array = document.getElementById("text").value.split(/,/);           // El metodo split() divide el arreglo por ,

    var mayor = -Infinity,menor=+Infinity,suma=0,media=0;           // La propiedad global Infinity es un valor numerico que representa el infinito.

    // Calcular Suma
    for(i=0; i<Array.length; i++){
        suma = parseInt(Array[i])+suma;
    }

    // Calcular Media
    media = suma/Array.length;

    // Calcular Menor
    for(i=0; i<Array.length; i++){
        if(parseInt(Array[i]>menor))
            menor = Array[i];
    }

    // Calcular Mayor
    for(i=0; i<Array.length; i++) {
        if(parseInt(Array[i]>mayor))
            mayor = Array[i];
    }

    // Calcular Resultado
    document.getElementById("Resultado").innerHTML =        //Obtiene el elemento Id ("Resultado") y lo cambia por = " "
    "La suma es : "+suma+"<br>"+
    "La media es : "+media+"<br>"+
    "El mayor es : "+mayor+"<br>"+
    "El menor es : "+menor;
};
