
setInterval(atualizarRelogio, 1000);

function atualizarRelogio() {
    const data = new Date();
    let horas = data.getHours(); // Modificado para pegar o horário local
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();

    horas = horas < 10 ? `0${horas}` : horas;
    minutos = minutos < 10 ? `0${minutos}` : minutos;
    segundos = segundos < 10 ? `0${segundos}` : segundos;

    const relogioDigital = `${horas}:${minutos}:${segundos}`;
    document.getElementById("clock").innerHTML = relogioDigital;
}
