const linearSearch = async (ar,key) => {
    let foundIndex=-1;
    console.log('inside ls')
    let found = false;
    const nodes = document.querySelectorAll("#array-element");
    console.log(nodes)
    let i;
    for (i = 0; i < nodes.length; i++) {
      if (i > 0) {
        nodes[i - 1].classList.remove("visited");
      }
      nodes[i].classList.add("visited");
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 400)
      );
  
      if (key === ar[i]) {
        nodes[i].classList.remove("visited");
        nodes[i].classList.add("found");
        found=true;
        foundIndex=i;
        break;
      }
    }
    if(found){
        return foundIndex;
    }
    return foundIndex;
  };
  export default linearSearch;