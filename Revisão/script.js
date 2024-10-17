// Questão 1) a
//*splice()- 1º valor: posição, 2º valor: quantidade de elementos excluidos, 3º valor: novos elementos

// Questão 2)a

// Questão 3)c

// Questão 4)numero.push(8)

// Questão 5)c

// Questão 6)array.unshift()

// Questão 7)b

// Questão 8)d

// Questão 9)

distancia = prompt("digite a distancia em km")

switch (true) {
    case distancia <=100:
    custo = distancia * 10;
    document.write(`<br>O custo de envio é R$${custo.toFixed(2)}`);
    break;
    case distancia > 100 && distancia <= 300:
    custo = distancia * 8;
    document.write(`<br>O custo de envio é R$${custo.toFixed(2)}`);
    break;
    case distancia > 300:
    custo = distancia * 6;
    document.write(`<br>O custo de envio é R$${custo.toFixed(2)}`);
    break;
}






















// distancia = prompt("Qual a distancia em km: ");
// switch (true) {
//     case distancia <= 100:
//         custo = distancia * 10;
//         document.write(`<br>O custo de envio é R$${custo.toFixed(2)}`);
//         break;
//     case distancia > 100 && distancia <= 300:
//         custo = distancia * 8;
//         document.write(`<br>O custo de envio é R$${custo.toFixed(2)}`);
//         break;
//     case distancia > 300:
//         custo = distancia * 6;
//         document.write(`<br>O custo de envio é R$${custo.toFixed(2)}`);
//         break;
// }