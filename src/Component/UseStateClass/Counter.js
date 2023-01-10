import { useState } from "react";



const Counter = () => {
    const [count, setCount] = useState(0);
// setTimeout(
//   ()=>{
//     setCount(count+1);
//     console.log(count);
//   }, 1000
// )
  return (
    <>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </>
  );
};

export default Counter;
