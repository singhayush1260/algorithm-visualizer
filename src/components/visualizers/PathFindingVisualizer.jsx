import Node from "../utils/node/Node";
import {
  dijkstra,
  visitedNodes,
  shortestPathNodes,
} from "../../algorithms/path-finding/dijkstra";
import createGraph from "../../algorithms/utils/createGraph";
import { useEffect, useState } from "react";
import classes from './PathFindingVisualizer.module.scss';
const PathFindingVisualizer = () => {
  const [grid, setGrid] = useState(null);
  const [graph, setGraph] = useState(null);
  const [startNode, setStartNode] = useState(0);
  const [endNode, setEndNode] = useState(0);
  const [start, setStart] = useState(true);
  useEffect(() => {
    const graphData = createGraph(16, 40);
    setGraph(graphData.graph);
    setGrid(Array.from(graphData.graph));
  }, []);

  const handleClick = (idx) => {
    if (start) {
      setStartNode(idx);
      document.getElementById(`node-${idx}`).classList.add("node", "start");
    } else {
      setEndNode(idx);
      document.getElementById(`node-${idx}`).classList.add("node", "end");
    }

    setStart(!start);
  };

  const animateDijkstra = async () => {
    dijkstra(graph, 16 * 40, startNode, endNode);
    console.log("visited nodes", visitedNodes);
    console.log("shortestPathNodes", shortestPathNodes);

    for (let i = 0; i < visitedNodes.length; i++) {
      if (visitedNodes[i] == endNode) {
        animateShortestPath();
        break;
      }
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 4)
      );
      document
        .getElementById(`node-${visitedNodes[i]}`)
        .classList.add("node", "visited");
    }
  };
  const animateShortestPath = async () => {
    let ar = shortestPathNodes.trim().split(" ");
    for (let i = 0; i < ar.length; i++) {
      document.getElementById(`node-${ar[i]}`).classList.remove("visited");
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 100)
      );
      document.getElementById(`node-${ar[i]}`).classList.add("node", "path");
    }
  };

  return (
    <>
      <button onClick={animateDijkstra}>click</button>
      <div className={classes.grid}>
        {grid
          ? grid.map((node, idx) => {
              return (
                <div
                  onClick={() => {
                    handleClick(idx);
                  }}
                >
                  <Node id={idx} data={node} value={idx} />
                </div>
              );
            })
          : ""}
      </div>
    </>
  );
};
export default PathFindingVisualizer;
