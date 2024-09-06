import { useState, useEffect } from "react";

export default function Counter() {
  let [countx, setCountx] = useState(0);
  let [county, setCounty] = useState(0);

  let incCountx = () => {
    setCountx((currCount) => currCount + 1);
  };
  let incCounty = () => {
    setCounty((currCount) => currCount + 1);
  };

  useEffect(
    function printSomething() {
      console.log("This a useEffect or Side Effect");
    },
    // [countx, county]
    []
  );

  return (
    <div>
      <h3>CountX: {countx}</h3>
      <button onClick={incCountx}>+1</button>
      <h3>CountY: {county}</h3>
      <button onClick={incCounty}>+1</button>
    </div>
  );
}
