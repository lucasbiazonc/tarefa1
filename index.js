const prompt = require('readline-sync');

//O inicio e onde eu criei as variavel pra colocar os números
let n1 = prompt.question('Digite o 1° número: ');
let n2 = prompt.question('Digite o 2° número: ');

//Crie variaveis constantes para fazer os calculos
const soma = n1 + n2;
const sub = n1 - n2;

//Criei as mensagens para poder falar no final os resultados
let mensagem = 'O resultado da soma é {soma}, e o resultado da subtração é {sub}'.replace('{soma}', soma) .replace('{sub}', sub);
//o replace foi usado para poder colocar os resultados dos calculos pois o ${} não estava funcionado

let msg2 = soma >=100? 'Sua soma é maior que 100': 'Sua soma é menor que 100';
//a msg2 e msg foram usadas para substituir o if e else e tornar mais rápido usando arrow
let msg = sub >=100? 'Sua subtração é maior que 100': 'Sua subtração é menor que 100';

//Os consoles para poder aparecer no final os resultados
console.log (mensagem);
console.log (msg2);
console.log (msg);


//Tarefa dos slides 1(compra)
console.log();
//indicar qual a ativadade
console.log('Atividade 2(compra)');
let nome =  prompt.question('Digite o seu nome: ');
let produto = "garrafas d'água";
let preço = 5.93;
let quantidade = 5;
let total = 29.65;
let msg3 = `Olá, ${nome}! Você comprou ${quantidade} ${produto} com cada uma custado R$${preço} dando no total R$${total}. `;
console.log(msg3);

console.log()
//Tarefa dos slides 1(Idade)
console.log('Atividade 2(Idade)')
let idade  =  prompt.question('Digite a sua idade: ');
let msg4 = idade >=18? `Ola ${nome}! Você é maior de idade, pois possui ${idade}.`: `Olá ${nome}! Você é menor de idade, pois possui ${idade}.`;
console.log(msg4);



