let texto = window.document.querySelector('textarea#texto')

const botoes = window.document.querySelectorAll('.btn')

//Animação de botão pressionado
botoes.forEach(botao => {
    botao.addEventListener('click', () => {
		if(botao.hasAttribute('style')){
			botao.removeAttribute('style')
		} else {
			botao.setAttribute('style', 'box-shadow: none; background: rgba(2, 111, 133, 0.5);')
		}
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

function alinhamento(estilo) {
	texto.style.textAlign = estilo
}
