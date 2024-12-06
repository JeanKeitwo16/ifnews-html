const dataSeletivo = new Date('2024-12-10').getTime();
const contador = document.getElementById('contador');

function updateCounter() {
    const now = new Date().getTime();
    const distancia = dataSeletivo - now;

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));

    contador.textContent = `${dias} dias restantes`;
}

setInterval(updateCounter, 1000);

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

// Seleciona o menu principal e o submenu
const menuCategorias = document.querySelector('.menu-categorias');
const submenu = document.querySelector('.categorias');

// Adiciona evento de clique para mostrar/esconder o submenu
menuCategorias.addEventListener('click', (event) => {
    event.preventDefault(); // Impede o comportamento padrão do link
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
});

// Fecha o submenu ao clicar fora dele
document.addEventListener('click', (event) => {
    if (!menuCategorias.contains(event.target)) {
        submenu.style.display = 'none';
    }
});


