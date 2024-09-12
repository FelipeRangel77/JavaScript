// // metodo construtor - new Array()------------------

// var a = new Array()
// document.write(`<br> ${a}`)

// var b = new Array (true, 1,2,3,4, new Array(1,2,3,), 'a')
// document.write(`<br> ${b}`)
// document.write(`<br> ${b[2]}`)
// document.write(`<br> ${b[5][1]}`)
// document.write(`<br> ${b[5][2]}`)

// //length - verifica o tamanho do Array------------

// document.write(`<br> o tamanho do array é ${b.length}`)

// //indexOf() - indentifica a posição do elemento solicitado do vetor --------------------

// document.write(`<br> A posição do elemento "a" encontra-se na posição: ${b.indexOf('a')}`)

// // lastindexOf() - ultima ocorrencia do elemento solicitado no vetor -------------------------

// document.write(`<br>O elemento "a" foi visto por ultimo na posição: ${b.lastIndexOf('a')}`)

// Método literal - []----------------------------------------------

// var c = []
// document.write(`<br> ${c}`)
// document.write(`<br> O tamano do array é ${c.length}`)

// var d = [true, 1,2,3,4,[1,2,3],'a','a']
// document.write(`<br>${d}`)
// document.write(`<br>${d[0]}`)
// document.write(`<br>${d[5][0]}`)

// // Valores Externos -----------------------------------------------

// var nota = []

// for(let i = 0; i < 3; i++){
//     nota[i] = prompt('digite uma nota:')
// }
// document.write(`<br> As notas são: ${nota}`)

// String ------------------------------------------------------

// let nome = 'Thereza'
// document.write(`<br> O tamanho do array é ${nome.length}`)
// document.write(`<br> A ultima ocorrencia do "e" foi na posição ${nome.lastIndexOf('e')}`)

// var e = [1,2,3,4]
// e[4] = 'novo valor'
// document.write(`<br> ${e}`)

// // ou ----------------------

// e[e.length] = 'valor novo'
// document.write(`<br>${e}`)

// var pessoas = ['Ana','Liz','Eva','CLotilde','Gertrudes','Clebinha']

// for(let i = 0; i < pessoas.length; i++){
//     document.write(`<br> nome: ${pessoas[i]}`)
// }

// // Função de ordenação ---------------------------

// document.write(`<br>${pessoas.reverse()}`)

//  // Sort() - organiza o array em ordem alfabetica -----------

//  document.write(`<br>A ordem alfabetica do array é ${pessoas.sort()}`)
//  document.write(`<br>A ordem alfabetica ao contratio do array é ${pessoas.sort().reverse()}`)

//  // Concat() - concatenar vetores ------------------

//  var f = [1,2,3,4,5]
//  var g = [6,7,8,9,0]

//  document.write(`<br> O vetor "f" concatenado com o vetor "g" fica: ${concat(g)}`)
//  document.write(`<br> O vetor "g" concatenado com o vetor "f" fica: ${concat(f)}`)

//  // includes() - verifica se um determinado elemento encontra-se na array --------------------

//  document.write(`<br> O numero 2 encontra-se no array?: ${f.includes(2)}`)
//  document.write(`<br> O numero 12 encontra-se no array?: ${f.includes(12)}`)

//  //  push() - adiciona um novo elemento no final do array ---------------

//  var h = [10,20,30,40,50]
//  h.push('blue balls monkeys')

//  documento.write(`<br> O novo array é: ${h}`)

//  // pop() - remove o ultimo elemento do array -------------------

//  h.pop()

//  document.write(`<br> O novo array é: ${h}`)

//  // shift() - remove o primeiro elemento do array ---------------

//  h.shift()
 
//  document.write(`<br> Remove o primeiro elemento do array: ${h}`)

 // Slice() - fatia o array sem alterar o arry original -----------

 aluno = 'Maria Da Silva Xavier da Cunha'
 a = aluno.slice(6)
 document.write(`<br> ${a}`)
 a1 = aluno.slice(5,14)
 document.write(`<br> ${a1}`)

carro = ['jeta', 'fiat', 'civic', 'corolla', 'ferrari']

c = carro.slice(2)
document.write(`<br>${c}`)

c1 = carro.slice(2,3)
document.write(`<br>${c1}`)

c2 = carro.slice(2,5)
document.write(`<br>${c2}`)

c3 = carro.slice(-4,-2)
document.write(`<br>${c3}`)

c4 = carro.slice(-6, -3)
document.write(`<br>${c4}`)


// splice() - 1