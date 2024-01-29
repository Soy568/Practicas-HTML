let contador = 0;               // declaramos e inicializamos
while(contador <= 10){          // mientras contador sea menor o igual a 10
    console.log(contador);      // 0 1 2 ... 10
    contador++;                 // se incrementa contador en 1
};

let i = 100;
do{
    console.log(i); // Se ejecuta una vez
    i++;            // Se incrementa en 1
}while(i<=10);      // Como no cumple la condicion ya no se ejecutara