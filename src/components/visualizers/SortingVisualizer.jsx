import {useEffect, useState } from "react";
import Bar from "../utils/bar/Bar";
import bubbleSort from "../../algorithms/sorting/bubbleSort";
import selectionSort from "../../algorithms/sorting/selectionSort";
import insertionSort from "../../algorithms/sorting/insertionSort";
import startQuickSort from "../../algorithms/sorting/quickSort";
import startMergeSort from "../../algorithms/sorting/mergeSort";
import classes from "./SortingVisualizer.module.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SortingVisualizer = () => {
  const[isRunning,setIsRunning]=useState(false);
  const[algorithm,setAlgorithm]=useState("");
  const [array, setArray] = useState(null);
  const [num, setNum] = useState(31);
  const[speed,setSpeed]=useState(20);
  useEffect(() => {
    let arrayValues = [];
    for (let i = 0; i < num; i++) {
      const value = Math.floor(Math.random() * 100) + 5;
      arrayValues.push(value);
    }
    setArray(arrayValues);
  }, [num]);

const handleRange=(e)=>{
setNum(Number(e.target.value));
}


const handleSpeedChange=(e)=>{
    setSpeed(Number(e.target.value));
}

const startSort=()=>{
switch(algorithm){
case "bs":bubbleSort(speed); break;
case "ss":selectionSort(speed); break;
case "is":insertionSort(speed); break;
case "qs":startQuickSort(array,speed); break;
case "ms":startMergeSort(array,speed); break;
default: toast.warn('Please select an algorithm first!', {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
}
}
const handleAlgorithmSet=(e)=>{
console.log(e.target.value)
setAlgorithm(e.target.value)
}
  return (
    <>
    <ToastContainer position="top-center" autoClose={2000} hideProgressBar newestOnTop={false} closeOnClick rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    <div className={classes.settings}>
    <input type='range' disabled={isRunning} onChange={handleRange} min={5} max={30} step={5} value={num} className='custom-slider'/>
    <input type='range' disabled={isRunning} onChange={handleSpeedChange} min={10} step={20} value={speed} className='custom-slider'/>
    <select onChange={handleAlgorithmSet}>
        <option value="none" selected disabled hidden>Select Algorithm</option>
        <option value="bs">Bubble Sort</option>
        <option value="is">Insertion Sort</option>
        <option value="ss">Selection Sort</option>
        <option value="qs">Quick Sort</option>
        <option value="ms">Merge Sort</option>
    </select>
    <button onClick={startSort}>Sort</button>
    </div>
    <div className={classes.array}>
      {array
        ? array.map((element, idx) => {
            return (
              <Bar
                key={idx}
                value={element}
                height={element * 4}
                translateX={idx * 36}
                idx={"bar"}
              />
            );
          })
        : ""}
    </div>
    </>
  );
};
export default SortingVisualizer;
