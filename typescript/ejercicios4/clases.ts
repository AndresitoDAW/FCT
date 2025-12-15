class Producto {
    constructor (public nombre: string, public precio: number) { }

    getInfo(): string {
        return `Producto: ${this.nombre}, Precio: $${this.precio.toFixed(2)}`;
    }
}

const producto1 = new Producto("Laptop", 999.99);
console.log(producto1.getInfo());