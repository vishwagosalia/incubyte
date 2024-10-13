import React, { useState } from "react";
import './App.css';

export const add = (numbers, setResult) => {
    if (!numbers) return 0;
    const delimiter = ",|\\s|;|\\n";
    const nums = numbers.split(new RegExp(delimiter)).map(Number);

    const negatives = nums.filter((n) => n < 0);
    if (negatives.length) {
        setResult(null);
        throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
    }

    return nums.reduce((sum, num) => sum + num, 0);
  };


const StringCalculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setResult(add(input, setResult));
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Incubyte TDD Assessment</h1>
      <h2>String Calculator</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter numbers"
        />
        <button type="submit">Calculate</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
};

export default StringCalculator;
