let nome = prompt("Digite seu nome:");

let numero_puro = prompt("Digite um número:");
let numeroConvertido = parseInt(prompt("Digite um número para ser convertido:"));

console.log("Nome: " + nome);
console.log("1° número: " + numero_puro + " - Tipo desse número: " + typeof numero_puro);
console.log("2° número: " + numeroConvertido + " - Tipo desse número: " + typeof numeroConvertido);

console.log(` Meu "nome" é ${nome}\n 1° Número: ${numero_puro} e o tipo dele é ${typeof numero_puro}\n 2° Número: ${numeroConvertido} e o tipo dele é ${typeof numeroConvertido}`);

alert(` Meu "nome" é ${nome}\n 1° Número: ${numero_puro} e o tipo dele é ${typeof numero_puro}\n 2° Número: ${numeroConvertido} e o tipo dele é ${typeof numeroConvertido}`)

document.write(`<p>Meu "nome" é ${nome}\n 1° Número: ${numero_puro} e o tipo dele é ${typeof numero_puro}\n 2° Número: ${numeroConvertido} e o tipo dele é ${typeof numeroConvertido}</p>`)