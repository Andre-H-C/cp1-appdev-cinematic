/*
    Cinematic - JavaScript do projeto.
    Aqui ficam as funções que fazem a página interagir com o usuário.
*/

/* Mostra uma mensagem quando o usuário clica em "Ver detalhes". */
function mostrarDetalhes(nomeFilme) {
    alert("Você selecionou: " + nomeFilme);
}

/*
    Faz a busca pelos títulos dos filmes.
    1. Pega o texto digitado.
    2. Percorre os cards.
    3. Compara o texto com cada título.
    4. Esconde os filmes que não correspondem.
*/
function buscarFilmes() {
    // Pega o valor do campo de busca e transforma em minúsculo.
    const busca = document.getElementById("campoBusca").value.toLowerCase().trim();

    // Seleciona todos os cards de filmes.
    const filmes = document.querySelectorAll(".filme");

    // Seleciona o elemento que exibirá a mensagem do resultado.
    const mensagem = document.getElementById("mensagemBusca");

    // Contador de resultados encontrados.
    let encontrados = 0;

    // Percorre cada card.
    filmes.forEach(function(filme) {
        // Pega o título do filme.
        const titulo = filme.querySelector("h2").innerText.toLowerCase();

        // Verifica se o título contém o que foi pesquisado.
        if (titulo.includes(busca)) {
            filme.style.display = "block";
            encontrados++;
        } else {
            filme.style.display = "none";
        }
    });

    // Se a busca estiver vazia, mostra todos os filmes novamente.
    if (busca === "") {
        mensagem.innerText = "";

        filmes.forEach(function(filme) {
            filme.style.display = "block";
        });

        return;
    }

    // Exibe a quantidade de resultados encontrados.
    if (encontrados === 0) {
        mensagem.innerText = "Nenhum filme encontrado.";
    } else {
        mensagem.innerText = encontrados + " filme(s) encontrado(s).";
    }
}
