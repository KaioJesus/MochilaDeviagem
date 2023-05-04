
const form = document.getElementById('novoItem');

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    // Formuário envia os dados para algum lugar, nesse caso envia para a própria página. Preciso interromper esse comportamento, então para isso, chamao o método utilizado acima;



    criaElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value);
})

//validando formulário

function criaElemento(nome, quantidade){
    console.log(nome);
    console.log(quantidade);

    const novoItem = document.createElement('li');
    //criar um elemento na li
     novoItem.classList.add("item");
    //adicionar um item a lista na classe "item"
    
    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = quantidade;
    //criar um elemento que adiciona a quantidade que deseja na tag strong

    novoItem.appendChild(numeroItem);
    //para resolver o problema do objeto, insere um elemento criado dentro do outro; nesse caso o numeroItem vai entrar dentro do novo item
    novoItem.innerHTML += nome;
    //Recebe a quantidade e o nome
    console.log(novoItem); //virou objeto porque somamos elementos criados no html pelo js, concatenando em uma variável;
}