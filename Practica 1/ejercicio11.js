function obtenerUsuario() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 100069, nombre: "Juan P." });
    }, 1000);
  });
}

function obtenerPedidos(usuarioId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Pedido 1", "Pedido 2"]);
    }, 1000);
  });
}

obtenerUsuario()
  .then((usuario) => {
    console.log("Usuario:", usuario);
    return obtenerPedidos(usuario.id);
  })
  .then((pedidos) => {
    console.log("Pedidos:", pedidos);
  })
  .catch((error) => {
    console.log("Error:", error);
  });