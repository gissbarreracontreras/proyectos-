const lugares = [
  {
    id: 1,
    nombre: "Arica",
    tempActual: 26,
    estadoActual: "Soleado",
    pronosticoSemanal: [
      { dia: "Lunes", min: 20, max: 27, estado: "Soleado" },
      { dia: "Martes", min: 21, max: 28, estado: "Soleado" },
      { dia: "Miércoles", min: 20, max: 27, estado: "Soleado" },
      { dia: "Jueves", min: 19, max: 26, estado: "Soleado" },
      { dia: "Viernes", min: 20, max: 27, estado: "Soleado" }
    ]
  },

  {
    id: 2,
    nombre: "Iquique",
    tempActual: 24,
    estadoActual: "Soleado",
    pronosticoSemanal: [
      { dia: "Lunes", min: 19, max: 25, estado: "Soleado" },
      { dia: "Martes", min: 18, max: 24, estado: "Nublado" },
      { dia: "Miércoles", min: 19, max: 25, estado: "Soleado" },
      { dia: "Jueves", min: 18, max: 24, estado: "Nublado" },
      { dia: "Viernes", min: 19, max: 25, estado: "Soleado" }
    ]
  },

  {
    id: 3,
    nombre: "La Serena",
    tempActual: 17,
    estadoActual: "Nublado",
    pronosticoSemanal: [
      { dia: "Lunes", min: 13, max: 18, estado: "Nublado" },
      { dia: "Martes", min: 12, max: 17, estado: "Nublado" },
      { dia: "Miércoles", min: 11, max: 16, estado: "Soleado" },
      { dia: "Jueves", min: 12, max: 17, estado: "Nublado" },
      { dia: "Viernes", min: 13, max: 18, estado: "Soleado" }
    ]
  },

  {
    id: 4,
    nombre: "Valparaíso",
    tempActual: 18,
    estadoActual: "Nublado",
    pronosticoSemanal: [
      { dia: "Lunes", min: 14, max: 18, estado: "Nublado" },
      { dia: "Martes", min: 13, max: 17, estado: "Nublado" },
      { dia: "Miércoles", min: 12, max: 16, estado: "Soleado" },
      { dia: "Jueves", min: 13, max: 17, estado: "Nublado" },
      { dia: "Viernes", min: 14, max: 18, estado: "Soleado" }
    ]
  },

  {
    id: 5,
    nombre: "Santiago",
    tempActual: 21,
    estadoActual: "Soleado",
    pronosticoSemanal: [
      { dia: "Lunes", min: 11, max: 22, estado: "Soleado" },
      { dia: "Martes", min: 10, max: 21, estado: "Soleado" },
      { dia: "Miércoles", min: 9, max: 20, estado: "Nublado" },
      { dia: "Jueves", min: 10, max: 21, estado: "Soleado" },
      { dia: "Viernes", min: 11, max: 22, estado: "Soleado" }
    ]
  },

  {
    id: 6,
    nombre: "Concepción",
    tempActual: 16,
    estadoActual: "Nublado",
    pronosticoSemanal: [
      { dia: "Lunes", min: 11, max: 16, estado: "Nublado" },
      { dia: "Martes", min: 10, max: 15, estado: "Lluvioso" },
      { dia: "Miércoles", min: 9, max: 14, estado: "Nublado" },
      { dia: "Jueves", min: 10, max: 15, estado: "Soleado" },
      { dia: "Viernes", min: 11, max: 16, estado: "Nublado" }
    ]
  },

  {
    id: 7,
    nombre: "Temuco",
    tempActual: 14,
    estadoActual: "Lluvioso",
    pronosticoSemanal: [
      { dia: "Lunes", min: 8, max: 14, estado: "Lluvioso" },
      { dia: "Martes", min: 7, max: 13, estado: "Nublado" },
      { dia: "Miércoles", min: 6, max: 12, estado: "Lluvioso" },
      { dia: "Jueves", min: 7, max: 13, estado: "Nublado" },
      { dia: "Viernes", min: 8, max: 14, estado: "Soleado" }
    ]
  },

  {
    id: 8,
    nombre: "Puerto Varas",
    tempActual: 13,
    estadoActual: "Lluvioso",
    pronosticoSemanal: [
      { dia: "Lunes", min: 8, max: 13, estado: "Lluvioso" },
      { dia: "Martes", min: 7, max: 12, estado: "Nublado" },
      { dia: "Miércoles", min: 6, max: 11, estado: "Lluvioso" },
      { dia: "Jueves", min: 7, max: 12, estado: "Lluvioso" },
      { dia: "Viernes", min: 8, max: 13, estado: "Nublado" }
    ]
  },

  {
    id: 9,
    nombre: "Coyhaique",
    tempActual: 10,
    estadoActual: "Nublado",
    pronosticoSemanal: [
      { dia: "Lunes", min: 4, max: 10, estado: "Nublado" },
      { dia: "Martes", min: 3, max: 9, estado: "Lluvioso" },
      { dia: "Miércoles", min: 2, max: 8, estado: "Nublado" },
      { dia: "Jueves", min: 3, max: 9, estado: "Nublado" },
      { dia: "Viernes", min: 4, max: 10, estado: "Soleado" }
    ]
  },

  {
    id: 10,
    nombre: "Punta Arenas",
    tempActual: 8,
    estadoActual: "Nublado",
    pronosticoSemanal: [
      { dia: "Lunes", min: 3, max: 8, estado: "Nublado" },
      { dia: "Martes", min: 2, max: 7, estado: "Lluvioso" },
      { dia: "Miércoles", min: 1, max: 6, estado: "Nublado" },
      { dia: "Jueves", min: 2, max: 7, estado: "Viento" },
      { dia: "Viernes", min: 3, max: 8, estado: "Soleado" }
    ]
  }
];
