let form = document.querySelector("#autoescola");

form.addEventListener("submit", (e)=> {
    e.preventDefault();

    let idade = document.querySelector("#id_idade").value;

    let resultado = document.getElementById("id_result");

    if(idade >= 18 && idade <= 49){
        renovacao = "Apto pra início. Sua renovação da habilitação acontecerá a cada 10 anos."
    }
     else if(idade > 50 && idade < 69){
         renovacao = "Apto pra início. Sua renovação da habilitação acontecerá a cada 5 anos."
     }
     else if(idade > 70){
         renovacao = "Apto pra início. Sua renovação da habilitação acontecerá a cada 3 anos."
     }
     else if(idade < 18 && idade >= 100){
         renovacao = "Inapto para início"
     }
  
     resultado.innerHTML +=
     `<p>${renovacao}</p><br/>`

    });