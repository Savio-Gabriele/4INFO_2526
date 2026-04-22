export class Calcolatrice {
  #result;

  set_result(initialValue) {
    this.#result = initialValue;
    return this;
  }

  get_result() {
    return this.#result;
  }

  sum(value) {
    this.#result += value;
    return this;
  }

  sub(value) {
    this.#result -= value;
    return this;
  }

  mul(value) {
    this.#result *= value;
    return this;
  }

  div(value) {
    if (value === 0) {
      throw new Error("Divisione per zero non permessa.");
    }
    this.#result /= value;
    return this;
  }
}