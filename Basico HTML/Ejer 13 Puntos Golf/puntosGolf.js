/*
En el juego de golf cada hoyo tiene un par que representa el numero promedio de golpes
que se espera que haga un golfista para introducir la pelota en el hoyo.

Hay un nombre diferente dependiendo de que tan por encima opor debajo del par esten tus golpes.

La funcion tomara los argumentos par y golpes.

Retorna la cedena correcta segun esta tabla que muestra los golpes en orden de mayor a menor prioridad:

Golpes                  Retornar
-----------------------------------
1                       "Hole-in-one!"
<= par - 2              "Eagle"
par - 1                 "Birdie"
par                     "Par"
par + 1                 "Bogey"
par + 2                 "Double Bogey"
>= par + 3              "Go Home!"

Par y golpes siempre seran numericos y positivos.

*/

function puntajeDeGolf (par, golpes){
    if(golpes == 1){
        return "Hole-in-one!";
    }else if(golpes <= par -2){
        return "Eagle";
    }else if(golpes == par - 1){
        return "Birdie";
    }else if(golpes == par){
        return "Par";
    }else if(golpes == par + 1){
        return "Bogey";
    }else if(golpes == par + 2){
        return "Double Bogey";
    }else if(golpes >= par + 3){
        return "Go Home";
    }
};

console.log(puntajeDeGolf(2, 1));
console.log(puntajeDeGolf(3,5));
