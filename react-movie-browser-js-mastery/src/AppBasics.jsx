import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const Card = ({ title }) => {
  // inside useState(this indicates default value of variable)
  // each card manages its own hasLiked state for itself
  const [hasLiked, setHasLiked] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`);
  }, [hasLiked]); // this is an effect dependency, that only fire useEffect when hasLiked variable has changed

  useEffect(() => {
    console.log("Card Rendered");
  }, []); // this is a use effct that is only triggered at the mounting of this component. it runs only once

  return (
    <>
      <div
        className="card"
        // you take prevState to update and not the variable directly b/c react state updates are async and batched
        // if you called setCount(count+1) multiple times, it may re-use stale values
        onClick={() => setCount((prevState) => prevState + 1)}
      >
        <h2>
          {title} <br />
          {count || null}
        </h2>
        <button onClick={() => setHasLiked((prevLikeState) => !prevLikeState)}>
          {hasLiked ? "❤️" : "🤍"}
        </button>
      </div>
    </>
  );
};

const App = () => {
  return (
    <>
      <div className="card-container">
        <Card title="Star Wars" rating={5} isCool={true} />
        <Card title="One Piece" rating={10} isCool={true} />
        <Card title="The Lion King" rating={5} isCool={true} />
      </div>
    </>
  );
};

export default AppBasics;
