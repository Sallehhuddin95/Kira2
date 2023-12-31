import { useState, ChangeEvent } from "react";
import { lotCalculator } from "../../assets/data/DataTypes";
import {
  dutiSetemRate,
  maxDutiSetem,
  bayaranPelepasanRate,
  maxBayaranPelepasan,
} from "../../assets/data/constants";

type FormData = lotCalculator;

function LotCalculator() {
  const [formData, setFormData] = useState<FormData>({
    amountToInvest: 0,
    stockPrice: 0,
    brokerageFee: 0,
    totalCost: 0,
    maxLot: 0,
  });

  const handleFieldChange = (
    fieldName: keyof FormData,
    value: number | string
  ) => {
    const valueAsNumber = parseFloat(value as string);
    if (
      ((fieldName === "amountToInvest" || fieldName === "stockPrice") &&
        valueAsNumber <= 0) ||
      (fieldName === "brokerageFee" && valueAsNumber < 0)
    ) {
      const capitalizedFieldName =
        fieldName === "amountToInvest"
          ? "Amount to Invest"
          : fieldName === "stockPrice"
          ? "Stock Price"
          : "Brokerage Fee";

      alert(`${capitalizedFieldName} must be a positive value`);
      return;
    }
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: parseFloat(value as string),
    }));
  };

  const calculateMaxLot = () => {
    const { amountToInvest, stockPrice, brokerageFee } = formData;

    if (amountToInvest <= 0 || stockPrice <= 0 || brokerageFee < 0) {
      alert(`The fields must be a positive value`);
      return;
    }

    const dutiSetem =
      stockPrice * dutiSetemRate * 100 > maxDutiSetem
        ? maxDutiSetem
        : stockPrice * dutiSetemRate;

    const bayaranPelepasan =
      stockPrice * bayaranPelepasanRate * 100 > maxBayaranPelepasan
        ? maxBayaranPelepasan
        : stockPrice * bayaranPelepasanRate;

    const costPerUnit =
      stockPrice +
      stockPrice * (dutiSetem + bayaranPelepasan + brokerageFee / 100);

    // Calculate the Max Lot based on inputs
    let maxLotValue = amountToInvest / (costPerUnit * 100);
    // Round down to the nearest integer
    maxLotValue = Math.floor(maxLotValue);

    const netTotalCost: number =
      parseFloat((costPerUnit * 100).toFixed(2)) * maxLotValue;

    setFormData((prevData) => ({
      ...prevData,
      totalCost: netTotalCost,
      maxLot: maxLotValue,
    }));
  };

  return (
    <div className="bg-zinc-300 rounded p-5 w-full md:w-2/4">
      <h1 className="font-bold text-xl">Lot Calculator</h1>
      <form className="m-3">
        <div className="text-left my-2 flex flex-col">
          <label>Amount to Invest:</label>
          <input
            className="bg-transparent border-black border-2 rounded ml-1"
            type="number"
            value={formData.amountToInvest}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleFieldChange("amountToInvest", e.target.value)
            }
          />
        </div>
        <div className="text-left my-2 flex flex-col">
          <label>Stock Price:</label>
          <input
            className="bg-transparent border-black border-2 rounded ml-1"
            type="number"
            value={formData.stockPrice}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleFieldChange("stockPrice", e.target.value)
            }
          />
        </div>
        <div className="text-left my-2 flex flex-col">
          <label>Brokerage Fee (%):</label>
          <input
            className="bg-transparent border-black border-2 rounded ml-1"
            type="number"
            value={formData.brokerageFee}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleFieldChange("brokerageFee", e.target.value)
            }
          />
        </div>
        <div className="text-left my-2 flex flex-col">
          <label>Total Cost:</label>
          <input
            className="bg-slate-200 border-slate-50 border-2 rounded ml-1"
            type="text"
            value={formData.totalCost}
            readOnly
          />
        </div>
        <div className="text-left my-2 flex flex-col">
          <label>Max Lot Can Purchase:</label>
          <input
            className="bg-slate-200 border-slate-50 border-2 rounded ml-1"
            type="text"
            value={formData.maxLot}
            readOnly
          />
        </div>
      </form>
      <button
        className="rounded border-black border-2 p-1 bg-blue-700"
        onClick={calculateMaxLot}
      >
        Calculate Max Lot
      </button>
    </div>
  );
}

export default LotCalculator;
