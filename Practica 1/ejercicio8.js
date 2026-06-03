function saludar() {
  console.log("Hola, se ejecutó el callback después de 2 segundos :)");
}

setTimeout(saludar, 2000);