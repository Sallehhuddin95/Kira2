import { useState, ChangeEvent } from "react";

interface FormData {
  yourWeight: number;
  yourHeight: number;
  bmi: number;
}

function BmiCalculator() {
  const [formData, setFormData] = useState<FormData>({
    yourWeight: 0,
    yourHeight: 0,
    bmi: 0,
  });

  const handleFieldChange = (
    fieldName: keyof FormData,
    value: number | string
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: parseFloat(value as string),
    }));
  };

  const calculateMaxLot = () => {
    const { yourHeight, yourWeight } = formData;
    let bmi = (yourWeight / (yourHeight * yourHeight)) * 10000;
    bmi = Math.round(bmi * 100) / 100;

    setFormData((prevData) => ({
      ...prevData,
      bmi,
    }));
  };

  return (
    <div className="bg-zinc-300 rounded p-5 w-full md:w-2/4">
      <h1 className="font-bold text-xl">BMI Calculator</h1>
      <form className="m-3">
        <div className="text-left my-2 flex flex-col">
          <label>Weight (Kg):</label>
          <input
            className="bg-transparent border-black border-2 rounded ml-1"
            type="number"
            value={formData.yourWeight}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleFieldChange("yourWeight", e.target.value)
            }
          />
        </div>
        <div className="text-left my-2 flex flex-col">
          <label>Height (cm):</label>
          <input
            className="bg-transparent border-black border-2 rounded ml-1"
            type="number"
            value={formData.yourHeight}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleFieldChange("yourHeight", e.target.value)
            }
          />
        </div>

        <div className="text-left my-2 flex flex-col">
          <label>Body Mass Index (BMI):</label>
          <input
            className="bg-slate-200 border-slate-50 border-2 rounded ml-1"
            type="text"
            value={formData.bmi}
            readOnly
          />
        </div>
      </form>
      <button
        className="rounded border-black border-2 p-1 bg-blue-700 mb-2"
        onClick={calculateMaxLot}
      >
        Calculate BMI
      </button>
      <hr />
      <div className="my-3 flex flex-col items-center">
        <p className="font-bold text-lg my-2">BMI Categories:</p>

        <table className="table-auto">
          <thead className="bg-slate-500">
            <tr>
              <th className="px-4 py-2">BMI</th>
              <th className="px-4 py-2">Weight Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-red-600">
              <td className="border px-4 py-2">Below 18.5</td>
              <td className="border px-4 py-2">Underweight</td>
            </tr>
            <tr className="bg-lime-600">
              <td className="border px-4 py-2">18.5 - 24.9</td>
              <td className="border px-4 py-2">Normal</td>
            </tr>
            <tr className="bg-yellow-300">
              <td className="border px-4 py-2">25.0 - 29.9</td>
              <td className="border px-4 py-2">Overweight</td>
            </tr>
            <tr className="bg-red-600">
              <td className="border px-4 py-2">30.0 and Above</td>
              <td className="border px-4 py-2">Obese</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BmiCalculator;
