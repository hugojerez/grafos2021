

// Async / await usage
const obtenerCSV = async () => {
    const csvFilePath = 'gtfs/stopTimes.csv'
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
// console.log()
module.exports = obtenerCSV