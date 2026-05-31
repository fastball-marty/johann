import React, { useState } from "react";
import "../styles/styles.css";
import { PriceConversionItem } from "../types/types";

const UnitConverter = () => {
  const [item1, setItem1] = useState<PriceConversionItem>({
    quantity: "1",
    unit: "tbsp",
  });

  const [item2, setItem2] = useState<PriceConversionItem>({
    quantity: "3",
    unit: "tsp",
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
    const p2 = parseFloat(item1.quantity) * unitToGrams[item1.unit] / unitToGrams[item2.unit]

    handleUpdateItem2("quantity", p2.toFixed(2));
  }

  return (
    <>
      <p>
        <i>
          Enter a quantity and its unit, and a target unit to convert it to.
        </i>
      </p>

      <div id="calculator">
        <div className="unit-row">
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
        </div>

        <div className="unit-row">
          <label>Quantity: </label>
          <input
            value={item2.quantity}
            disabled
          />
          <select
            value={item2.unit}
            onChange={(e) => handleUpdateItem2("unit", e.target.value)}
          >
            {renderUnitOptions()}
          </select>
        </div>

        <button onClick={convert} onKeyDown={(e) => e.key === "Enter" ? convert : ''}>Calculate</button>
      </div>
    </>
  );
};

export default UnitConverter;
