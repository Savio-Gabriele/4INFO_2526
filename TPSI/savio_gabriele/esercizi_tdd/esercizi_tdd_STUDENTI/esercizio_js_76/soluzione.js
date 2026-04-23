export class Orario {
  constructor(ore, minuti, secondi) {
    this.ore = ore;
    this.minuti = minuti;
    this.secondi = secondi;
  }

  toTotalSeconds() {
    return this.ore * 3600 + this.minuti * 60 + this.secondi;
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

  toString() {
    const pad = (num) => String(num).padStart(2, "0");
    return `${pad(this.ore)}:${pad(this.minuti)}:${pad(this.secondi)}`;
  }
}
