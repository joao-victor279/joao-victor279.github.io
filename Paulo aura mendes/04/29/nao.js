//declaração de função sem retorno (VOID)
function mensagem(parametro, parametro2){
    console.log(`Olá, ${parametro}! 
        Tu é um miserável, ${parametro2}`);
};

//função com retorno
function soma(a, b){
    return b + a;
}

//chamada da função
mensagem("mundo", "roberto")
console.log(soma(1, 3));

mensagem("Karlos", soma(4, 3))

//Declaração de função na variável
//Expressão de função (função anônima de atribuída a uma variável)

let dobro = function(num){
    return num * 2;
}

//Com arrow function ()=>{}
let dobroModerno = (num) => {
    return num * 2
}

//Modo simplificado com arrow function
let dobroSimples = num => num * 2

// Com múltiplos parâmetros
let soma2 = (a, b) => a + b;

console.log(dobro(3));
console.log(dobroModerno(4));
console.log(dobroSimples(2));
console.log(soma2(2, 3));

//