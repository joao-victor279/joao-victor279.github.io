/*

let a = 10
let b = 10

console.log(++a);
console.log(b++);
console.log(b);

let c = 10;
// c += b;
b = c;s


let a = 5;
let b = "5";

console.log(a == b);

console.log(a === b);

console.log(a != b);

console.log(a !== b)



---------+----------------------
    <    | Menor que
---------+----------------------
    >    | Maior que 
---------+----------------------
   <=    | Menor ou igual que
---------+----------------------
   >=    | Maior ou igual que
---------+----------------------
   ==    | Igual ao (compara valor)
---------+----------------------
   !=    | Diferente de

   ===  | Estritamente igual (compara tipo e valor)


let eleitor = 67
if (eleitor >= 16 && eleitor <= 80){
    console.log("Pode votar")
} else {
    console.log("Podi naum.")
}

*/

let idade = parseInt(prompt("Oie, quantos aninhos você tem? "))
if (idade >= 18){
    alert("Pode dirigir")
} else {
    alert("Podi naum.")
}