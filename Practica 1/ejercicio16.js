function obtenerProducto() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 123, nombre: "celular" });
    }, 1000);
  });
}

obtenerProducto()
  .then((producto) => {
    console.log("Producto:", producto);
  })
  .catch((error) => {
    console.log("Error:", error);
  });