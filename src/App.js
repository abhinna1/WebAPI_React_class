import { useState } from "react";


function App() {
  const [count, setCount] = useState(0);
  // setTimeout(
  //   ()=>{
  //     setCount(count+1);
  //     console.log(count);
  //   }, 1000
  // )
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {count}
        </p>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
      </header>
    </div>
  );
}

export default App;
