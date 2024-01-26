
/** Operador Spread */
/** Permite tomar los elementos de un arreglo u objeto 
 *  y expandirlos en otro sitio.
 */

const frutas = ['Manzana','Pera','Fresa','Durazno','Banano','Melon'];
console.log(frutas);

const comidaFavorita = ['Pizza','Pasta','Arroz','Empanadas'];
console.log(comidaFavorita);

//Expande el arreglo de frutas y el arreglo de comidasFavoritas en el menu.
//ventajas si adiciono un nuevo elemento en el arreglo principal el nuevo tambien lo tendra

const menu = [...frutas,...comidaFavorita];   
console.log(menu);


const usuarioLogin = {    
    password : '3456',
    correo : 'juan@correo.com',
};

const usuario = {
    nombre : 'Juan',
    edad : 40,
    ...usuarioLogin,        //Expando los datos de usuarioLogin
};

console.log(usuario);

/** Parametros Rest */
/** Permite que una funcion contenga un numero indefinido de argumentos.
 *  Los argumentos extras que encuentre los convierte en un arreglo.
 */

const registroUsuarios = (nombre, correo, ...datosAdicionales)=>{
    console.log(nombre, correo, datosAdicionales);
};

registroUsuarios('Carlos','carlos@correo.com');
registroUsuarios('Juan','Juan@correo.com','28','Colombia');


/** Destructuracion de Objetos */
/** Nos permite obtener elementos o propiedades de un arreglo u objeto y guardalos en una variable */

const [primera,segunda,tercera] = frutas;   //destructuracion de frutas

console.log(segunda); //muestra el valor que contiene la variable.

const {nombre,correo} = usuario;        //destructuracion de usuario.
console.log(nombre,correo);

const mostrarEdad = (nombre, edad)=>{           //destructuracion de una funcion
    console.log(`${nombre} tiene ${edad} años`);
};
mostrarEdad(usuario.nombre,usuario.edad );

const mostrarEdad2 = ({nombre, edad})=>{           //destructuracion de una funcion
    console.log(`${nombre} tiene ${edad} años`);
};
mostrarEdad2(usuario);







