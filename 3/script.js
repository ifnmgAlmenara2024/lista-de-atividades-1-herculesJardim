let botao = document.getElementById('converter')
botao.addEventListener('click',converter)
function converter(){
    let celsius= document.getElementById('celsius').value
    let fahrenheit = (celsius*(9/5))+32
    document.getElementById('resultado').innerHTML = `<strong>${celsius} °C</strong> equivale a <strong>${fahrenheit} °F</strong>`
}