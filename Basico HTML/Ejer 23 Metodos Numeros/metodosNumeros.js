

/** .toString */
/** convertir a string */

/** .toFixed() */
/** permite obtener un numero con la cantidad de decimales. */
const numero = 3.141516;
console.log(numero);
console.log(numero.toFixed(3));     //Cantidad de decimales a mostrar.

/** parseInt() */
/**  Funcion que transforma un valor a tipo entero */
/*
const numero1 = prompt('Digite un numero : '); //Ingresamos un dato de tipo texto
const numero2 = prompt('Digite otro numero : '); //ingresamos otro dato de tipo texto
console.log(numero1+numero2);   //Concatena los dos textos

const numero3 = parseInt(prompt('Digite un numero : ')); //Ingresamos un dato de tipo texto y se convierte a entero
const numero4 = parseInt(prompt('Digite otro numero : ')); //ingresamos otro dato de tipo texto y se convierte a entero
console.log(numero3 + numero4);// se realiza la convercion y ahora si realiza una suma

/** parseFloat() */
/**  Funcion que transforma un valor a tipo flotante */
/*
const numero5 = parseFloat(prompt('Digite un numero : ')); //Ingresamos un dato de tipo texto y se convierte a decimal
const numero6 = parseFloat(prompt('Digite otro numero : ')); //ingresamos otro dato de tipo texto y se convierte a decimal
console.log(numero5 + numero6);// se realiza la convercion y ahora si realiza una suma


/** Math.random() */
/** Es un Objeto que genera un numero al azar entre 0 y 1 */

const numeroAleatorio = Math.random();
console.log(numeroAleatorio);

/** Math.floor() */
/** redondea un numero hacia ABAJO */
console.log(Math.floor(10.99));      //redondea a 10


/** Math.ceil() */
/** redondea un numero hacia ARRIBA */
console.log(Math.ceil(10.99));      //redondea a 11


/** Math.round() */
/** redondea hacia el entero mas cercano */
console.log(Math.round(10.5));      
console.log(Math.round(10.4));

/** Numero al azar de 0 hasta 100 */
const numeroAzar = Math.random();
console.log(Math.floor(numeroAzar * 101));