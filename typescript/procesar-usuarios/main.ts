type usuario = {
    nombre: string;
    edad: number;
    esAdmin: boolean;
}; 

function procesarUsuario (usuario: usuario): string {
    if (usuario.esAdmin) {
        return `Hola admin ${usuario.nombre}`;
    } else {
        return `Hola usuario ${usuario.nombre}`;
    }
}

const usuario1: usuario = {
    nombre: "Juan",
    edad: 30,
    esAdmin: true
};
console.log(procesarUsuario(usuario1));