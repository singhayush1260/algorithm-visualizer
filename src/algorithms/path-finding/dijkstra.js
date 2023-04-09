import PriorityQueue from"js-priority-queue";
 let visitedNodes=[];
 let shortestPathNodes=" ";
 function dijkstra(graph,vertices,source, destination)
{     
  console.log('inside dijkstra',graph)  
  console.log('source:',source);
  console.log('destination:',destination);
  let pq = new PriorityQueue({
      comparator: function (a, b) {
        return a.wsf - b.wsf;
      },
    });
    let visited = new Array(vertices);
    for (let i = 0; i <vertices; i++) {
      visited[i] = false;
    }
    pq.queue({ source, psf: source + " ", wsf: 0 });
    while (pq.length > 0) {
      let ob = pq.dequeue();
      if (visited[ob.source] == true) continue;
      visited[ob.source] = true;
      visitedNodes.push(ob.source);
      if (ob.source == destination){
        console.log(ob.source + " via " + ob.psf + " @ " + ob.wsf);
        shortestPathNodes=ob.psf;
      }
      console.log('before ob.source',ob)
      console.log('ob.source',ob.source)
      console.log('graph.get(ob.source)',graph.get(ob.source));
      graph.get(ob.source).forEach((w, d) => {
        if (visited[d] === false) {
          pq.queue({ source: d, psf: `${ob.psf}${d} `, wsf: ob.wsf + w });
        }
      });
    }
    return visitedNodes;
  }
export {dijkstra,visitedNodes,shortestPathNodes};
