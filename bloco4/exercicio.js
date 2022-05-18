let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };


  //---------------------------Primeiro exercicio---------------------------
  console.log("---------------------------Primeiro exercicio---------------------------");
  console.log("Bem-vinda, " + info.personagem);


    //---------------------------Segundo exercicio---------------------------
    console.log("---------------------------Segundo exercicio---------------------------");

info["Recorrente"] = "Sim";

console.log(info);

    //---------------------------Terceiro exercicio---------------------------
    console.log("---------------------------Terceiro exercicio---------------------------");

for (let key in info){
    console.log(key);
}

    //---------------------------Quarto exercicio---------------------------
    console.log("---------------------------Quarto exercicio---------------------------");

for(let key in info){
    console.log(info[key]);
}

    //---------------------------Quinto exercicio---------------------------
    console.log("---------------------------Quinto exercicio---------------------------");

let info2 = {
    personagem: "Tio Patinias",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    Recorrente: "Sim"
};


    console.log(info.personagem + " e " + info2.personagem);
    console.log(info.origem + " e " + info2.origem);
    console.log(info.nota + " e " + info2.nota);
    if (info.Recorrente === info2.Recorrente) {
        console.log("Ambos recorrentes");        
    }

    //---------------------------Sexto exercicio---------------------------
    console.log("---------------------------Sexto exercicio---------------------------");

    let leitor = {
        nome: 'Julia',
        sobrenome: 'Pessoa',
        idade: 21,
        livrosFavoritos: 
          {
            titulo: "O Pior Dia de Todos",
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
          },
        
      };


console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama " + leitor.livrosFavoritos.titulo);


   //---------------------------Setimo exercicio---------------------------
   console.log("---------------------------Setimo exercicio---------------------------");

leitor.livrosFavoritos.push = {
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
  };

   console.log(leitor.livrosFavoritos);


   //---------------------------Oitavo exercicio---------------------------
   console.log("---------------------------Oitavo exercicio---------------------------");

   let x = 0;

for(let key in leitor.livrosFavoritos){

    if(key === "titulo"){
         
        x = x + 1;
    }
    console.log(key);
    
}
console.log(leitor.nome + "tem " + x + " livros favoritos");