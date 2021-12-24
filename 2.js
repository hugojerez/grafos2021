
const dijkstra = require('./dijkstra.js');
const generarMapa = require('./generarMapa.js');



  (async () => {


    const problema = await generarMapa("time") // combination, distance_in_time, distance_in_meters
    console.log(await dijkstra(problema, "La Moneda", 'Manuel Montt'))
    //console.log(problema)


  })()