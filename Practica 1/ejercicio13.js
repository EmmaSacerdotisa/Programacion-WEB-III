function obtenerDatos() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Datos obtenidos");
    }, 1000);
  });
}

function procesarDatos(datos) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(datos + " -> procesados");
    }, 1000);
  });
}

function guardarDatos(datos) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(datos + " -> guardados");
    }, 1000);
  });
}

obtenerDatos()
  .then((datos) => {
    return procesarDatos(datos);
  })
  .then((resultado) => {
    return guardarDatos(resultado);
  })
  .then((final) => {
    console.log(final);
  });