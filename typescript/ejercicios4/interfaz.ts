type usuario = {
    nombre: String,
    email?: String,
    activo: Boolean
}

function crearUsuario (user: usuario): String{
    return user.activo ? `Usuario ${user.nombre} con email ${user.email} está activo` : `Usuario ${user.nombre} con email ${user.email} no está activo`;
}

function mostrarEmail (usar: usuario): String {
    return usar.email ? `El email del usuario es ${usar.email}` : `El usuario no tiene email registrado`;
}
const usuario1: usuario = {
    nombre: "pedro",
    email: "pedrito@gmeail.com",
    activo: true 
}
const usuario2: usuario = {
    nombre: "borja",
    activo: false
}

console.log(crearUsuario(usuario1));
console.log(crearUsuario(usuario2));
console.log(mostrarEmail(usuario1));
console.log(mostrarEmail(usuario2));