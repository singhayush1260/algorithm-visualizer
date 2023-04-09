
let arrayValues = []; // to store random values
const generateBars=(num)=>{
  for (let i = 0; i < num; i++) {
    const value = Math.floor(Math.random() * 100) + 5;
    arrayValues.push(value);
  }
 // console.log('from gen array',arrayValues);
  return arrayValues;
}
export {generateBars};