
let biblioteca = [                                                                          //Array de biblioteca
    {titulo : "Maria ", autor: "Jorge Isaacs ", añoPublicacion: 1867  , prestado: false},
    {titulo : "La Perra ", autor : "Pilar Quintana ", añoPublicacion: 2017  , prestado : true},
    {titulo : "El ruido de las cosas al caer ", autor : "Juan Gabriel vasquez ", añoPublicacion: 2011 , prestado : false},
    {titulo : "Delirio ", autor : "Laura Restrepo ", añoPublicacion: 2004 , prestado : true},
    {titulo : "Satanas ", autor : "Mario Mendoza ", añoPublicacion: 2002 , prestado : false},
];

function addDirLibro (titulo, autor, añoPublicacion, prestado) {            //funcion para añadir un libro
    const newLibro = {
                        titulo,
                        autor,
                        añoPublicacion,
                        prestado 
    };
    biblioteca.push(newLibro);                                      //Agrega al final del array
};

function buscarLibro (titulo){                  // funcion permite buscar un libro por su titulo 
    for(let libro of biblioteca){               // para un libro de la biblioteca 
        if(libro.titulo.toLowerCase()===titulo.toLowerCase()){      //si el libro (metodo para convertir a minusculas) === ( )
            return libro;                                           // retornamos el libro
        };
    };
    return null;
};

function prestarDevolverLibro (titulo){                 //funcion para prestar o devolver un libro
    let libro = buscarLibro(titulo);
    if(libro){
        libro.prestado = !libro.prestado;               // si libro prestado es = No prestado 
        return libro;                                   // retornamos libro
    }else{
        return "El libro no se en cuentra en la biblioteca"
    };
};


addDirLibro("Maria", "Jorge Isaacs", 1867, false);
console.log(biblioteca);

console.log(buscarLibro("Maria"));

console.log(prestarDevolverLibro("Maria"));

console.log(prestarDevolverLibro("Satanas"));

