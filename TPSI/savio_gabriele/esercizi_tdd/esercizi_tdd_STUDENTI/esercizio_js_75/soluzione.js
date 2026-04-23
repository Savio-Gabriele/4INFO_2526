class Enumera {
    enumera() {
        return Object.keys(this);
    }
}

export class Animale extends Enumera {
    constructor(specie, nome, eta) {
        super();
        this.specie = specie;
        this.nome = nome;
        this.eta = eta;
    }

    verso() {
        return "verso";
    }

    descrivi() {
        return `Specie: ${this.specie}, Nome: ${this.nome}, Età: ${this.eta}`;
    }
}

export class Automobile extends Enumera {
    constructor(colore, marca, modello) {
        super();
        this.colore = colore;
        this.marca = marca;
        this.modello = modello;
    }

    descrivi() {
        return `Colore: ${this.colore}, Marca: ${this.marca}, Modello: ${this.modello}`;
    }

    accelera() {
        return "accelera";
    }
}

export class Poligono extends Enumera {
    constructor(lato, n_lati, reg) {
        super();
        this.lato = lato;
        this.n_lati = n_lati;
        this.reg = reg;
    }

    descrivi() {
        return `Lato: ${this.lato}, Numero di lati: ${this.n_lati}, Regolare: ${this.reg}`;
    }

    calcolaArea() {
        return this.lato * this.n_lati;
    }
}