let texto = window.document.querySelector('div#texto')

const botoes = window.document.querySelectorAll('.btn')

//Animação de botão pressionado
let estilos = {
	negrito: false,
	italico: false,
	sublinhado: false
}
let estilosBotoes = Object.keys(estilos)
botoes.forEach(botao => {
    botao.addEventListener('click', () => {
		for(var i = 0; i < estilosBotoes.length; i++){
			if(botao.id == estilosBotoes[i]){
				if(estilos[estilosBotoes[i]]){
					botao.removeAttribute('style')
				} else {
					botao.setAttribute('style', 'box-shadow: none; background: rgba(2, 111, 133, 0.5);')
				}
				estilos[estilosBotoes[i]] = !estilos[estilosBotoes[i]]
			}
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

function montarAnimacao(){
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
		montarAnimacao()
    })
})

function getTextoSelecionado(){
	
	var textoSelecionado = window.getSelection().toString()
	start = texto.textContent.indexOf(textoSelecionado)
	finish = start + textoSelecionado.length 
	
	let infoTexto = {
		comeco: start,
		fim: finish,
		conteudo: textoSelecionado
	}
	
	return infoTexto
	
}

function estilizar(tipo){
	if(window.getSelection().toString() != ""){
		infoTexto = getTextoSelecionado()
		texto.innerHTML = texto.innerText.substring(0, infoTexto['comeco']) + "<"+tipo+">" + infoTexto['conteudo'] + "</"+tipo+">" + texto.innerText.substring(infoTexto['fim'])
	} else{
		switch(tipo) {
			case 'strong':
				if(!estilos['negrito']){
					texto.style.fontWeight = 'bold'
				} else {
					texto.style.fontWeight = 'normal'
				}
				break
			case 'i':
				if(!estilos['italico']){
					texto.style.fontStyle = 'italic'
				} else{
					texto.style.fontStyle = 'normal'
				}
				break
			case 'u':
				if(!estilos['sublinhado']){
					texto.style.textDecoration = 'underline'
				} else {
					texto.style.textDecoration = 'none'
				}
				break
		}
	}
	
}

function alinhamento(estilo) {
	texto.style.textAlign = estilo
}
