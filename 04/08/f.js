let form = document.getElementById("id_formulario");

form.addEventListener("submit", evento => {
    evento.preventDefault();
    console.log("teste")

        let nome = document.getElementById("id_nome").value;
        let email = document.getElementById("id_email").value;
        let idade = document.getElementById("id_idade").value;
        let radio = document.querySelector('input[name="radio-s"]:checked').value;
        let hobbie = document.getElementById("id_hobbie").value;

    let checkbox = document.querySelectorAll('input[name="checkbox_tech"]')
    let checks_selecionados = "";
    for(let i = 0 ; i < checkbox.length; i++){
        console.log(checkbox[i]);
        if(checkbox[i].checked){
            checks_selecionados += `${checkbox[i].value} `;  
        }
    }


    let resultado = document.createElement("div");
    resultado.setAttribute("class", ("result"));
    resultado.innerHTML +=
    `<p>
    NOME: ${nome}<br>
    E-MAIL: ${email}<br>
    IDADE: ${idade}<br>
    RADIO: ${radio}<br>
    CHECKBOX: ${checks_selecionados}<br>
    HOBBIE: ${hobbie}
    </p><br/>`
    document.body.appendChild(resultado);

});