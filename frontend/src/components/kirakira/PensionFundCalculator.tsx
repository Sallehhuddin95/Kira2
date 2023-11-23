import { useState } from "react";

function PensionFundCalculator() {
  const [formData, setFormData] = useState({
    initialCapital: 0,
    monthlySalary: 0,
    annualSalaryRaise: 0,
    employeeContribution: 0,
    employerContribution: 0,
    annualReturn: 0,
    yearsUntilRetire: 0,
    finalCapital: 0,
  });

  const handleFieldChange = (fieldName: string, value: number) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const calculateFinalCapital = () => {
    const {
      initialCapital,
      monthlySalary,
      annualSalaryRaise,
      employeeContribution,
      employerContribution,
      annualReturn,
      yearsUntilRetire,
    } = formData;

    // Perform pension fund calculations here
    let totalContribution = 0;

    for (let year = 1; year <= yearsUntilRetire; year++) {
      const annualContribution =
        monthlySalary *
        12 *
        (1 + annualSalaryRaise / 100) *
        (employeeContribution / 100 + employerContribution / 100);

      totalContribution += annualContribution;

      // Apply annual return to the total
      totalContribution *= 1 + annualReturn / 100;
    }

    const finalCapital = initialCapital + totalContribution;

    // Update state with calculated values
    setFormData((prevData) => ({
      ...prevData,
      finalCapital,
    }));
  };

  return (
    <div className="bg-zinc-300 rounded p-5 w-full md:w-2/4">
      <h1 className="font-bold text-xl">Pension Fund Calculator</h1>
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
          <label>Monthly Salary:</label>
          <input
            className="bg-transparent border-black border-2 rounded ml-1"
            type="number"
            value={formData.monthlySalary}
            onChange={(e) =>
              handleFieldChange("monthlySalary", parseFloat(e.target.value))
            }
          />
        </div>
        <div className="text-left my-2 flex flex-col">
          <label>Annual Salary Raise (%):</label>
          <input
            className="bg-transparent border-black border-2 rounded ml-1"
            type="number"
            value={formData.annualSalaryRaise}
            onChange={(e) =>
              handleFieldChange("annualSalaryRaise", parseFloat(e.target.value))
            }
          />
        </div>
        <div className="text-left my-2 flex flex-col">
          <label>Employee Contribution (%):</label>
          <input
            className="bg-transparent border-black border-2 rounded ml-1"
            type="number"
            value={formData.employeeContribution}
            onChange={(e) =>
              handleFieldChange(
                "employeeContribution",
                parseFloat(e.target.value)
              )
            }
          />
        </div>
        <div className="text-left my-2 flex flex-col">
          <label>Employer Contribution (%):</label>
          <input
            className="bg-transparent border-black border-2 rounded ml-1"
            type="number"
            value={formData.employerContribution}
            onChange={(e) =>
              handleFieldChange(
                "employerContribution",
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
          <label>Years Until Retire:</label>
          <input
            className="bg-transparent border-black border-2 rounded ml-1"
            type="number"
            value={formData.yearsUntilRetire}
            onChange={(e) =>
              handleFieldChange("yearsUntilRetire", parseFloat(e.target.value))
            }
          />
        </div>
        <div className="text-left my-2 flex flex-col">
          <label>Final Capital:</label>
          <input
            className="bg-slate-200 border-slate-50 border-2 rounded ml-1"
            type="text"
            value={formData.finalCapital}
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

export default PensionFundCalculator;
