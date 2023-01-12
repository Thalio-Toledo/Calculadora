let valor1 = 0
let valor2 = 0 
let valorTela = ''
let valorTela2
let resultado
let operacao2 = 0
let display = document.querySelector('#display #p1')
let display2 = document.querySelector('#display #p2')

let botaoDigito = document.querySelectorAll(".digito")
let botaoOperacao = document.querySelectorAll(".operacao")
let botaoIgual = document.querySelector("#igual")
botaoDigito.forEach(b => b.addEventListener('click', valorBotaoDigito))
botaoOperacao.forEach(b => b.addEventListener('click', valorBotaoOperacao))
botaoIgual.addEventListener('click', calcular)


function valorBotaoDigito(e) {
 
    let digito = e.target.value
    mostraTela(`${valorTela}${digito}`)
    

}

function valorBotaoOperacao(e) {
    let operacao = e.target.value
    console.log(operacao)


    if(operacao !="="){
        operacao2 = operacao
        valor1 = parseFloat(valorTela)
        valorTela = 0
        
    }if(operacao ==="="){
        valor2 = parseFloat(valorTela)
        resultado = calcular(valor1,valor2, operacao2)
        mostraTela(parseFloat(resultado) )
    }

}




function calcular(numero1, numero2, operacao){
    let result
    if(operacao ==="+"){
         result = numero1 + numero2
    }

    if(operacao ==="-"){
         result = numero1 - numero2
    }

    if(operacao ==="*"){
         result = numero1 * numero2
    }

    if(operacao ==="/"){
         result = numero1 / numero2
    }

    return result
}

function limparDisplay() {
    location.reload(true);
}

function mostraTela(numeros) {
    valorTela = numeros
   // valorTela2 = valorTela.substr(0,5)
    display.innerHTML = parseFloat(valorTela) 
    
}


    // let lenght = 5;
    // let txtFormated = textC.substr(0, lenght);