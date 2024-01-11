
let votos = [];                  // Array votos

function votar(candidato){      //Funcion: votar ( Parametro: candidato )
    votos.push(candidato);      //Almacena (candidato) al final del Array
};

function contarVotos() {
    let conteo ={};             // Objeto conteo
    for(let i = 0; i < votos.length; i++){
        let voto = votos[i];
        if(conteo[voto] === undefined){
            conteo[voto]=1;
        }else{
            conteo[voto]++;
        }
    }
    return conteo;      // retorna el valor de conteo
};

votar("Candidato 1");       //voto para el cantidato, se llama a la funcion votar y se entrega el argumento
votar("Candidato 2");       //voto para el cantidato, se llama a la funcion votar y se entrega el argumento
votar("Candidato 3");       //voto para el cantidato, se llama a la funcion votar y se entrega el argumento
votar("Candidato 3");       //voto para el cantidato, se llama a la funcion votar y se entrega el argumento
votar("Candidato 3");       //voto para el cantidato, se llama a la funcion votar y se entrega el argumento
votar("Candidato 2");       //voto para el cantidato, se llama a la funcion votar y se entrega el argumento

console.log(contarVotos()); //se muestra en consola los resultados de cada candidato
