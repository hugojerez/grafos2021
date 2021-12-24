

// Async / await usage
const obtenerCSV = async () => {
    const csvFilePath = 'gtfs/routes.csv'
    const csv = require('csvtojson')
    csv()
        .fromFile(csvFilePath)
        .then((jsonObj) => {
            /**
             * [
             * 	{a:"1", b:"2", c:"3"},
             * 	{a:"4", b:"5". c:"6"}
             * ]
             */
        })

    const jsonArray = await csv().fromFile(csvFilePath);
    return jsonArray

}


const generarMapa = async (type = 'distance_in_meters', exclude = []) => {
    const estaciones = await obtenerCSV()

    const problema = {}
    for (const estacion of estaciones) {
        if (!exclude.includes(estacion.location_id)) {

            if (!problema[estacion.location_id]) {
                problema[estacion.location_id] = {}
            }
            if (estacion.west__station)
                problema[estacion.location_id][estacion.west__station] = estacion['west__' + type]
            if (estacion.east__station)
                problema[estacion.location_id][estacion.east__station] = estacion['east__' + type]

            if (estacion.south__station)
                problema[estacion.location_id][estacion.south__station] = estacion['south__' + type]

            if (estacion.north__station)
                problema[estacion.location_id][estacion.north__station] = estacion['north__' + type]

        }
    }
    return problema
}

module.exports = generarMapa  