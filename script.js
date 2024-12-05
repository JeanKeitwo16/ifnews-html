const dataSeletivo = new Date('2024-12-10').getTime();
const contador = document.getElementById('contador');

function updateCounter() {
    const now = new Date().getTime();
    const distancia = dataSeletivo - now;

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));

    contador.textContent = `${dias} dias restantes`;
}

setInterval(updateCounter, 1000);
