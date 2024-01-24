const nombres = ['Ana','Violeta','Paola','Maria','Sonia','Paula','Yuli','Andrea','Leydi','Sara','Alba','Camila','Ana','Lina','Sandra','Yara','Kata','Viviana'];
console.log(nombres);

/* ********** .indexOf() ********** */

console.log(nombres.indexOf('Paula'));  //Muestra el index del elemento.
console.log(nombres.indexOf('Alba'));   //Muestra -1 porque no existe el elemento.

console.log(nombres.lastIndexOf('Ana'));    //hay 2 Ana mostrara la ultima posicion del elemento.

/* ********** .forEach() ********** */
/** permite ejecutar una funcion por cada elemento */

nombres.forEach(()=>{console.log(`Hola nombres`)}); //Se ejecutara la cantidad de elementos existentes.

nombres.forEach((nombre,index)=>{                //permite ejecutar una funcion por cada elemento.
    console.log(`Como estas ${nombre} (${index})`);   //Recorremos el arreglo
});

/* ********** .find() ********** */
/** permite recorrer el arreglo y devuelve el PRIMER elemento que retornemos */

nombres.find((nombre)=>{
    console.log(nombre);    //muestra el valor de cada elemento
    return;              //retorna el valor de cada elemento.
});

const resultado = nombres.find((nombre)=>{
    console.log(nombre[0]);     //el nombre lo toma como un arreglo y toma la primer letra
    return;
});

const resultado2 = nombres.find((nombre)=>{
    if(nombre[0] === 'K'){    //si nombre inicia por ' ' osea la primer letra
    return nombre;             //retorne el nombre
    }               
});
console.log(resultado2);

/* ********** .map() ********** */
/** permite ejecutar una funcion por cada elemento y crear un nuevo arreglo
 * en base a los resultados de esa funcion
 */

const nombreMinusculas = nombres.map((nombre)=> nombre.toLowerCase());
console.log(nombreMinusculas);

const nombreMayusculas = nombres.map((nombre)=> nombre.toUpperCase());
console.log(nombreMayusculas);

/* ********** .filter() ********** */
/** permite ejecutar una funcion por cada elemento y crear un nuevo arreglo
 * en base a los resultados de esa funcion y que cumplan con una condicion.
 */

const nombresCuatroLetras = nombres.filter((nombre)=>{
    if(nombre.length === 4){        //si nombre tiene 4 letras
        return nombre;              //retorne el nombre de 4 letras
    };    
});
console.log(nombresCuatroLetras);

/* ********** .includes() ********** */
/**permite saber si el arreglo contine un elemento especifico */

console.log(nombres.includes('Alba'));      //devuelve true
console.log(nombres.includes('Sami'));      //devuelve false

/* ********** .every() ********** */
/**permite ejecutar un concicional sobre cada elemento
 * y nos devuelve true si TODOS los elementos cumplieron la condicion */

const nombresValidos = nombres.every((nombre)=>{
    if(typeof nombre === 'string'){     //si el tipo de nombre es string
        return true;
    } else {
        return false;
    };
});
console.log('Todos los nombres son Validos ? : '+nombresValidos);

/* ********** .some() ********** */
/**permite ejecutar un concicional sobre cada elemento
 * y nos devuelve true si ALGUN elemento cumplio la condicion */

const nombresValidos2 = nombres.some((nombre)=>{
    if(typeof nombre !== 'string'){     //si el tipo de nombre es string
        return true;
    } else {
        return false;
    };
});
console.log('El arreglo es invalido ? : '+nombresValidos2);