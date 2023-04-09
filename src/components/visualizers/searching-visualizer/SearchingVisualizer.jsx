import { useEffect, useState } from "react";
import Element from "../../utils/element/Element";
import classes from "./SearchingVisualizer.module.scss";
import linearSearch from "../../../algorithms/searching/linearSearch";
import { ToastContainer, toast } from "react-toastify";
const SearchingVisualizer = () => {
  const [size, setSize] = useState(10);
  const [array, setArray] = useState(null);
  const [searchKey, setSearchKey] = useState(0);

  useEffect(() => {
    let ar = [];
    for (let i = 0; i < size; i++) {
      ar.push(Math.floor(Math.random() * 100) + 2);
    }
    setArray(ar);
  }, [size]);

  const handleSearchKeyInput = () => {
    let key = Number(prompt("Enter search key:"));
    setSearchKey(key);
  };
  const startSearch = async () => {
    let foundIndex = await linearSearch(array, searchKey);
    if (foundIndex === -1) {
      toast.warn("Element not present in the array!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.success(`Element present at index ${foundIndex}`, {
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
  };
  return (
    <div className={classes.container}>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <button onClick={handleSearchKeyInput}>
        Enter the element to be searched
      </button>
      <button onClick={startSearch}>Start Search</button>
      <div className={classes.array_container}>
        {array
          ? array.map((e, idx) => {
              return <Element key={idx} value={e} />;
            })
          : ""}
      </div>
    </div>
  );
};
export default SearchingVisualizer;
