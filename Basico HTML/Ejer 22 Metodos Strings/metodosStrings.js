const texto = 'Propiedad de strings sus usos y su importancia';
console.log(texto.length);      //Mostrara la cantidad de elementos del string

const primerIndex = texto.indexOf('P'); //muestra el index del primer elemento
console.log(primerIndex);

const primerIndex1 = texto.indexOf('f'); //si el caracter no existe o no esta ecrito igual aparecera -1
console.log(primerIndex1);

const primerIndex2 = texto.lastIndexOf('s'); //muestra el index del ultimo elemento
console.log(primerIndex2);

/** .slice() */
/** Devuelve un fragmento de una cadena de texto. */
/** 1er parametro : index de donde queremos cortar */
/** 2do parametro (Opcional): index hasta donde queremos cortar */

const index= texto.indexOf('s');    //identifico el index DESDE donde se desea cortar
const indexEnd = texto.lastIndexOf('y');    //identifico el index HASTA donde se desea cortar
/** TENER EN CUENTA LAS LETRAS REPETIDAS. */
const recorte = texto.slice(index,indexEnd); //incluyo el 1er parametro (index) para hacer el recorte
console.log(recorte);


/** .replace() */
/** Devuelve una cadena de texto en donde remplaza una valor por otro. */
/** 1er parametro : El texto a remplazar */
/** 2do parametro : El texto NUEVO */

const remplazo = texto.replace('strings', 'STRINGS');
console.log(remplazo);

/** .split() */
/** Convierte una cadena de texto en un arreglo.
    se debe especificar donde cortar cada elemento.
 */
/** 1er parametro : el caracter que funcionara como separador. */

console.log(texto.split(' '));

/** .toUpperCase */
/** texto en mayuscula */

/** .toLowerCase */
/** texto en minusculas */






