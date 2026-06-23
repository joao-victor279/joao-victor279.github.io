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

//Data

//Atual:
let data_atual = new Date()
console.log(data_atual);

//Data especifica:
let natal = new Date(2025, 11, 25); //0=janeiro \ 11=dezembro
console.log(natal)

//Componentes:
console.log(data_atual.getFullYear()); // Ano
console.log(data_atual.getMonth()); // Mês (0-11)
console.log(data_atual.getDate()); // Dia do mês
console.log(data_atual.getDay()); // Dia da semana (0-6, 0 = Domingo)
console.log(data_atual.getHours()); // Hora
console.log(data_atual.getMinutes()); // Minutos
console.log(data_atual.getSeconds()); // Segundos