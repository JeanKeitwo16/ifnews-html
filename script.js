const dataSeletivo = new Date('2024-12-10').getTime();
const contador = document.getElementById('contador');

function contadorCalculo() {
    const agora = new Date().getTime();
    const tempoRestante = dataSeletivo - agora;

    const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));

    contador.textContent = `${dias} dias restantes`;
}

setInterval(contadorCalculo, 1000);

document.addEventListener("DOMContentLoaded", () => {
    const depoimentos = document.querySelectorAll(".depoimento");
    let indiceAtual = 0;

    function alternarDepoimento() {
        depoimentos[indiceAtual].classList.remove("depoimento-ativo");
        indiceAtual = (indiceAtual + 1) % depoimentos.length;
        depoimentos[indiceAtual].classList.add("depoimento-ativo");
    }
    setInterval(alternarDepoimento, 5000);
});
