async function selectionSort(speed) {
    let bars = document.querySelectorAll("#bar");
    // Assign 0 to min_idx
     let min_idx = 0;
     for (let i = 0; i < bars.length; i += 1) {
    
      // Assign i to min_idx
      min_idx = i;
    
      // light blue
      bars[i].style.backgroundColor = "#3B9AE1";
      for (let j = i + 1; j < bars.length; j += 1) {
    
        // Provide red color to the jth bar
        bars[j].style.backgroundColor = "#FC2947";
          
        // To pause the execution of code for 300 milliseconds
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, speed)
        );
    
        // To store the integer value of jth bar to let1 
        let val1 = parseInt(bars[j].innerHTML);
    
        // To store the integer value of (min_idx)th bar to let2 
        let val2 = parseInt(bars[min_idx].innerHTML);
          
        // Compare val1 & val2
        if (val1 < val2) {
          if (min_idx !== i) {
    
            // Provide skyblue color to the (min-idx)th bar
            bars[min_idx].style.backgroundColor = "#3B9AE1";
          }
          min_idx = j;
        } else {
    
          // Provide skyblue color to the jth bar
          bars[j].style.backgroundColor = "#3B9AE1";
        }
      }
    
      // To swap ith and (min_idx)th bar
      let temp1 = bars[min_idx].style.height;
      let temp2 = bars[min_idx].innerText;
      bars[min_idx].style.height = bars[i].style.height;
      bars[i].style.height = temp1;
      bars[min_idx].innerText = bars[i].innerText;
      bars[i].innerText = temp2;
        
      // To pause the execution of code for speed milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, speed)
      );
      
      // Provide skyblue color to the (min-idx)th bar
      bars[min_idx].style.backgroundColor = "#03C988";
    
      // Provide lightgreen color to the ith bar
      bars[i].style.backgroundColor = "#03C988";
    }
}
export default selectionSort;