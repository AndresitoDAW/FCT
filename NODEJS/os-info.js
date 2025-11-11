const os = require('node:os')

console.log('Informnacion del sistema operativo:')
console.log('---------------------------------------')

console.log('Nombre del SO', os.platform())
console.log('Version del SO', os.release())
console.log('arquitectura del SO', os.arch())
console.log('CpUs', os.cpus())
console.log('Memoria libre', os.freemem())
console.log('Memoria total', os.totalmem())
console.log('uptime', os.uptime() / 60 / 60)

