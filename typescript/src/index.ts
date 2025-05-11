// const message:string = "Olá , mundo"
// console.log(message)
// const idade:number=18
// console.log(idade)

// criar variavel do tipo string 

const user:string="joao"
console.log(`Usuário: ${user}`)

// Criar variável do tipo número
const idade: number = 18;
console.log(`Idade: ${idade}`)

// criar variavel do tipo número
const situation: boolean = true;
console.log(`Situação: ${situation}`)

// criar variavel do tipo array de string 
const courses: string[] = ["Curso de React", "Curso de Node.js"];
console.log(`Cursos: ${courses}`)

// criar variavel do tipo array de numero
const amount: number[] = [5, 2, 7]
console.log(`Quantidade: ${amount}`)

// Criar variável do tipo "tuple" array com tipos diferentes
var person: [string, number, boolean]
person = ["Cesar", 18, true];
console.log(`Usuário: ${person[0]}`)
console.log(`Idade: ${person[1]}`)
console.log(`Situação: ${person[2]}`)

// Criar variável do tipo enum. Representa um conjunto de valores nomeados.
enum DayOfTheWeek {
    Sunday = 1,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}
let dia: DayOfTheWeek;
console.log(`Número que representa domingo: ${DayOfTheWeek.Sunday}`);
console.log(`Número que representa sexta: ${DayOfTheWeek.Friday}`);


// Criar variável do tipo object
interface Client {
    name: string;
    amount: number;
}

let client: Client = {
    name: "Cesar",
    amount: 7
};

console.log(`Nome do cliente: ${client.name}`); 
console.log(`Quantidade de compras do cliente: ${client.amount}`); 

// Criar variável utilizando union indicando um ou mais tipo
const value: string | boolean = "Cesar";
console.log(`Valor pode ser string ou boolean: ${value}`);