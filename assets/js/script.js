let btn = document.querySelectorAll('button')
btn.forEach(botao => botao.addEventListener('click', add))
let contOpe = 0
let n1 = '';
let n2 = '';
let operacao = ''

function add(e){
    let valor = e.target.textContent;
    let num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    let ope = ["+", "-", "/", "*"];
    let opeEspecial = ['C', '='];
    let verifcaNum = num.indexOf(valor)
    let verificaOpeEspecial = opeEspecial.indexOf(valor)
    let verificaOpe = ope.indexOf(valor)
    let painel = document.querySelector('.painel')
    

    if(painel.innerHTML === '0' && verifcaNum !== -1 && verificaOpe === -1 && verificaOpeEspecial  === -1 && contOpe <1){
        painel.innerHTML = '';
        painel.append(valor)
        n1+=valor
        console.log('Primeiro')
    } else if(painel.innerHTML !== '0' && verifcaNum !== -1 && verificaOpeEspecial  === -1 && contOpe < 1){
        painel.append(valor)
        n1+=valor
        console.log(n1)
        console.log('Segundo')
    } else if(painel.innerHTML !== '0' && verifcaNum === -1 && verificaOpeEspecial === -1 && verificaOpe !== -1 && contOpe < 1){
        contOpe += 1
        operacao = valor;
        console.log('entrou aqui')
        painel.append(valor)
    } else if(painel.innerHTML !== '0' && verifcaNum !== -1 && verificaOpeEspecial === -1 && verificaOpe === -1 && contOpe === 1){
        painel.append(valor)
        n2+=valor
    } else if(painel.innerHTML !== '0' && verifcaNum === -1 && verificaOpeEspecial !== -1 && verificaOpe === -1 && contOpe === 1){   
        if(painel.innerHTML !== '0' && verifcaNum === -1 && verificaOpeEspecial !== -1 && verificaOpe === -1 && contOpe === 1 && valor ===  'C'){
            painel.innerHTML = ''
            n1 = ''
            n2 = ''
            ope = ''
            contOpe = 0
        }else if(operacao === '+' && valor == '='){
            let result = Number(n1) + Number(n2)
            painel.innerHTML = ''
            painel.append(result)
        } else if(operacao === '-' && valor == '='){
            let result = Number(n1) - Number(n2)
            painel.innerHTML = ''
            painel.append(result)
        } else if(operacao === '*' && valor == '='){
            let result = Number(n1) * Number(n2)
            painel.innerHTML = ''
            painel.append(result)
        } else if(operacao === '/' && valor == '='){
            let result = Number(n1) / Number(n2)
            painel.innerHTML = ''
            painel.append(result)
        }
    }
    

}

