let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


//--------------------------- Primeiro exercico ---------------------------

console.log("--------------------------- Primeiro exercico ---------------------------");

for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index]);
}


//--------------------------- Segundo exercico ---------------------------

console.log("--------------------------- Segundo exercico ---------------------------");

let soma = 0;

for (let index = 0; index < numbers.length; index++) {

    soma = soma + numbers[index];
    console.log(soma);

}

//--------------------------- Terceiro exercico ---------------------------

console.log("--------------------------- Terceiro exercico ---------------------------");
soma = 0

for (let index = 0; index < numbers.length; index++) {

    soma = soma + numbers[index];
    media = soma/numbers.length;
}
    console.log(media);


    //--------------------------- Quarto exercico ---------------------------

console.log("--------------------------- Quarto exercico ---------------------------");


for (let index = 0; index < numbers.length; index++) {

    soma = soma + numbers[index];
    media = soma/numbers.length;
}
    if (media > 20) {
        console.log("Valor maior que 20");
    }
    
    if (media < 20){
        console.log("Valor menor que 20");
    }


    //--------------------------- Quinto exercico ---------------------------

console.log("--------------------------- Quinto exercico ---------------------------");

soma = 0;

for (let index = 0; index < numbers.length; index++) {

    if (soma < numbers[index]) {
        soma = numbers[index];
        
    }
}
console.log(soma);


//--------------------------- Sexto exercico ---------------------------

console.log("--------------------------- Sexto exercico ---------------------------");

soma = 0;

for (let index = 0; index < numbers.length; index++) {
    
    if (numbers[index] % 2 === 1) {
        soma = soma + 1;

    }
}

console.log("São " + soma + " numeros impares");



//--------------------------- Sétimo exercico ---------------------------

console.log("--------------------------- Sétimo exercico ---------------------------");

soma = 999999;

for (let index = 0; index < numbers.length; index++) {
    
    if (soma > numbers[index]) {
        soma = numbers[index];
        
    }
}
console.log(soma);


//--------------------------- Oitavo exercico ---------------------------

console.log("--------------------------- Oitavo exercico ---------------------------");

soma = 0;
let x=[];


for (let index = 0; index <= 24; index++) {
    
   x.push(x.length + 1)

}
console.log(x);

//--------------------------- Novo exercico ---------------------------

console.log("--------------------------- Nono exercico ---------------------------");

soma = 0;
x = [];

for (let index = 0; index <= 24; index++) {
    
   x.push(x.length + 1)

}

for (let index = 0; index <= 24; index++) {
    
    console.log(x[index] / 2);
 
 }