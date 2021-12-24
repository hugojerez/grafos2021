
const dijkstra = require('./dijkstra.js')
const generarMapa = require('./generarMapa.js')

const problema = generarMapa("combination") // combination, distance_in_time, distance_in_meters
console.log(dijkstra(problema, "Patronato", 'Bellas Artes'))
  //console.log(problema)