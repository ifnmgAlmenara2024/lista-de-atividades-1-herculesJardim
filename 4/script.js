let botao= document.getElementById('converter')
botao.addEventListener('click', conversao)
function conversao(){
    const taxUSD = 5.5
    const taxEUR = 6.5
    const taxGBP = 7.5
    let valor = document.getElementById('valor').value
    let origem = document.getElementById('opcaoOrigem').value
    let destino = document.getElementById('opcaoDestino').value
    let conversao = valor
    let resultado = document.getElementById('resultado')
    if(origem == destino)
    {
        resultado.innerHTML= `<strong>${origem.toUpperCase()}$ ${valor}</strong> equivale a <strong>${destino.toUpperCase()}$ ${conversao}</strong>`
    }
    else
    {
        switch(origem)
        {
            case 'brl':
                switch(destino)
                {
                case 'usd':
                    conversao = valor/taxUSD
                    break
                case 'eur':
                    conversao = valor/taxEUR
                    break
                case 'gbp':
                    conversao= valor/taxGBP
                    break
                }
                break
            case 'usd':
                switch(destino)
                {
                    case 'brl':
                        conversao = valor*taxUSD
                        break
                    case 'eur':
                        conversao = (valor*taxUSD)/taxEUR
                        break
                    case 'gbp':
                        conversao =(valor*taxUSD)/taxGBP
                        break
                }
                break
            case 'eur':
                switch(destino)
                {
                    case 'brl':
                        conversao = valor*taxEUR
                        break
                    case 'usd':
                        conversao = (valor*taxEUR)/taxUSD
                        break
                    case 'gbp':
                        conversao =(valor*taxEUR)/taxGBP
                        break
                }
                break
            case 'gbp':
                switch(destino)
                {
                    case 'brl':
                        conversao= valor * taxGBP
                        break
                    case 'usd':
                        conversao= (valor * taxGBP)/taxUSD
                        break
                    case 'eur':
                        conversao = (valor * taxGBP)/taxEUR
                        break
                }
                break
        }
        resultado.innerHTML= `<strong>${origem.toUpperCase()}$ ${valor}</strong> equivale a <strong>${destino.toUpperCase()}$ ${conversao.toFixed(2)}</strong>`
    }
}