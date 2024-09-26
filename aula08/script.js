// Exemplo 1
document.getElementById('btn').addEventListener('click',function(){
    document.getElementById('txt').innerText = 'Bom Dia'
})
// Exemplo 2
var a1 = document.querySelector('#a')
 a1.addEventListener('mouseover',function(){
    a1.style.backgroundColor = 'pink'
})

a1.addEventListener('mouseout',function(){
    a1.style.backgroundColor = 'violet'
})

// Exemplo 3 

document.querySelector('#b').addEventListener('click', function(){
    this.style.background = 'green'
})

