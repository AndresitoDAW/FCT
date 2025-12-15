function procesarUsuario(usuario) {
    if (usuario.esAdmin) {
        return "Hola admin ".concat(usuario.nombre);
    }
    else {
        return "Hola usuario ".concat(usuario.nombre);
    }
}
var usuario1 = {
    nombre: "Juan",
    edad: 30,
    esAdmin: true
};
console.log(procesarUsuario(usuario1));
