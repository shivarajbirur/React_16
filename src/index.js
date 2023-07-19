import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import pi from "./math";

function PrecisionTwo() {
  return pi.toPrecision(3);
}

function PrecisionFive() {
  return pi.toPrecision(3);
}

const myElement = (
  <div>
    <h1>Value of Pi</h1>
    <ol>
      <li>
        <strong>Precision 10 - {pi}</strong>
      </li>
      <li>
        <strong>Precision 3 - {PrecisionTwo()}</strong>
      </li>
      <li>
        <strong>Precision 5 - {PrecisionFive()}</strong>
      </li>
    </ol>
  </div>
);
const root = createRoot(document.getElementById("root"));
root.render(myElement);
