AOS.init();

const dataDoEvent = new Date("Dec 12, 2023 19:00:00");
const timeStampDoEvent = dataDoEvent.getTime();

const contaAsHoras = setInterval(function () {
  const agora = new Date();
  const timeStampAtual = agora.getTime();

  const distanciaAteOEvento = timeStampDoEvent - timeStampAtual;

  const diaEmMs = 1000 * 60 * 60 * 24;
  const horaEmMs = 1000 * 60 * 60;
  const minutoMs = 1000 * 60;
  const segundos = 1000;

  const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
  const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
  const minutoAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoMs);
  const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoMs) / segundos);

  document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutoAteOEvento}m ${segundosAteOEvento}`;

  if(distanciaAteOEvento < 0){
    clearInterval(contaAsHoras);
    document.getElementById('contador').innerHTML = 'Evento expirado';
  }
}, 1000);