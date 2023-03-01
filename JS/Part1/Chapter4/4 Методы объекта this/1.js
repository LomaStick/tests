let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    this.a = +prompt('Введите число a', 0);
    this.b = +prompt('Введите число b', 0);
  }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());