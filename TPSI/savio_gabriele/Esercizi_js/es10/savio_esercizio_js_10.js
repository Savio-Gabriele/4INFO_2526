//Realizzare il ciclo for...in su un oggetto utente NON utilizzando il for...in ma un ciclo for normale

let utente = {
  nome: "Mario",
  cognome: "Rossi",
};

let keys = Object.keys(utente);
for (let i = 0; i < keys.length; i++) {
  console.log(utente[keys[i]]);
}
