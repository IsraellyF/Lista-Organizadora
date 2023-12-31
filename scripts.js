const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-tasks')



let minhalistaDeItens = []





function adicionarNovaTarefa() {
    minhalistaDeItens.push({
        tarefa: input.value,
        concluida: false
    })

    input.value = ''

    mostrarTarefas()
}
function mostrarTarefas() {
    let novaLi = ''

    minhalistaDeItens.forEach((item, index) => {

        novaLi = novaLi + `


        <li class="task ${item.concluida && "done"}">
         <img src="./img/icons8-checkmark-48.png" alt="like-na-tarefa"onclick="concluirTarefa(${index})">
         <p>${item.tarefa}</p>
         <img src="./img/icons8-remove-48.png" alt="tarefa-para-o-lixo"onclick="deletarItem(${index})">
         </li>

            `

    })

    listaCompleta.innerHTML = novaLi

    localStorage.setItem('lista', JSON.stringify(minhalistaDeItens))


}
function concluirTarefa(index) {
    minhalistaDeItens[index].concluida = !minhalistaDeItens[index].concluida
    console.log(index)

    mostrarTarefas()
}


function deletarItem(index) {
    minhalistaDeItens.splice(index, 1)
    console.log(index)

    mostrarTarefas()
}
function recarregarTarefas() {
    const tarefasDoLocalStorage = localStorage.getItem('lista')

    if (tarefasDoLocalStorage) {
        minhalistaDeItens = JSON.parse(tarefasDoLocalStorage)
    }
    console.log(tarefasDoLocalStorage)

    mostrarTarefas()
}

recarregarTarefas()


button.addEventListener('click', adicionarNovaTarefa)