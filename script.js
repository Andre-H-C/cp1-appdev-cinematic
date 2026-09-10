/* mensagem ver detakhes */
function mostrarDetalhes(nomeFilme) {
    alert("Você selecionou: " + nomeFilme);
}


function buscarFilmes() {
    const busca = document.getElementById("campoBusca").value.toLowerCase().trim();
    const filmes = document.querySelectorAll(".filme");
    const mensagem = document.getElementById("mensagemBusca");
    let encontrados = 0;
    filmes.forEach(function(filme) {
        const titulo = filme.querySelector("h2").innerText.toLowerCase();
        if (titulo.includes(busca)) {
            filme.style.display = "block";
            encontrados++;
        } else {
            filme.style.display = "none";
        }
    });

    /*se busca falhar, mostra tudo dnv */
    if (busca === "") {
        mensagem.innerText = "";

        filmes.forEach(function(filme) {
            filme.style.display = "block";
        });

        return;
    }

    if (encontrados === 0) {
        mensagem.innerText = "Nenhum filme encontrado.";
    } else {
        mensagem.innerText = encontrados + " filme(s) encontrado(s).";
    }
}
