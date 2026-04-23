let form = document.getElementById("id_pizzaria");

form.addEventListener("submit", evento => {
    evento.preventDefault();

    let nome = document.getElementById("id_nome").value;
    let radio = document.querySelector('input[name="radio_t"]:checked').value;
    let massa = document.getElementById("id_massa").value;
    let endereco = document.getElementById("id_endereco").value;

let checkbox = document.querySelectorAll('input[name="check_ing"]')
let checks_selecionados = "";
for(let i = 0; i < checkbox.length; i++){
    console.log(checkbox[1]);
    if(checkbox[1].checked){
        checks_selecionados += `${checkbox[i].value} \n`;
    }
}

confirm(
`
CONFIRMAR PEDIDO?

Ingredientes: 
${checks_selecionados}

Tamanho: 
${radio}

Massa: 
${massa}

Endereço: 
${endereco}

`
)

let pedido = document.createElement("div");
pedido.setAttribute("class", ("pedido"));
pedido.innerHTML +=
`<p>
PEDIDO: <br/>
Nome: ${nome}
<br/> Ingredientes: 
${checks_selecionados}
<br/> Tamanho: ${radio}
<br/>Massa: ${massa}
<br/>Endereço: ${endereco}
</p><br/>`
document.body.appendChild(pedido);
});