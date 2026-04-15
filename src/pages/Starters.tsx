import React, { useState } from "react";
import "../styles/styles.css";

const Starters = () => {
  const [item1, setItem1] = useState("");
  const [item2, setItem2] = useState("");
  const [metric1, setMetric1] = useState("lb");
  const [metric2, setMetric2] = useState("tsp");
  const [price1, setPrice1] = useState("");
  const [price2, setPrice2] = useState("");

  function convert() {
    const q1 = parseFloat(item1);
    const q2 = parseFloat(item2);
    const p1 = parseFloat(price1);

    if (!q1 || !q2 || !p1 || isNaN(q1) || isNaN(q2) || isNaN(p1)) {
      alert("Please enter numbers only");
      return;
    }

    const unitToGrams: Record<string, number> = {
      lb: 453.6,
      gallon: 3785,
      liter: 1000,
      quart: 946,
      cup: 240,
      oz: 28.35,
      tbsp: 15,
      tsp: 5,
    };

    // convert both qtys to grams
    const grams1 = q1 * unitToGrams[metric1];
    const grams2 = q2 * unitToGrams[metric2];

    // calculate p2
    const pricePerGram = p1 / grams1;
    const p2 = pricePerGram * grams2;

    setPrice2(`$${p2.toFixed(2)}`);
  }

  return (
    <>
      <p>
        <i>Enter an item and its price, and a quantity to convert to.</i>
      </p>
      <div id="calculator">
        <div className="row">
          <label>Item Quantity: </label>
          <input value={item1} onChange={(e) => setItem1(e.target.value)} />
          <select value={metric1} onChange={(e) => setMetric1(e.target.value)}>
            <option value="lb">lb</option>
            <option value="gallon">gallon</option>
            <option value="liter">liter</option>
            <option value="quart">quart</option>
            <option value="cup">cup</option>
            <option value="oz">oz</option>
            <option value="tbsp">tbsp</option>
            <option value="tsp">tsp</option>
          </select>
          <label>Price: </label>
          <input value={price1} onChange={(e) => setPrice1(e.target.value)} />
        </div>

        <div className="row">
          <label>Item Quantity: </label>
          <input value={item2} onChange={(e) => setItem2(e.target.value)} />
          <select value={metric2} onChange={(e) => setMetric2(e.target.value)}>
            <option value="lb">lb</option>
            <option value="gallon">gallon</option>
            <option value="liter">liter</option>
            <option value="quart">quart</option>
            <option value="cup">cup</option>
            <option value="oz">oz</option>
            <option value="tbsp">tbsp</option>
            <option value="tsp">tsp</option>
          </select>
          <label>Price: </label>
          <input value={price2} disabled={true} />{" "}
        </div>

        <button onClick={convert}>Go</button>

        <p className="footer">
          <i>I love you!</i>
        </p>
      </div>
    </>
  );
};

export default Starters;
