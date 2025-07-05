import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const Card = ({ title }) => {
  return (
    <>
      <div className="card">
        <h2>{title}</h2>
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

export default App;
