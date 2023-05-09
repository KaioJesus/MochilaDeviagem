
const form = document.getElementById('novoItem');
const lista = document.getElementById("lista");
const itens = JSON.parse(localStorage.getItem("itens")) || [];
//se tiver algum item, ele vai até o dado armazenado e pega e joga para página ou vai criar um array vazio;

itens.forEach( (elemento) => {
    criaElemento(elemento);
})

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    // Formuário envia os dados para algum lugar, nesse caso envia para a própria página. Preciso interromper esse comportamento, então para isso, chamao o método utilizado acima;

    const nome = evento.target.elements['nome'];
    const  quantidade = evento.target.elements['quantidade'];

    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    criaElemento(itemAtual);

    nome.value = "";
    quantidade.value = "";
    // toda vez que enviar o formulario, apagar os dados escritos anteriormente

    

    itens.push(itemAtual);
    //inserindo um elemento dentro de um array

    localStorage.setItem("itens", JSON.stringify(itens));
    //json.stringfy -> transforma um objeto em uma string
    //Os dados serao armazenados no navegador em forma de array, sem sobrescrever cada dado enviado pelo usuário
})

//validando formulário

function criaElemento(item){
    const novoItem = document.createElement('li');
    //criar um elemento na li
     novoItem.classList.add("item");
    //adicionar um item a lista na classe "item"
    
    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = item.quantidade;
    //criar um elemento que adiciona a quantidade que deseja na tag strong

    novoItem.appendChild(numeroItem);
    //para resolver o problema do objeto, insere um elemento criado dentro do outro; nesse caso o numeroItem vai entrar dentro do novo item
    novoItem.innerHTML += item.nome;
    //Recebe a quantidade e o nome

    lista.appendChild(novoItem);

    // console.log(novoItem); //virou objeto porque somamos elementos criados no html pelo js, concatenando em uma variável;
}