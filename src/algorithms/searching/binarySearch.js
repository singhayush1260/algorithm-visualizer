const binarySearch = async (ar) => {
    let k = Number(prompt("Enter the number to be searched"));
    let found = false;
    const nodes = document.querySelectorAll("#node");
    let l=0,r=nodes.length-1;
    while(l<=r){
        let mid=(l+r)/2;
        mid=mid | 0;
        nodes[mid].classList.add("node", "visited");
        await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 500)
      );
      nodes[mid].classList.remove("visited");
        if(k==ar[mid]){
            found=true;
            l=mid;
            nodes[mid].classList.add("node", "found");
            break;
        }
        else if(k>ar[mid]){
            await new Promise((resolve) =>
            setTimeout(() => {
              resolve();
            }, 500)
          );
           for(let i=l;i<=mid;i++){
            console.log(i)
            nodes[i].classList.add('node','ignore')
           }
            l=mid+1;
        }
        else{
            await new Promise((resolve) =>
            setTimeout(() => {
              resolve();
            }, 500)
          );
           for(let i=mid;i<=r;i++){
            console.log(i)
            nodes[i].classList.add('node','ignore')
           }
            r=mid-1;
        }
    }
    if (found === false) {
      nodes[nodes.length - 1].classList.remove("visited");
      message.innerHTML = `Element not found.`;
    } else {
      message.innerHTML = `Element found at index ${l}`;
    }
  };
  