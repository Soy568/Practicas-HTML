
function SemaforoRojo(){
    document.getElementById('Semaforo').src='img/SemaforoRojo.png'
    console.log("No puede pasar");
};
function SemaforoAmarillo() {
    document.getElementById('Semaforo').src='img/SemaforoAmarillo.png'
    console.log("Detener");
};
function SemaforoVerde(){
    document.getElementById('Semaforo').src='img/SemaforoVerde.png'
    console.log("Siga");
};


function Semaforo(color) {
    switch(color){
        case 'SemaforoRojo' :
            console.log("No puede pasar");
        break;
        case 'SemaforoAmarillo':
            console.log("Detener");
            break;
        case 'SemaforoVerde':
            console.log("Siga");
        default:
            console.log("Error Error");
    };
};
Semaforo("SemaforoRojo");       //llamado a la funcion.



/*Forma 1 */
function saludo() {
    console.log('Prueba de forma 1');
};
saludo();

/*Forma 2 funcion flecha*/
const saludo2 = () =>{
    console.log('Prueba funcion flecha');
};
saludo2();

const Prueba1 = (nombre) => {
    console.log(`Prueba de nombre : ${nombre}`);
};
Prueba1('Pedro');
Prueba1('Juan');
Prueba1('Camilo');


/* Calculadora */

console.log('Operacion de suma y resta 1:');
const operacion = (tipo,num1,num2)=> {
    if(tipo === 'suma'){
        console.log(num1+num2);
    }else if (tipo === 'resta'){
        console.log(num1-num2);
    }
};
operacion('suma',10,30);
operacion('resta',300,178);



/* Return los resultados */

console.log('Operacion de suma y resta 2:');
const operacion1 = (tipo,num1,num2)=> {
    let resultado;                  //variable 
    if(tipo === 'suma'){
        resultado = (num1+num2);        //asigna el resultado a la variable
    }else if (tipo === 'resta'){
        resultado = (num1-num2);        //asigna el resultado a la variable
    }
    return resultado;                   //retorna el resultado
};
const miresultado = operacion1('suma',40,50);   //asigno los argumentos a una variable
console.log(miresultado);       //muestra el valor retornado por medio de la variable

/* Return los resultados 2 */

console.log('Operacion de suma y resta 3:');
const operacion2 = (tipo,num1,num2)=> {
    if(tipo === 'suma'){
        return (num1+num2);        //asigna el resultado a la variable
    }else if (tipo === 'resta'){
        return (num1-num2);        //asigna el resultado a la variable
    }                   
};
const resultado = operacion2('suma',320,560);   //asigno los argumentos a una variable
console.log(resultado);       //muestra el valor retornado por medio de la variable


/* Conocer el numero de letras de un nombre */

let numeroLetras = (name) => {
    let nume = name.length;
    console.log(`${name} tiene ${nume} letras`);
};
numeroLetras('alejandro');