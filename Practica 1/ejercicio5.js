function esPalindromo(texto) {
  texto = texto.toLowerCase();

  let invertido = "";

  for (let i = texto.length - 1; i >= 0; i--) {
    invertido += texto[i];
  }

  return texto === invertido;
}

let band1 = esPalindromo("oruro");
console.log(band1); 

let band2 = esPalindromo("holaaa");
console.log(band2); 