const personal = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'Nueva York',
        zip: 23413,
        lat: 43.23151,
        lng: 23.12412
    }
};


const persona2 = { ...persona };
persona2.nombre = 'Peter';

// console.table( persona );
console.log( persona );
console.log(persona2)