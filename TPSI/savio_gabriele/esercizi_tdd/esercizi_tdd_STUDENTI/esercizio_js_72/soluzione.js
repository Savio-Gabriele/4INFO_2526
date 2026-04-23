export class Studente {
  constructor(nome, cognome) {
    this.nome = nome;
    this.cognome = cognome;
  }
}

export class Docente {
  constructor(nome, cognome) {
    this.nome = nome;
    this.cognome = cognome;
  }
}

export const confrontaOBJ = (obj1, obj2) => {
  return obj1.constructor === obj2.constructor && obj1.nome === obj2.nome && obj1.cognome === obj2.cognome;
};
