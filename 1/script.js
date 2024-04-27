let botao = document.getElementById('calcular')
botao.addEventListener('click',calcImc)
function calcImc(){
    let peso = document.getElementById('peso').value
    let altura = document.getElementById('altura').value
    let imc= peso/(altura*altura)
    let msgSaida = document.getElementById('resultado')
    if(imc<18.5)
    {
        msgSaida.innerHTML=`Seu imc é: <strong>${imc.toFixed(2)}</strong><br>Você está abaixo do peso Normal`
    }
    else if(imc>=18.5 && imc<=24.9){
        msgSaida.innerHTML=`Seu imc é: <strong>${imc.toFixed(2)}</strong><br>Você está com peso normal`
    }
    else if(imc>=25 && imc<=29.9){
        msgSaida.innerHTML=`Seu imc é: <strong>${imc.toFixed(2)}</strong><br>Você está com Excesso de Peso`
    }
    else if(imc>=30 && imc<=34.9){
        msgSaida.innerHTML=`Seu imc é: <strong>${imc.toFixed(2)}</strong><br>Você está com Obesidade classe I`
    }
    else if(imc>=35 && imc<=39.9){
        msgSaida.innerHTML=`Seu imc é: <strong>${imc.toFixed(2)}</strong><br>Você esta com Obesidade Classe II`
    }
    else{
        msgSaida.innerHTML=`Seu imc é: <strong>${imc.toFixed(2)}</strong><br>Você está com Obesidade Classe III`
    }
}