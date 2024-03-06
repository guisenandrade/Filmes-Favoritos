const btn1 = document.querySelector('button')
const listaFilmes = document.querySelector('#listaFilmes')

btn1.addEventListener('click',()=>{
    const valorDigitado = document.querySelector('#filmeInput').value
    //crriar elemento li
   const itemLista = document.createElement('li')
   //adicionar li a lista
   listaFilmes.append(itemLista)
   //adicionar conteudo ao li
   itemLista.innerHTML = valorDigitado
   //muda o css do item
   itemLista.style.backgroundColor = 'red'
   //adiciona uma classe ao item
   itemLista.classList.add(fundo-azul)
})