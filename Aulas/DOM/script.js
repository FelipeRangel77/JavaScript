// Questão 1
var cores = ["Vermelho","Azul", "Verde"]
var removida = cores.splice(0, 1, "amarelo")
console.log("Cor Removida", removida)

// questão final AV1

var frase = prompt("Digite uma frase:")
console.log(contarVogais(frase))

function contarVogais(frase) {
    const vogais = ['a','e','i','o','u','A','E','I','O','U']
    if (frase.length == 0) {
        return 0
    } else {
        var qtdVogais = 0
        for (let i = 0; i < frase.length; i++) {
            if(vogais.includes(frase.charAt(i))) {
                qtdVogais++
            }
        }
        return qtdVogais
    }
}