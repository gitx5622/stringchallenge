import React, { useState } from "react";
import removeAnyDuplicates from "./challenge";
import "./index.scss";

const App = () => {
  const [string, setString] = useState("");

  const handleOnChange = (e) => {
    setString(e.target.value)
  }
  const result = removeAnyDuplicates(string)
  return (
    <div className="coding-challenge">
        <h1>Verb Education Limited Coding Challenge</h1>
        <h3>Enter your string with duplicates</h3>
      <input
          className="string-name"
          value={string}
          onChange={handleOnChange}
          placeholder="Enter string name"
      />
        <br/>
      <button className="custom-button">Your Answer down here</button>
      <h1>Result: {result}</h1>
    </div>
  );
}
export default App;
