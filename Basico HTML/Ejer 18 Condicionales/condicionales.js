const usuario = {
    edad : 27,
    pais : 'Japon',
    ticket : true,
};

if(usuario.edad > 18){
    console.log('El usuario puede ingresar, es mayor de edad.');
}else {
    console.log('El usuario es menor de edad.');
}

if(usuario.edad > 18 && usuario.ticket){
    console.log('El usuario puede ingresar, es mayor de edad y tiene ticket');
}
/* if else if */

if(usuario.pais === 'Canada'){
    console.log('El usuario es Canadiense.');
} else if(usuario.pais === 'Uruguay'){
    console.log('El usuario es Uruguayo.');
} else if(usuario.pais === 'Colombia'){
    console.log('El usuario es Colombiano.');
} else{
    console.log('El usuario es de otro Pais.');
}


switch(usuario.pais){
    case 'Canada' :
        console.log('El usuario es Canadiense');
        break;
    case 'Uruguay' : 
        console.log('El usuario es Uruguayo.');
        break;
    case 'Colombia':
        console.log('El usuario es Colombiano.');
        break;
    default :
        console.log('El usuario es de otro Pais.');
}