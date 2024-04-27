let botao = document.getElementById('calcular')
botao.addEventListener('click',calcular)
function calcular(){
    let base = document.getElementById('base').value
    let altura = document.getElementById('altura').value
    const area= base*altura
    document.getElementById('resultado').innerHTML=`A área do triângulo retângulo é <strong>${area}</strong>`
}