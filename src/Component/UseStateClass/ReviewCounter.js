import { useState } from "react";

const ReviewCounter = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [sum,setSum]=useState(0)
  const [average, setAverage] = useState(0);

  const updateAverage = () => {
    setAverage((good + bad + neutral) / 3);
  };
  const totalsum=()=>{
    // setSum
    setSum(good+bad+neutral)
  }
  return (
    <>
      <section>
        {/* <h1>Actions</h1> */}
        <h1>Action</h1>
        <button
          onClick={() => {
            setGood(good + 1);
            // updateAverage();
            totalsum()
          }}
        >
          Good
        </button>
        <button
          onClick={() => {
            setNeutral(neutral + 1);
            // updateAverage();
            // setAverage()
            totalsum()
          }}
        >
          Neutral
        </button>
        <button
          onClick={() => {
            setBad(bad + 1);
            // updateAverage();
            totalsum()
            // setBad(average-1);
          }}
        >
          Bad
        </button>
      </section>

      <section>
        <h1>Give Feedback</h1>
        <ul>
          <li>Good: {good}</li>
          <li>Neural: {neutral}</li>
          <li>Bad: {bad}</li>
        </ul>
      </section>
      <section>
        <h1>Sum: {sum}</h1>
        <h1>Average: {average}</h1>
      </section>
    </>
  );
};

export default ReviewCounter;
