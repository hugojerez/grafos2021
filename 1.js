
const dijkstra = require('./dijkstra.js');
const generarMapa = require('./generarMapa.js');



(async () => {


  const problema = await generarMapa("time")
  console.log(await dijkstra(problema, "La Moneda", 'Manuel Montt'))


})()