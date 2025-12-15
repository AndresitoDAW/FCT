function crearUsuario(user) {
    return user.activo ? "Usuario ".concat(user.nombre, " con email ").concat(user.email, " est\u00E1 activo") : "Usuario ".concat(user.nombre, " con email ").concat(user.email, " no est\u00E1 activo");
}
function mostrarEmail(usar) {
    return usar.email ? "El email del usuario es ".concat(usar.email) : "El usuario no tiene email registrado";
}
var usuario1 = {
    nombre: "pedro",
    email: "pedrito@gmeail.com",
    activo: true
};
var usuario2 = {
    nombre: "borja",
    activo: false
};
console.log(crearUsuario(usuario1));
console.log(crearUsuario(usuario2));
console.log(mostrarEmail(usuario1));
console.log(mostrarEmail(usuario2));
