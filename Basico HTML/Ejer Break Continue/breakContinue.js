const nombres = ['Andres','Alba','Alberto','Anibal','Adriana','Braulio','Andrea','Arturo','Angel'];
console.log(nombres);

for(let i = 0; i < nombres.length; i++){
    if(nombres[i][0]!=='A'){
        console.log('Hay un nombre que no empieza por A');
        console.log(nombres[i] + ' No empieza por A');
        break;      // Para la ejecucion del ciclo.
    };
    console.log(nombres[i]);
};

/** Continue */
/** La sentencia nos sirve para saltar a la siguiente iteracion.  */


const invitados = ['Andres','Favio','Alba','Laura','Alberto','Maria','Anibal','Camila','Adriana','Braulio','Andrea','Arturo','Angel','Daniel','Miguel','Juan','Pedro'];
console.log('Lista de personal con acceso: ');
for(let i=0; i < invitados.length; i++){
    if(invitados[i] === 'Daniel'){      // Si esta este valor
        continue;                       // Salte ese valor y siga
    };
    console.log(invitados[i]);       
};
console.log(`Total de invitados ${invitados.length}`);