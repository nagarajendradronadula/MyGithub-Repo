import { useState } from "react";

export default function Count() {
//   let arr = useState(0);
//   console.log(arr);

// let [stateVariable, setStateVariable] = useState(initialState);
let [count, setCount] = useState(0); //initialization
console.log("Component is rendered");
console.log(count);

  // let count = 0;
  function incCount() {
    setCount((currCount) => {
      return currCount + 1;
    } );
    setCount((currCount) => {
      return currCount + 1;
    })
    //   count += 1;
      // console.log(count);
  }

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={incCount}>Count Increment</button>
    </div>
  );
}
