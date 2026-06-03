const promesaExito = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Operación exitosa después de 3 segundos ^^");
  }, 3000);
});

promesaExito.then((mensaje) => {
  console.log(mensaje);
});
