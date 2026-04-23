export class Automobile {
  constructor() {
    this._velocita = 0;
    this._persone = 0;
    this.accesa = false;
    this._marcia = 1;
  }

  // Getter e Setter per persone
  get persone() {
    return this._persone;
  }

  set persone(valore) {
    // Se l'auto è accesa E ha velocità > 0, non puoi cambiare passeggeri
    if (this.accesa && this._velocita > 0) {
      throw new Error(
        "Impossibile cambiare persone mentre l'auto è in movimento",
      );
    }
    if (valore > 5 || valore < 0) {
      throw new Error("Numero di persone non valido (max 5)");
    }
    this._persone = valore;
  }

  // Getter e Setter per velocita
  get velocita() {
    return this._velocita;
  }

  set velocita(valore) {
    if (!this.accesa) {
      throw new Error("L'auto deve essere accesa per cambiare velocità");
    }
    if (valore > 150 || valore < 0) {
      throw new Error("Velocità non consentita (0-150)");
    }
    this._velocita = valore;
  }

  // Getter per marcia
  get marcia() {
    return this._marcia;
  }

  aggiungi_marcia() {
    if (!this.accesa) throw new Error("Auto spenta");
    if (this._marcia >= 6) throw new Error("Marcia massima");
    this._marcia++;
  }

  togli_marcia() {
    if (!this.accesa) throw new Error("Auto spenta");
    if (this._marcia <= 1) throw new Error("Marcia minima");
    this._marcia--;
  }
}
