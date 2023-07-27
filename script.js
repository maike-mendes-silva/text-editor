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

const botoesRadio = window.document.querySelectorAll('.btn-radio')

//Variável de controle para simular um input radio 
let dados = {
	esquerda: true,
	centro: false,
	direita: false
}

function mudarDados (id) {
	dados[id] = !dados[id]
	
	//Não permite tudo falso
	valoresDados = Object.values(dados)
	cont = 0
	for (valor of valoresDados) {
		if(!valor){
			cont++
		}
	}
	if(cont == valoresDados.length){
		dados[id] = !dados[id]
	}
	
	//Não permite mais de um verdadeiro
	valoresDados = Object.entries(dados)
	idMudar = 0
	for (valor of valoresDados){
		if(valor[0] != id && valor[1]){
			idMudar = valor[0]
			break
		}
	}
	if(idMudar != 0){
		dados[idMudar] = !dados[idMudar]
	}
	
}

function montarAnimacao(dados, botoesRadio){
	valor = Object.values(dados)
	for(let i = 0; i < botoesRadio.length; i++){
		if(valor[i]){
			botoesRadio[i].setAttribute('style', 'box-shadow: none; background: rgba(2, 111, 133, 0.5);')
 		} else{
			botoesRadio[i].removeAttribute('style')
		}
	}
}

window.onload = montarAnimacao(dados, botoesRadio)

botoesRadio.forEach(botao => {
    botao.addEventListener('click', () => {
		id = botao.getAttribute('id')
		mudarDados(id)
		montarAnimacao(dados, botoesRadio)
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
