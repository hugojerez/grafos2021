const tx = require("./stopTimes")

let encontrarLaDistanciaMasCorta = (distances, visited) => {
  // Crear un valor por defecto para la ruta más corta
  let shortest = null;

  // para cada nodo en el objeto de distancias
  for (let node in distances) {
    // si no se ha asignado ningún nodo al más corto todavía
    // o si la distancia del nodo actual es menor que la actual más corta
    let currentIsShortest =
      shortest === null || distances[node] < distances[shortest];

    // y si el nodo actual está en el conjunto no visitado
    if (currentIsShortest && !visited.includes(node)) {
      // actualizar más corto para ser el nodo actual
      shortest = node;
    }
  }
  return shortest;
};
let encontrarElCaminoMasCorto = async (graph, startNode, endNode) => {
  const tiemposDeCombinacion = await tx()
  // rastrear distancias desde el nodo de inicio usando un objeto hash
  let distances = {};
  distances[endNode] = "Infinity";
  distances = Object.assign(distances, graph[startNode]);// track paths using a hash object
  let parents = { endNode: null };
  for (let child in graph[startNode]) {
    parents[child] = startNode;
  }

  // recopilar nodos visitados
  let visited = [];// encontrar el nodo más cercano
  let node = encontrarLaDistanciaMasCorta(distances, visited);

  // para este código:
  while (node) {
    // encontrar su distancia desde el nodo de inicio y sus nodos secundarios
    let distance = distances[node];
    let children = graph[node];

    let previousChild = null

    // para cada uno de esos nodos secundarios:
    for (let child in children) {




      // asegurarse de que cada nodo hijo no sea el nodo de inicio
      if (String(child) === String(startNode)) {
        continue;
      } else {
        let costoStopTime = 0
        let buscar = tiemposDeCombinacion.find(a => {
         
           if (a.from === previousChild &&
             a.to === child || a.to === previousChild &&
             a.from === child) {
             return true

           }
        })
        if (buscar) {
          costoStopTime = 1 * buscar.time
        }
        // guardar la distancia desde el nodo inicial hasta el nodo hijo
        let newdistance = Number(distance) + Number(children[child]) + costoStopTime;// si no hay una distancia registrada desde el nodo de inicio al nodo secundario en el objeto de distancias
        // o si la distancia registrada es más corta que la distancia almacenada previamente desde el nodo de inicio al nodo secundario
        if (!distances[child] || distances[child] > newdistance) {
          // guarda la distancia al objeto
          distances[child] = newdistance;
          // guardar el camino
          parents[child] = node;

        }
        previousChild = child

      }


    }
    // mover el nodo actual al conjunto visitado
    visited.push(node);// muévete al nodo vecino más cercano
    node = encontrarLaDistanciaMasCorta(distances, visited);


  }

  // using the stored paths from start node to end node
  // registrar el camino más corto
  let shortestPath = [endNode];
  let parent = parents[endNode];
  while (parent) {
    shortestPath.push(parent);
    parent = parents[parent];
  }
  shortestPath.reverse();



  // registrar el camino más corto este es el camino más corto
  let results = {
    cost: Math.floor(distances[endNode] / 60) + ' minutos ' + Math.round(distances[endNode] % 60) + ' segundos',
    path: shortestPath,
  };
  // return the shortest path & the end node's distance from the start node
  return results;
};

//console.log(dijkstra(problem));
module.exports = encontrarElCaminoMasCorto