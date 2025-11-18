/*
Realizzare il ciclo for...in su un oggetto utente NON utilizzando il for...in ma un ciclo for normale
*/

let utente = {
  nome: "Gabriele",
  cognome: "Savio",
  eta: "18",
  frase: "Hello word!",
};

let keys = Object.keys(utente);
for (let i = 0; i < keys.length; i++) {
  console.log(utente[keys[i]]);
}
