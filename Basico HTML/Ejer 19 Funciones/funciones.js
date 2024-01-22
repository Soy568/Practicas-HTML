
function SemaforoRojo(){
    document.getElementById('Semaforo').src='img/SemaforoRojo.png'
    console.log("No puede pasar");
};
function SemaforoAmarillo() {
    document.getElementById('Semaforo').src='img/SemaforoAmarillo.png'
    console.log("Detener");
};
function SemaforoVerde(){
    document.getElementById('Semaforo').src='img/SemaforoVerde.png'
    console.log("Siga");
};




function Semaforo(color) {
    switch(color){
        case 'SemaforoRojo' :
            console.log("No puede pasar");
        break;
        case 'SemaforoAmarillo':
            console.log("Detener");
            break;
        case 'SemaforoVerde':
            console.log("Siga");
        default:
            console.log("Error Error");
    };
};
Semaforo("SemaforoRojo");