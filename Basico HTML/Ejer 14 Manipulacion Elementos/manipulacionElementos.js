
let title = document.getElementById("title");               //Se usa el metodo .getElementById para acceder al ID.
console.log(title);

let content = document.getElementsByClassName('content');   //Se usa el metodo .getElementsByClassName para acceder a la CLASE.
console.log(content);



title.textContent = 'lola'; //Cambia el contenido del ID.

title.style.color = "red";      //Cambia el estilo-color del ID.

title.classList.add("big-title");       // cambio el tamaño