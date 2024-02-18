import { useState } from "react";
import { compoundingFundInput } from "../../../assets/data/DataTypes";
import { useAppDispatch } from "../../../app/hook";
import { calculateCompoundingFund } from "../../../features/compoundingfund/compoundingFundSlice";

type FormData = compoundingFundInput;

function CompoundingCalculator() {
  const dispatch = useAppDispatch();

  // read from local storage
  const compoundingValueInput = localStorage.getItem("compoundingValueInput");
  const finalCapital = localStorage.getItem("finalCapital");
  const compoundingValue = compoundingValueInput
    ? JSON.parse(compoundingValueInput)
    : {};

  const finalCapitalValue = finalCapital ? parseFloat(finalCapital) : 0;

  // const { isSuccess } = useAppSelector((state) => state.compoundingFund);

  const [formData, setFormData] = useState<FormData>({
    initialCapital: compoundingValue.initialCapital || 0,
    monthlyContribution: compoundingValue.monthlyContribution || 0,
    annualReturn: compoundingValue.annualReturn || 0,
    yearsToGrow: compoundingValue.yearsToGrow || 0,
    finalCapital: finalCapitalValue || 0,
  });

  const handleFieldChange = (
    fieldName: keyof FormData,
    value: number | string
  ) => {
    const valueAsNumber = parseFloat(value as string);
    if (valueAsNumber < 0) {
      const capitalizedFieldName =
        fieldName === "initialCapital"
          ? "Initial Capital"
          : fieldName === "monthlyContribution"
          ? "Monthly Contribution"
          : fieldName === "annualReturn"
          ? "Annual Return"
          : "Years To Grow";

      alert(`${capitalizedFieldName} must be a positive value`);
      return;
    }
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: parseFloat(value as string),
    }));
  };

  const calculateFinalCapital = () => {
    const finalCapital = formData.initialCapital;
    const monthlyContribution = formData.monthlyContribution;
    const annualReturn = formData.annualReturn;
    const yearsToGrow = formData.yearsToGrow;

    const monthlyReturn = annualReturn / 12 / 100;
    const monthsToGrow = yearsToGrow * 12;

    let total = finalCapital;
    for (let i = 0; i < monthsToGrow; i++) {
      total = (total + monthlyContribution) * (1 + monthlyReturn);
    }

    setFormData((prevData) => ({
      ...prevData,
      finalCapital: total,
    }));

    dispatch(calculateCompoundingFund(formData));
  };

  return (
    <div className="bg-zinc-300 rounded p-5 w-full ">
      <h1 className="font-bold text-xl">Compounding Calculator</h1>
      <form className="m-3">
        <div className="text-left my-2 flex flex-col">
          <label>Initial Capital:</label>
          <input
            className="bg-transparent border-black border-2 rounded ml-1"
            type="number"
            value={formData.initialCapital}
            onChange={(e) =>
              handleFieldChange("initialCapital", parseFloat(e.target.value))
            }
          />
        </div>
        <div className="text-left my-2 flex flex-col">
          <label>Monthly Contribution:</label>
          <input
            className="bg-transparent border-black border-2 rounded ml-1"
            type="number"
            value={formData.monthlyContribution}
            onChange={(e) =>
              handleFieldChange(
                "monthlyContribution",
                parseFloat(e.target.value)
              )
            }
          />
        </div>
        <div className="text-left my-2 flex flex-col">
          <label>Annual Return (%):</label>
          <input
            className="bg-transparent border-black border-2 rounded ml-1"
            type="number"
            value={formData.annualReturn}
            onChange={(e) =>
              handleFieldChange("annualReturn", parseFloat(e.target.value))
            }
          />
        </div>

        <div className="text-left my-2 flex flex-col">
          <label>Years To Grow:</label>
          <input
            className="bg-transparent border-black border-2 rounded ml-1"
            type="number"
            value={formData.yearsToGrow}
            onChange={(e) =>
              handleFieldChange("yearsToGrow", parseFloat(e.target.value))
            }
          />
        </div>
        <div className="text-left my-2 flex flex-col">
          <label>Final Capital:</label>
          <input
            className="bg-slate-200 border-slate-50 border-2 rounded ml-1"
            type="text"
            value={
              formData.finalCapital
                ? formData.finalCapital.toFixed(2)
                : formData.finalCapital
            }
            readOnly
          />
        </div>
      </form>
      <button
        className="rounded border-black border-2 p-1 bg-blue-700"
        onClick={calculateFinalCapital}
      >
        Calculate Final Capital
      </button>
    </div>
  );
}

export default CompoundingCalculator;
