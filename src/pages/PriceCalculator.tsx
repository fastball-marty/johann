import React, { useState } from "react";
import "../styles/styles.css";
import { PriceConversionItem } from "../types/types";

const PriceCalculator = () => {
  const [item1, setItem1] = useState<PriceConversionItem>({
    quantity: "10",
    unit: "lb",
    price: "10",
  });

  const [item2, setItem2] = useState<PriceConversionItem>({
    quantity: "1",
    unit: "tsp",
    price: "0.01",
  });

  const unitToGrams: Record<string, number> = {
    lb: 453.6,
    gallon: 3785,
    liter: 1000,
    quart: 946,
    cup: 240,
    oz: 28.35,
    tbsp: 15,
    tsp: 5,
    g: 1,
  };

  const renderUnitOptions = () => {
    return Object.entries(unitToGrams).map(([unit]) => (
      <option key={unit} value={unit}>
        {unit}
      </option>
    ));
  };

  function handleUpdateItem1(key: string, value: string) {
    setItem1((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  function handleUpdateItem2(key: string, value: string) {
    setItem2((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  function convert() {
    const g1 = parseFloat(item1.quantity) * unitToGrams[item1.unit];
    const g2 = parseFloat(item2.quantity) * unitToGrams[item2.unit];

    const pricePerGram = parseFloat(item1.price ?? "") / g1;
    const p2 = pricePerGram * g2;

    handleUpdateItem2("price", p2.toFixed(2));
  }

  return (
    <>
      <p>
        <i>
          Enter an item and its price, and a target quantity to calculate its cost.
        </i>
      </p>

      <div id="calculator">
        <div className="row">
          <label>Quantity: </label>
          <input
            value={item1.quantity}
            onChange={(e) => handleUpdateItem1("quantity", e.target.value)}
          />
          <select
            value={item1.unit}
            onChange={(e) => handleUpdateItem1("unit", e.target.value)}
          >
            {renderUnitOptions()}
          </select>

          <label>Price: $</label>
          <input
            value={item1.price}
            onChange={(e) => handleUpdateItem1("price", e.target.value)}
          />
        </div>

        <div className="row">
          <label>Quantity: </label>
          <input
            value={item2.quantity}
            onChange={(e) => handleUpdateItem2("quantity", e.target.value)}
          />
          <select
            value={item2.unit}
            onChange={(e) => handleUpdateItem2("unit", e.target.value)}
          >
            {renderUnitOptions()}
          </select>
          
          <label>Price: $</label>
          <input value={item2.price} disabled />
        </div>

        <button onClick={convert}>Calculate</button>
      </div>

      <p className="footer">
        <i>I love you!</i>
      </p>
    </>
  );
};

export default PriceCalculator;
