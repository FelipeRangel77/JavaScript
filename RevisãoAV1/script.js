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

// distancia = prompt("digite a distancia em km")

// switch (true) {
//     case distancia <=100:
//     custo = distancia * 10;
//     document.write(`<br>O custo de envio é R$${custo.toFixed(2)}`);
//     break;
//     case distancia > 100 && distancia <= 300:
//     custo = distancia * 8;
//     document.write(`<br>O custo de envio é R$${custo.toFixed(2)}`);
//     break;
//     case distancia > 300:
//     custo = distancia * 6;
//     document.write(`<br>O custo de envio é R$${custo.toFixed(2)}`);
//     break;
// }
// Questão 1
// var cores = ["Vermelho","Azul", "Verde"]
// var removida = cores.splice(0, 1, "amarelo")
// console.log("Cor Removida", removida)

// questão final AV1

// var frase = prompt("Digite uma frase:")
// console.log(contarVogais(frase))

// function contarVogais(frase) {
//     const vogais = ['a','e','i','o','u','A','E','I','O','U']
//     if (frase.length == 0) {
//         return 0
//     } else {
//         var qtdVogais = 0
//         for (let i = 0; i < frase.length; i++) {
//             if(vogais.includes(frase.charAt(i))) {
//                 qtdVogais++
//             }
//         }
//         return qtdVogais
//     }
// }

// Questão 1 Rev AV1

// var mediaAltura = 1.70;
// var mediaPeso = 70;
// var imcMedio = mediaPeso / (mediaAltura*mediaAltura);

// Questão 2 Rev AV2

// 20 cigarros em uma carteira

// var anos = prompt("Quantos anos você fuma?")
// var numPorDia = prompt("Quantos cigarros você fuma por dia?")
// var precoCarteira = prompt("preço da carteira de cigarros")

// var cigarroPorAno = numPorDia * 365;
// var qtdCigarros = cigarroPorAno * anos;

// var precoPorCigarro = precoCarteira / 20;
// var custoTotal = precoPorCigarro * qtdCigarros;

// document.write(`tem um custo total de R$${custoTotal}`)

// Questão 3 Rev AV1

// var idadeAmalia = prompt("digite a idade de Amalia")
// var idadeJoaquim = prompt("Digite a idade de joaquim")

// if (idadeAmalia > idadeJoaquim){
//     document.write("Amália é mais velha do que Joaquim!");
// }else{
//     document.write("Joaquim é mais velho que Amália")
// }

// Questão 4 Rev AV1

// var vida = 100
// var dano = 25

function isDeath(vida, dano) {
    vida -= dano
    if (vida <= 0) {
        return true;
    } else {
        return false;
    }
}

document.write(`<br>Morreu? ${isDeath(vida,dano)}`);