const lenguajesProgramacion =['Sql','C','Go','Php','Pascal',' C++','Ruby',' Java',' Python',' JavaScript',' C#'];

console.log(lenguajesProgramacion.length);      //Permite ver la cantidad de elementos del arreglo.

document.body.innerHTML=lenguajesProgramacion.toString();     //permite transformar un arreglo a una cadena de texto.

console.log(lenguajesProgramacion.join('/'));   //permite transformar un arreglo a una cadena de texto y separar cada elemento.

console.log(lenguajesProgramacion.sort());      //permite ordenar un arreglo en orden alfabetico.

const claves =[4567,7974,3199,6549,3149,1946,9458,6219,3210,5465,8576,3172];

console.log(claves.sort());
console.log(claves.length);
document.body.innerHTML = claves.toString();
console.log(claves.reverse());

const arregloNew = lenguajesProgramacion.concat(claves);    //concatena 2 Arreglos en 1 nuevo.
console.log(arregloNew);

console.log(arregloNew.push(9999));   //agrega elemento al final del arreglo.
console.log(arregloNew);              //Ver el arreglo actual.
console.log(arregloNew.push('B'));    //Agregamos elemento al final del arreglo.
console.log(arregloNew);              //Ver el arreglo actual.

console.log(arregloNew.pop());        //Eliminar ultimo elemento.
console.log(arregloNew);              //Ver el arreglo actual.

const elementoEliminado = arregloNew.pop(); //Se crea una variable y se le asigna el valor del elemento eliminado.
console.log(elementoEliminado);             //Se muestra el valor de la variable o elemento eliminado.
console.log(arregloNew);                //Ver el arreglo actual.

console.log(arregloNew.unshift('B'));   //Se agrega un elemento al inicio del arreglo.
console.log(arregloNew);                //Ver el arreglo actual.
console.log(arregloNew.unshift(9999));  //Se agrega un nuevo elemento.
console.log(arregloNew);                //Ver el arreglo actual.

console.log(arregloNew.length);         //Cantidad de elementos del arreglo.

const elementoEliminadoInicio = arregloNew.shift(); //Se crea un variable y se le asigan el elemento eliminado.
console.log(elementoEliminadoInicio);   //Ver el elemento eliminado.
console.log(arregloNew);

const amigos = ['Juan','Pedro','Luis','Mario']; //Arreglo amigos
console.log(amigos);        
amigos.splice(1,2,'Carlos','Laura','Diana');    //permite insertar elementos donde queramos.
        //    ^-------- Se inicia desde este elemento.
        //      ^------ Cantidad de elementos a eliminar.
        //         ^--- Elementos a insertar.
console.log(amigos);

const carros = ['Honda','Ferrary','Mazda','Chevrolete'];
console.log(carros);
carros.splice(2,0,'Toyota','Ford','Alpine','Jaguar','Cupra','Volkswagen','Porsche');
console.log(carros);

const carrosFavoritos = carros.slice(3,7);      //Permite copiar elementos de un arreglo a otro arreglo.
                               //    ^-------- Se inicia desde este elemento.
                               //      ^------ Hasta ANTES de esteelemento a copiar.
console.log(carrosFavoritos);








