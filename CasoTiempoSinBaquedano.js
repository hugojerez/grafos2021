
const dijkstra = require('./dijkstra.js')
const generarMapa = require('./generarMapa.js')

const problema = generarMapa("distance_in_time",["Universidad de Chile"]) // combination, distance_in_time, distance_in_meters
console.log(dijkstra(problema, "San Pablo", 'Ñuñoa'))
  //console.log(problema)