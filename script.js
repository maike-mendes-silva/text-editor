let texto = window.document.querySelector('textarea#texto')

const botoes = window.document.querySelectorAll('.btn')

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        botao.classList.add('pressionado')
    })
})

function negrito(){
    texto.style.fontWeight = 'bold'
}

function italico(){
    texto.style.fontStyle = 'italic'
}

function sublinhado(){
    texto.style.textDecoration = 'underline'
}

function alinharEsquerda(){
    texto.style.textAlign = 'left'
}

function alinharCentro(){
    texto.style.textAlign = 'center'
}

function alinharDireita(){
    texto.style.textAlign = 'right'
}