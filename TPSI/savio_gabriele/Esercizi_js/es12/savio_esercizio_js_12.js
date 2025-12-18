let Animale = function (nome, specie, eta) {
  this.nome = nome;
  this.specie = specie;
  this.eta = eta;

  this.verso = function () {
    console.log(this.nome + " emette un verso");
  };

  this.mangia = function () {
    console.log(this.nome + " sta mangiando");
  };

  this.enumera = function () {
    for (let chiave in this) {
      if (typeof this[chiave] !== "function") {
        console.log(chiave);
      }
    }
  };
};

let Automobile = function (marca, modello, anno) {
  this.marca = marca;
  this.modello = modello;
  this.anno = anno;

  this.accendi = function () {
    console.log(`${this.marca} ${this.modello} è stata accesa`);
  };

  this.spegni = function () {
    console.log(`${this.marca} ${this.modello} è stata spenta`);
  };

  this.enumera = function () {
    for (let chiave in this) {
      if (typeof this[chiave] !== "function") {
        console.log(chiave);
      }
    }
  };
};

let Poligono = function (nome, lati, colore) {
  this.nome = nome;
  this.lati = lati;
  this.colore = colore;

  this.area = function () {
    console.log("Calcolo area del " + this.nome);
  };

  this.perimetro = function () {
    console.log("Calcolo perimetro del " + this.nome);
  };

  this.enumera = function () {
    for (let chiave in this) {
      if (typeof this[chiave] !== "function") {
        console.log(chiave);
      }
    }
  };
};

let animale1 = new Animale("Cane", "Mammifero", 5);
let animale2 = new Animale("Gatto", "Mammifero", 3);

let auto1 = new Automobile("Fiat", "Panda", 2020);
let auto2 = new Automobile("Tesla", "Model 3", 2023);

let poligono1 = new Poligono("Quadrato", 4, "Rosso");
let poligono2 = new Poligono("Triangolo", 3, "Blu");

console.log("Animale 1:");
animale1.enumera();

console.log("Animale 2:");
animale2.enumera();

console.log("Auto 1:");
auto1.enumera();

console.log("Auto 2:");
auto2.enumera();

console.log("Poligono 1:");
poligono1.enumera();

console.log("Poligono 2:");
poligono2.enumera();
