function obtenerMensaje() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hola, realizando una promesa");
    }, 2000);
  });
}

function obtenerMensajeCallback(callback) {
  obtenerMensaje()
    .then((resultado) => {
      callback(null, resultado);
    })
    .catch((error) => {
      callback(error, null);
    });
}

obtenerMensajeCallback((error, resultado) => {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log("Resultado:", resultado);
  }
});