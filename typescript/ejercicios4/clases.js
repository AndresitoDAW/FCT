var Producto = /** @class */ (function () {
    function Producto(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    Producto.prototype.getInfo = function () {
        return "Producto: ".concat(this.nombre, ", Precio: $").concat(this.precio.toFixed(2));
    };
    return Producto;
}());
var producto1 = new Producto("Laptop", 999.99);
console.log(producto1.getInfo());
