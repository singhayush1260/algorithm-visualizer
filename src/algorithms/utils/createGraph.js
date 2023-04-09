class Graph {
    constructor(v) {
      this.vertices = v;
      this.graph = new Map();
    }
    addDirectedEdge(s, d, w) {
      if (this.graph.has(s)) {
        this.graph.get(s).set(d, w);
      } else {
        this.graph.set(s, new Map());
        this.graph.get(s).set(d, w);
      }
    }
    addUndirectedEdge(s, d, w) {
      this.addDirectedEdge(s, d, w);
      this.addDirectedEdge(d, s, w);
    }
    // printGraph() {
    //   this.graph.forEach((d, s) => {
    //     console.log(`Vertex ${s} is connected to vertices:`);
    //     d.forEach((w, v) => {
    //       console.log(`${v} via weight ${w}`);
    //     });
    //   });
    // }
  }

const createGraph=(rows,columns)=>{
    let graph=new Graph(rows*columns+1);
    let d=[]; let c=1;
    for(let i=0;i<rows;i++){
        let temp=[];
        for(let j=0;j<columns;j++){
            temp.push(c);
            c++;
        }
        d.push(temp);
    }
    let currentNode=0,leftNode=0,rightNode=0,bottomNode=0//,leftDiagonalNode=0,rightDiagonalNode=0;
    for(let i=0;i<rows;i++)
    {
    for(let j=0;j<columns;j++)
    {
    currentNode=d[i][j];
    leftNode=j>0?d[i][j-1]:-1;
    bottomNode=i!=rows-1?d[i+1][j]:-1;
    rightNode=j!=columns-1?d[i][j+1]:-1;
    if(currentNode!=-1&&leftNode!=-1)
    graph.addUndirectedEdge(currentNode,leftNode,1);
    if(currentNode!=-1&&bottomNode!=-1)
    graph.addUndirectedEdge(currentNode,bottomNode,1);
    if(currentNode!=-1&&rightNode!=-1)
    graph.addUndirectedEdge(currentNode,rightNode,1);
    //if(currentNode!=-1&&leftDiagonalNode!=-1)
    //grid.addUndirectedEdge(currentNode,leftDiagonalNode,1);
    //if(currentNode!=-1&&rightDiagonalNode!=-1)
    //grid.addUndirectedEdge(currentNode,rightDiagonalNode,1);
    currentNode=rightNode;
    }
    }
    return graph;
}
export default createGraph;