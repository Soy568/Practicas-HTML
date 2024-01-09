function Ejemplo(){
    document.getElementById("text").value=" 5,69,83,123";    
}

function Reiniciar(){
    location.reload();      //Funcion para reiniciar
} 

function Calcular(){
    var array = document.getElementById("text").value.split(/,/);    
    var mayor=-Infinity,menor=+Infinity,suma=0,media=0;
    
    //SUMA
    for(i=0;i<array.length;i++){
    suma=parseInt(array[i])+suma;
    }
    
    //MEDIA
    media=suma/array.length;
    
    //MENOR
    for(i=0;i<array.length;i++){
    if(parseInt(array[i])<menor) menor=array[i];
    }
    
    //MAYOR
    for(i=0;i<array.length;i++){
    if(parseInt(array[i])>mayor) mayor=array[i];
    }
    
    //RESULTADO
    
    document.getElementById("resultado").innerHTML="La Suma es : "+suma+"<br>"+
                                                    "La Media es : "+media+"<br>"+
                                                    "El Mayor es : "+mayor+"<br>"+
                                                    "El Menor es : "+menor+"<br>"
    
}
