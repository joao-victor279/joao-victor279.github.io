let form = document.querySelector("#calc_imc")

form.addEventListener(("submit"), (e)=>{
    e.preventDefault();
    console.log("Aurou")

    let nome = document.querySelector("#id_nome").value;

    let peso = document.getElementById("id_peso").value

    let altura = document.getElementById("id_altura").value
    altura = Number(altura.replace(',','.'));

    let resultado = document.getElementById("id_result");
    
   

    let imc = peso/(altura*altura);
    if(imc < 18.5){
        classificao = ("Abaixo do peso")
    }
    else if(imc >= 18.5 && imc <= 24.9){
        classificao = ("Peso normal")
    }
    else if(imc >= 25 && imc <= 29.9){
        classificao = ("Excesso de peso")
    }
    else if(imc >= 30 && imc <= 34.9){
        classificao = ("Obesidade classe I")
    }
    else if(imc >= 35 && imc <= 39.9){
        classificao = ("Obesidade classe II")
    }
    else if(imc >= 40){
        classificao = ("roan")
    } 

    resultado.innerHTML +=
    `<p>Seu nome é ${nome}<br/> Seu IMC é: ${imc.toFixed(1)}<br/> Sua classificação é: ${classificao} </p><br/>`;

    });