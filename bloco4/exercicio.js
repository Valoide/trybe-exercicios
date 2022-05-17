let resultado = 1, aux;
let number = 10;

aux = number;

// -------------------- Primeiro exercio --------------------
console.log("-------------------- Primeiro exercio --------------------");
for (let index = 1; index <= number; index++) {
    
    resultado = aux * resultado;  

    aux = aux - 1;
}
console.log("Resoltado fial: "+resultado);

// -------------------- Segundo exercio --------------------
console.log("-------------------- Segundo exercio --------------------");


let word = 'tryber';


for (let index = 0; index < word.length; index++) {
    
    let result = word.length; 
    console.log("A palavra virou: " + result);
}

