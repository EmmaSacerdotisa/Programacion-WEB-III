function mayorYMenor(numeros) {
  let mayor = numeros[0];
  let menor = numeros[0];

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
      mayor = numeros[i];
    }

    if (numeros[i] < menor) {
      menor = numeros[i];
    }
  }

  return {
    mayor: mayor,
    menor: menor
  };
}

let ej = mayorYMenor([3, 2, 5, 1, 4]);
console.log(ej); 