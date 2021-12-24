
const dijkstra = require('./dijkstra.js');
const generarMapa = require('./generarMapa.js');



  (async () => {


    const problema = await generarMapa("distance_in_time") // combination, distance_in_time, distance_in_meters
    console.log(dijkstra(problema, "Matta", 'Bellas Artes'))
    //console.log(problema)


  })()