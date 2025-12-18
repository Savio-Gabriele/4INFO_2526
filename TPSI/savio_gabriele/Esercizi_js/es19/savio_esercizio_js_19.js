function mostraDettagli(obj) {
  for (let prop in obj) {
    let val = obj[prop];
    let tipoVal = typeof val;
    console.log(`Nome: ${prop}, tipo: ${tipoVal}, valore: ${val}`);
  }
}

function esegui() {
  let studente = {
    nome: "Daniele",
    cognome: "Prevedi",
    eta: 17,
    classe: "4° INFO",
    scuola: "Istituto Agnelli",
  };

  mostraDettagli(studente);

  let veicolo = {
    marca: "Fiat",
    modello: "500L",
    anno: 2018,
    colore: "Nero",
    posti: 5,
  };

  mostraDettagli(veicolo);
}

esegui();
