const formulario = document.getElementById('novoItem')
const lista = document.getElementById('idLista')

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()
    console.log(evento.target.elements['nome'].value)
    console.log(evento.target.elements['quantidade'].value)
    criaElemento(nome, quantidade)
})

function criaElemento(nome, quantidade) {
    
    const novoItem = document.createElement('li')
    novoItem.classList.add('item')

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = quantidade.value

    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += nome.value
    

    lista.appendChild(novoItem) 
}

