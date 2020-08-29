const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

console.log(argv.direccion);

// lugar.getlugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima();

const getInfo = async(direccion) => {
    try {
        const coords = lugar.getlugarLatLng(argv.direccion);
        const temp = await clima.getClima(75, 45);
        return `El Clima de MAQUETA ES UNA MAQUETA ${temp}`;
    } catch (error) {
        retunr `No se pudo determinar el clima de ese lugar`
    }



}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)