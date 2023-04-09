async function insertionSort(speed) {
    let bars = document.querySelectorAll("#bar");
    for (let i = 1; i < bars.length; i++) {
      let key = parseInt(bars[i].innerHTML);
      let tempHeight = bars[i].style.height;
      let j = i - 1;
      //let val=parseInt(bars[j].innerHTML);
      bars[i].style.background = "red";
      while (j >= 0 && parseInt(bars[j].innerHTML) > key) {
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, speed)
        );
        bars[j + 1].style.height = bars[j].style.height;
        bars[j + 1].innerHTML = parseInt(
          bars[j].innerHTML
        );
        j--;
      }
      for (let k = 0; k <= i; k++) {
        bars[k].style.backgroundColor = " rgb(49, 226, 13)"; // light green
      }
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, speed)
      );
      bars[i].style.backgroundColor = "  rgb(24, 190, 255)";
      bars[j + 1].style.height = tempHeight;
      bars[j + 1].innerHTML = key;
    }
    bars[bars.length-1].style.backgroundColor = " rgb(49, 226, 13)";
  }
  export default insertionSort;