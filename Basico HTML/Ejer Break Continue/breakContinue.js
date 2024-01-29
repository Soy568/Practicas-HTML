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

