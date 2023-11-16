import React, { useState, ChangeEvent } from "react";

interface FormData {
  amountToInvest: number;
  stockPrice: number;
  brokerageFee: number;
  maxLot: number;
}

function LotCalculator() {
  const [formData, setFormData] = useState<FormData>({
    amountToInvest: 0,
    stockPrice: 0,
    brokerageFee: 0,
    maxLot: 0,
  });

  const dutiSetem = 0.001;
  const bayaranPelepasan = 0.0003;

  const handleFieldChange = (
    fieldName: keyof FormData,
    value: number | string
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: parseFloat(value as string),
    }));

    // save to local storage
    // localStorage.setItem("amountToInvest", formData.amountToInvest.toString());
    // localStorage.setItem("stockPrice", formData.stockPrice.toString());
    // localStorage.setItem("brokerageFee", formData.brokerageFee.toString());
  };

  const calculateMaxLot = () => {
    const { amountToInvest, stockPrice, brokerageFee } = formData;
    const costPerUnit =
      stockPrice +
      stockPrice * (dutiSetem + bayaranPelepasan + brokerageFee / 100);

    // Calculate the Max Lot based on inputs
    let maxLotValue = amountToInvest / (costPerUnit * 100);
    // Round down to the nearest integer
    maxLotValue = Math.floor(maxLotValue);

    setFormData((prevData) => ({
      ...prevData,
      maxLot: maxLotValue,
    }));
  };

  return (
    <div className="bg-zinc-300 rounded p-5 w-2/4">
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
