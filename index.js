//O inicio e onde eu criei as variavel pra colocar os números
let n1 = 56;
let n2 = 98;

//Crie variaveis constantes para fazer os calculos
const soma = n1 + n2;
const sub = n1 - n2

//Criei as mensagens para poder falar no final os resultados
let mensagem = 'O resultado da soma é {soma}, e o resultado da subtração é {sub}'.replace('{soma}', soma) .replace('{sub}', sub);
//o replace foi usado para poder colocar os resultados dos calculos pois o ${} não estava funcionado

let msg2 = soma >=100? 'Sua soma é maior que 100': 'Sua soma é menor que 100';
//a msg2 e msg foram usadas para substituir o if e else e tornar mais rápido usando arrow
let msg = soma >=100? 'Sua subtração é maior que 100': 'Sua subtração é menor que 100';

//Os consoles para poder aparecer no final os resultados
console.log (mensagem);
console.log (msg2);
console.log (msg);