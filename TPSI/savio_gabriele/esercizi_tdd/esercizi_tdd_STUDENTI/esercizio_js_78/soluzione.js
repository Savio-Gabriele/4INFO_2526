export class Orario {
  constructor(ore, minuti, secondi) {
    this.ore = ore;
    this.minuti = minuti;
    this.secondi = secondi;
  }

  toTotalSeconds() {
    return this.ore * 3600 + this.minuti * 60 + this.secondi;
  }

  toObject() {
    return { h: this.ore, m: this.minuti, s: this.secondi };
  }

  diff(altroOrario) {
    const diffInSeconds = Math.abs(
      this.toTotalSeconds() - altroOrario.toTotalSeconds(),
    );
    return {
      milliseconds: diffInSeconds * 1000,
      seconds: diffInSeconds,
      minutes: diffInSeconds / 60,
      hours: diffInSeconds / 3600,
    };
  }
  min(ora2, ora3) {
    const orari = [this, ora2, ora3];
    const ilMinimo = orari.reduce((prev, curr) => {
      return prev.toTotalSeconds() < curr.toTotalSeconds() ? prev : curr;
    });
    return ilMinimo.toObject();
  }

  addSecondi(secondi) {
    this.secondi += secondi;
    if (this.secondi >= 60) {
      this.minuti += Math.floor(this.secondi / 60);
      this.secondi %= 60;
    }
    if (this.minuti >= 60) {
      this.ore += Math.floor(this.minuti / 60);
      this.minuti %= 60;
    }
    if (this.ore >= 24) {
      this.ore %= 24;
    }
  }

  toString() {
    return `${this.ore}:${this.minuti}:${this.secondi}`;
  }
}
