console.warn('creando un objeto literas')

const personaje = {
    nombre: 'toni stark',
    codeName: 'Ironman',
    estaVivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.7,
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'malibu california'
    },
    'ultima-pelicula': 'End Game',
}
// console.warn ('accediendo al objeto y sus propiedades')
// console.log(personaje)
// console.log(`Nombre: ${personaje.nombre}`)
// console.log(`Apodo: ${personaje['codeName']}`)
// console.log(`Edad: ${personaje.edad}`)
// console.log(`Latitud: ${personaje.coords.lat}`)

// const x = 'estaVivo'
// console.log(`Esta vivo?: ${personaje[x]}`)
// console.log(`ultima pelicula: ${personaje['ultima-pelicula']}`)


// console.warn('Borrando una propiedad del objeto')
// delete personaje.edad
// console.log({ personaje })

// console.warn('Creando una nueva propiedad del objeto')
// personaje.casado = false

console.log(`Cantidad de trajes: ${personaje.trajes.length}`)
console.log(`tercer traje: ${personaje.trajes[2]}`)







