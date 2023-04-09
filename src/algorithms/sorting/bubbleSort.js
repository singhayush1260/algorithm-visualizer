const bubbleSort = async (speed) => {
  let bars = document.querySelectorAll("#bar");
  for (var i = 0; i < bars.length - 1; i++) {
    var j = 0;
    for (j = 0; j < bars.length - i - 1; j++) {
      bars[j].style.background = "#FC2947";
      bars[j + 1].style.background = "#FC2947";
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, speed)
      );
      bars[j].style.backgroundColor = "#3B9AE1";
      var val1 = parseInt(bars[j].innerText);
      var val2 = parseInt(bars[j + 1].innerText);
      console.log("value", bars[j].innerText);
      if (val1 > val2) {
        var temp1 = bars[j].style.height;
        var temp2 = bars[j].innerText;
        bars[j].style.height = bars[j + 1].style.height;
        bars[j + 1].style.height = temp1;
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, speed)
        );
        bars[j].innerText = bars[j + 1].innerText;
        bars[j + 1].innerText = temp2;
      }
    }
    bars[j].style.backgroundColor = "#03C988"; 
  }
  bars[0].style.backgroundColor = "#03C988"; 
};
export default bubbleSort;
