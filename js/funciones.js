function obtenerLugarPorId(id) {
  return lugares.find(lugar => lugar.id === id);
}

function calcularEstadisticas(pronostico) {
  let min = pronostico[0].min;
  let max = pronostico[0].max;
  let suma = 0;
  let contador = {};

  for (let dia of pronostico) {
    if (dia.min < min) min = dia.min;
    if (dia.max > max) max = dia.max;

    suma += (dia.min + dia.max) / 2;

    contador[dia.estado] = (contador[dia.estado] || 0) + 1;
  }

  const promedio = (suma / pronostico.length).toFixed(1);

  let resumen = "Semana variable.";
  if ((contador["Soleado"] || 0) > (contador["Lluvioso"] || 0)) {
    resumen = "Semana mayormente soleada.";
  } else if ((contador["Lluvioso"] || 0) >= 3) {
    resumen = "Semana lluviosa.";
  }

  return { min, max, promedio, contador, resumen };
}
