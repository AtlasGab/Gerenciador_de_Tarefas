function criarTarefa() {

    let titulo = document.getElementById("titulo").value;
    let descricao = document.getElementById("descricao").value;

    if (titulo == "") {
        return;
    }

    let tarefa = document.createElement("div");

    tarefa.className =
        "card card-tarefa shadow rounded-4 p-3 mb-3";

    tarefa.innerHTML = `
        <h5>${titulo}</h5>

        <p class="text-light-emphasis mb-2">
            ${descricao}
        </p>

        <button
            class="btn btn-roxo btn-sm rounded-pill"
            onclick="iniciar(this)">

            Em andamento
        </button>
    `;

    document
        .getElementById("aFazer")
        .appendChild(tarefa);

    document.getElementById("titulo").value = "";
    document.getElementById("descricao").value = "";
}

function iniciar(botao) {

    let tarefa = botao.closest(".card");

    tarefa.querySelector("button").outerHTML = `
        <button
            class="btn btn-roxo btn-sm rounded-pill"
            onclick="concluir(this)">

            Concluir
        </button>
    `;

    document
        .getElementById("emAndamento")
        .appendChild(tarefa);
}

function concluir(botao) {

    let tarefa = botao.closest(".card");

    botao.remove();

    document
        .getElementById("concluidas")
        .appendChild(tarefa);
}