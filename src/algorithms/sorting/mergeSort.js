
function startMergeSort(array,speed) {
  let bars = document.querySelectorAll("#bar");
  let hr=[];
  array.forEach(e=>hr.push(e*4))
  mergeSort(array, hr, bars, 0, array.length - 1,speed);
}

async function mergeSort(ar, hr, bars, l, r,speed) {
  if (l >= r) return;
  var m = l + parseInt((r - l) / 2);
  await mergeSort(ar, hr, bars, l, m,speed);
  await mergeSort(ar, hr, bars, m + 1, r,speed);
  await merge(ar, hr, bars, l, m, r,speed);
}

async function merge(ar, hr, bars, l, m, r,speed) {
  let n1 = m - l + 1;
  let n2 = r - m;
  let left = new Array(n1);
  let right = new Array(n2);
  let i = 0,j=0,k=0;
  for (i = 0; i < n1; i++) {
    left[i] = ar[l + i];

    bars[l + 1].style.background = "red";
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, speed)
    );
    bars[l + 1].style.backgroundColor = "  rgb(24, 190, 255)";
  }
  for (i = 0; i < n2; i++) {
    right[i] = ar[m + 1 + i];
    bars[m + 1 + i].style.background = "yellow";
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, speed)
    );
    bars[m + 1 + i].style.backgroundColor = "  rgb(24, 190, 255)";
  }
  i = 0, j = 0, k = l;
  let temp=0;
  while (i < n1 && j < n2) {
    if (left[i] <= right[j]) {
      ar[k] = left[i];
      temp = bars[k].style.height;
      bars[k].style.height = `${left[i] * 4}px`;

      bars[k].style.background = " rgb(49, 226, 13)";
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, speed)
      );
      bars[k].innerText = `${left[i]}`;
      left[i] = temp;
      i++;
    } else {
      ar[k] = right[j];
      temp = bars[k].style.height;
      bars[k].style.height = `${right[j] * 4}px`;

      bars[k].style.background = " rgb(49, 226, 13)";
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, speed)
      );
      //bars[k].style.backgroundColor = "  rgb(24, 190, 255)";

      bars[k].innerText = `${right[j]}`;
      right[j] = temp;
      j++;
    }
    k++;
  }
  while (i < n1) {
    ar[k] = left[i];
    temp = bars[k].style.height;
    bars[k].style.height = `${left[i] * 4}px`;
    bars[k].style.background = " rgb(49, 226, 13)";
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, speed)
    );
    //bars[k].style.backgroundColor = "  rgb(24, 190, 255)";
    bars[k].innerText = `${left[i]}`;
    left[i] = temp;
    i++;
    k++;
  }
  while (j < n2) {
    ar[k] = right[j];
    temp = bars[k].style.height;
    bars[k].style.height = `${right[j] * 4}px`;
    bars[k].style.background = " rgb(49, 226, 13)";
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, speed)
    );
    bars[k].innerText = `${right[j]}`;
    right[j] = temp;
    j++;
    k++;
  }
}
export default startMergeSort;