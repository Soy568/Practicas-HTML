/** Ciclo forEach */
/** Metodo de los arreglos usado para recorrer los elementos */

const amigos = ['Juan','Alejandro','Cesar','Manuel'];
amigos.forEach((amigo,index)=> console.log(`El amigo # ${index} es : ${amigo}`));


/** Ciclo for in */
/** Permite recorrer las propiedades de un objeto */

const persona = {
    nombre : 'Carlos',
    edad : 40,
    correo : 'Carlos@correo.com',
};
console.log(persona);


for(propiedad in persona){
    persona[propiedad] = '';
};
console.log(persona);


/** Ciclo for of */
/** permite recorrer los valores de un objeto iterable.
 *  Se puede recorrer = Arreglos, Cadenas de texto, Mapas y listas de Nodos, etc.
 */

const etiquetas = document.head.children;
console.log(etiquetas);

for(elemento of etiquetas){
    console.log(elemento);
};

[...etiquetas].forEach((elemento)=>{        // convierto en arreglo 
    console.log(elemento);
});