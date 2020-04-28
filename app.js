const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'direccion d ela ciudad para obtener el clima'
    }
}).argv;

const getInfo = async(direccion) => {
    try {
        const coordenadas = await lugar.getLugarLatLog(direccion);
        const temp = await clima.getClima(coordenadas.lat, coordenadas.lng);
        return `el clima de ${coordenadas.direccion} es de ${temp}.`
    } catch (e) {
        return `no se puede obtener  clima de ${direccion}.`

    }

}
getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)



/*
lugar.getLugarLatLog(argv.direccion)
    .then(console.log);

clima.getClima()
    .then(console.log)
    .catch(console.log)
    */