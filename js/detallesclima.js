const params = new URLSearchParams(window.location.search);
const idCiudad = parseInt(params.get("id"));

const ciudad = lugares.find((c) => c.id === idCiudad);

const infoCiudad = document.getElementById("infoCiudad");
const pronosticoContainer = document.getElementById("pronosticoContainer");

if (!ciudad) {
  infoCiudad.innerHTML = `
    <div class="alert alert-danger text-center">
      Ciudad no encontrada.
    </div>
  `;
} else {
  infoCiudad.innerHTML = `
    <div class="card shadow p-4 text-center">
      <h2>${ciudad.nombre}</h2>
      <p class="display-4">${ciudad.tempActual}°C</p>
      <span class="badge bg-info">${ciudad.estadoActual}</span>

      <div class="row mt-4">
        <div class="col-4">
          <strong>Humedad</strong><br>
          ${Math.floor(Math.random() * 40) + 40}%
        </div>
        <div class="col-4">
          <strong>Viento</strong><br>
          ${Math.floor(Math.random() * 30) + 5} km/h
        </div>
        <div class="col-4">
          <strong>Presión</strong><br>
          ${Math.floor(Math.random() * 20) + 1000} hPa
        </div>
      </div>
    </div>
  `;

  ciudad.pronosticoSemanal.forEach((dia) => {
    const cardDia = `
      <div class="col-12 col-sm-6 col-lg-3 mb-3">
        <div class="card p-3 shadow text-center">
          <h5>${dia.dia}</h5>
          <p class="display-6">${dia.min}°C / ${dia.max}°C</p>
          <span class="badge bg-primary">${dia.estado}</span>
        </div>
      </div>
    `;
    pronosticoContainer.innerHTML += cardDia;
  });
  const estadisticas = calcularEstadisticas(ciudad.pronosticoSemanal);

const estadisticasContainer = document.getElementById("estadisticasSemana");

estadisticasContainer.innerHTML = `
  <div class="card shadow p-4 mt-4">
    <h4>Estadísticas de la semana</h4>
    <p><strong>Mínima:</strong> ${estadisticas.min}°C</p>
    <p><strong>Máxima:</strong> ${estadisticas.max}°C</p>
    <p><strong>Promedio:</strong> ${estadisticas.promedio}°C</p>

    <p><strong>Días soleados:</strong> ${estadisticas.contador["Soleado"] || 0}</p>
    <p><strong>Días nublados:</strong> ${estadisticas.contador["Nublado"] || 0}</p>
    <p><strong>Días lluviosos:</strong> ${estadisticas.contador["Lluvioso"] || 0}</p>

    <div class="alert alert-info mt-3 text-center">
      ${estadisticas.resumen}
    </div>
  </div>
`;

}
