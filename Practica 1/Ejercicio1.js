function contarVocales(texto) {
  const resultado = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0
  };

  texto = texto.toLowerCase();

  for (let i = 0; i < texto.length; i++) {
    const letra = texto[i];

    if (resultado.hasOwnProperty(letra)) {
      resultado[letra]++;
    }
  }

  return resultado;
}

let obj1 = contarVocales("Practicaaa");
console.log(obj1);