function startQuickSort(array,speed) {
    let bars = document.querySelectorAll("#bar");
    let hr=[];
    array.forEach(e=>hr.push(e*4))
    quickSort(bars, array, hr, 0, array.length - 1,speed); 
    
  }
  
  async function quickSort(bars, ar, hr, l, r,speed) {
    if (l < r) {
      let i = await partition(bars, ar, hr, l, r,speed);
      bars[i].style.backgroundColor = " rgb(49, 226, 13)";
      quickSort(bars, ar, hr, l, i - 1,speed);
      quickSort(bars, ar, hr, i + 1, r,speed);
    }
  }
  async function partition(bars, ar, hr, l, r,speed) {
    let pivot = ar[l];
    let start = l;
    let end = r;
    while (start < end) {
      while (ar[start] <= pivot) {
        bars[start].style.background = "red";
  
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          },speed)
        );
        bars[start].style.backgroundColor = "  rgb(24, 190, 255)";
        start++;
      }
      while (ar[end] > pivot) {
        bars[end].style.background = "red";
  
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          },speed)
        );
        bars[end].style.backgroundColor = "  rgb(24, 190, 255)";
        end--;
      }
       let temp=0;
      if (start < end) {
        temp = ar[start];
        ar[start] = ar[end];
        ar[end] = temp;
        temp = hr[start];
        hr[start] = hr[end];
        hr[end] = temp;
  
        bars[start].style.height = `${hr[start]}px`;
        bars[start].innerText = ar[start];
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          },speed*10)
        );
        bars[end].style.height = `${hr[end]}px`;
        bars[end].innerText = ar[end];
      }
    }
    let temp = ar[end];
    ar[end] = ar[l];
    ar[l] = temp;
  
    temp = hr[end];
    hr[end] = hr[l];
    hr[l] = temp;
    await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    },speed*10)
  );
    bars[end].style.height = `${hr[end]}px`;
    bars[end].innerText = ar[end];
    bars[l].style.height = `${hr[l]}px`;
    bars[l].innerText = ar[l];
  
    //bars[end].style.backgroundColor = " rgb(49, 226, 13)";// light green
    return end;
  }
  export default startQuickSort;