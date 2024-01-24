const usuarios = {
    nombre : 'Carlos',
    edad : 40,
    amigos : ['Juan','Pedro','Luis','Ana','Maria','Paula'],
    
};

/** Metodos Propios */
/** Los objetos pueden tener metodos personalizados. */

const usuario = {
    nombre : 'Carlos',
    edad : 40,
    amigos : ['Juan','Pedro','Luis','Ana','Maria','Paula','Camila','Andres'],
    saludo : ()=>{
        console.log('Prueba de metodo personalizado.');
    },
};

usuario.saludo();


/** Object.Keys() */
/** Devuelve un arreglo con las llaves (keys) del objeto. */

const resultado = Object.keys(usuario);  //retorna el arreglo de usuario.
console.log(resultado);                 // Se muestra el resultado por medio de la variable.

/** Object.Values() */
/** Devuelve un arreglo con los valores (values) del objeto. */

const resultados2 = Object.values(usuario); //retorna los valores.
console.log(resultados2);

/** Object.entries() */
/** Devuelve un arreglo con las parejas de clave y valor del objeto */

const resultado3 = Object.entries(usuario);
console.log(resultado3);
console.log(`El objeto tiene ${resultado3.length} propiedades.`);


















