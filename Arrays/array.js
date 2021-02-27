class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  // Obtener un elemento del array por indice
  get(index) {
    return this.data[index];
  }

  // Agregar un elemento al final del array
  push(item) {
    this.data[this.length] = item;
    this.length++;

    return this.data;
  }

  // Eliminar el ultimo elemento del array
  pop() {
    if (this.length === 0) return [];

    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;

    return lastItem;
  }

  // Eliminar un elemento del array por index
  delete(index) {
    const item = this.data[index];
    this.shiftIndex(index);

    return item;
  }

  // Re ordenar indice de arrays
  shiftIndex(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
  }

  // Eliminar primer elemento del array
  shift() {
    return this.delete(0);
  }

  // Agregar un elemento al inicio
  unshift(item) {
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = item;
    this.length++;

    return this.length;
  }
}

const myArray = new MyArray();

console.log(myArray.push('erick'));
console.log(myArray.push('andres'));
console.log(myArray.push('alex'));

console.log(myArray.get(0));

console.log(myArray.pop());

console.log(myArray.delete(0));

console.log(myArray.push('zeron'));
console.log(myArray.push('didier'));
console.log(myArray.push('beto'));

console.log(myArray.shift());

console.log(myArray.unshift('dayana'));

console.log(myArray.data);
