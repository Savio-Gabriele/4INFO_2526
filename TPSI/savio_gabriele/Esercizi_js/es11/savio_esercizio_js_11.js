let Automobile = function(marca, modello, anno, colore, cilindrata){
  (this.marca = marca),
    (this.modello = modello),
    (this.anno = anno),
    (this.colore = colore),
    (this.cilindrata = cilindrata),
    (this.accendi = function () {
      console.log(`${this.marca} ${this.modello} è stata accesa.`);
    }),
    (this.spegni = function () {
      console.log(`${this.marca} ${this.modello} è stata spenta.`);
    }),
    (this.guida = function () {
      console.log(`${this.marca} ${this.modello} sta guidando.`);
    });
}

const auto1 = Automobile("Fiat", "500", 2020, "Rosso", 845);
auto1.accendi();
auto1.guida();
auto1.spegni();

const auto2 = Automobile("BMW", "X3", 2019, "Nero", 8558);
auto2.accendi();
auto2.guida();
auto2.spegni();

const auto3 = Automobile("Audi", "A4", 2021, "Bianco", 539);
auto3.accendi();
auto3.guida();
auto3.spegni();

const auto4 = Automobile("Mercedes", "C-Class", 2018, "Argento", 5236);
auto4.accendi();
auto4.guida();
auto4.spegni();

const auto5 = Automobile("Tesla", "Model 3", 2022, "Blu", 0);
auto5.guida();
auto5.spegni();
