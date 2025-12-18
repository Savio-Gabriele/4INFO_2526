function sommaDaZeroAN(n) {
  n = Number(n);

  let somma = 0;

  for (let i = 0; i <= n; i++) {
    somma += i;
  }

  return somma;
}

console.log("Risultato 1:", sommaDaZeroAN(5));
console.log("Risultato 2:", sommaDaZeroAN("10"));
console.log("Risultato 3:", sommaDaZeroAN(3)); 
