export class Poligono {
  constructor(lato, nLati) {
    this.lato = lato;
    this.nLati = nLati;
  }

  perimetro() {
    return this.lato * this.nLati;
  }

  area() {
    return Math.round((this.nLati * this.lato ** 2) / (4 * Math.tan(Math.PI / this.nLati)));
  }
}

export class TriangoloEquilatero extends Poligono {
  constructor(lato) {
    super(lato, 3);
  }
}

export class Quadrato extends Poligono {
  constructor(lato) {
    super(lato, 4);
  }
}

export class Pentagono extends Poligono {
  constructor(lato) {
    super(lato, 5);
  }
}

export class Esagono extends Poligono {
  constructor(lato) {
    super(lato, 6);
  }
}

export class Ettagono extends Poligono {
  constructor(lato) {
    super(lato, 7);
  }
}

export class Ottagono extends Poligono {
  constructor(lato) {
    super(lato, 8);
  }
}
