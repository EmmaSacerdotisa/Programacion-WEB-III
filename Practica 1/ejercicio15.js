function sumarAsync(a, b, callback) {
  setTimeout(() => {
    const resultado = a + b;
    callback(null, resultado);
  }, 1000);
}

function sumarAsyncPromise(a, b) {
  return new Promise((resolve, reject) => {
    sumarAsync(a, b, (error, resultado) => {
      if (error) {
        reject(error);
      } else {
        resolve(resultado);
      }
    });
  });
}

sumarAsyncPromise(5, 3)
  .then((resultado) => {
    console.log("Resultado:", resultado);
  })
  .catch((error) => {
    console.log("Error:", error);
  });