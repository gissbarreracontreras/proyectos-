const container = document.getElementById("cardContainer");

lugares.forEach((lugar) => {
  const card = `
    <div class="col-12 col-sm-6 col-lg-4 mb-3">
      <article class="place-card card shadow" onclick="verDetalle(${lugar.id})">
        <div class="card-body text-center">
          <h5 class="place-card__name">${lugar.nombre}</h5>
          <p class="place-card__temp">${lugar.tempActual}°C</p>
          <span class="badge bg-info">${lugar.estadoActual}</span>
        </div>
      </article>
    </div>
  `;

  container.innerHTML += card;
});

function verDetalle(id) {
  window.location.href = `detallesclima.html?id=${id}`;
}
