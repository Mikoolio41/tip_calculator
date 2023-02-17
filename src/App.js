import { useState } from "react";
import "./App.css";

export default function App() {
  const [subtotal, setSubtotal] = useState(0);
  const [numDiners, setNumDiners] = useState(0);
  const [tipPercentage, setTipPercetnage] = useState(0);
  const [result, setResult] = useState({});

  const submit = (e) => {
    e.preventDefault();
    if (+subtotal <= 0 || +numDiners <= 0 || +tipPercentage <= 0) {
      return;
    }
    const total = +subtotal * (1 + +tipPercentage);
    setResult({ total, totalPerDiner: +total / +numDiners });
  };

  return (
    <div className="App">
      <h1>Tip Calulator</h1>
      <form onSubmit={submit}>
        <fieldset className="subtotal">
          <label>subtotal</label>
          <input
            value={subtotal}
            onChange={(e) => setSubtotal(e.target.value)}
          />
        </fieldset>
        <fieldset className="diners">
          <label>number of people sharing the bill</label>
          <input
            value={numDiners}
            onChange={(e) => setNumDiners(e.target.value)}
          />
        </fieldset>
        <fieldset className="percentage">
          <label>tip percentage</label>
          <select
            className="selectList"
            value={tipPercentage}
            onChange={(e) => setTipPercetnage(e.target.value)}
          >
            <option value="0">0%</option>
            <option value="0.1">10%</option>
            <option value="0.12">12%</option>
            <option value="0.15">15%</option>
            <option value="0.2">20%</option>
          </select>
        </fieldset>
        <button type="submit">Calculate</button>

        <p>
          total:
          <span>{result.total && result.total.toFixed(2)}</span>
        </p>
        <p>
          total per diner:
          <span>{result.totalPerDiner && result.totalPerDiner.toFixed(2)}</span>
        </p>
      </form>
    </div>
  );
}
