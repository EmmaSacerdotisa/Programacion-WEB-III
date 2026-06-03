function separarParesImpares(numeros) {
  const resultado = {
    pares: [],
    impares: []
  };

  for (let i = 0; i < numeros.length; i++) {
    const num = numeros[i];

    if (num % 2 === 0) {
      resultado.pares.push(num);
    } else {
      resultado.impares.push(num);
    }
  }
  return resultado;
}

let resul = separarParesImpares([1, 2, 3, 4, 5, 6, 7, 9]);
console.log(resul); 