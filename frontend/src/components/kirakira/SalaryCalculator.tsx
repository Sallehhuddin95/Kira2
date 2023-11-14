import React, { useState } from "react";

function SalaryCalculator() {
  const [formData, setFormData] = useState({
    grossSalary: 0,
    epfEmployee: 0,
    epfEmployer: 0,
    tax: 0,
    eis: 0,
    socso: 0,
    netSalary: 0,
  });

  // const dutiSetem = 0.001;
  // const bayaranPelepasan = 0.0003;

  const handleFieldChange = (fieldName: string, value: number) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const calculateNetSalary = () => {
    const { grossSalary } = formData;

    // Perform your calculations for tax, eis, socso here
    const tax = 0;
    const eis = 0;
    const socso = 0;

    const netSalary = grossSalary - tax - eis - socso;

    // Update state with calculated values
    setFormData((prevData) => ({
      ...prevData,
      tax,
      eis,
      socso,
      netSalary,
    }));
  };

  return (
    <div className="bg-zinc-300 rounded p-5 w-2/4">
      <h1 className="font-bold text-xl">Salary Calculator</h1>
      <form className="m-3">
        <div className="text-left my-2 flex flex-col">
          <label>Gross Salary:</label>
          <input
            className="bg-transparent border-black border-2 rounded ml-1"
            type="number"
            value={formData.grossSalary}
            onChange={(e) =>
              handleFieldChange("grossSalary", parseFloat(e.target.value))
            }
          />
        </div>
        <div className="text-left my-2 flex flex-col">
          <label>EPF Employee Contribution (%):</label>
          <input
            className="bg-transparent border-black border-2 rounded ml-1"
            type="number"
            value={formData.epfEmployee}
            onChange={(e) =>
              handleFieldChange("epfEmployee", parseFloat(e.target.value))
            }
          />
        </div>
        <div className="text-left my-2 flex flex-col">
          <label>EPF Employer Contribution (%):</label>
          <input
            className="bg-transparent border-black border-2 rounded ml-1"
            type="number"
            value={formData.epfEmployer}
            onChange={(e) =>
              handleFieldChange("epfEmployer", parseFloat(e.target.value))
            }
          />
        </div>
        <div className="text-left my-2 flex flex-col">
          <label>Tax:</label>
          <input
            className="bg-slate-200 border-slate-50 border-2 rounded ml-1"
            type="text"
            value={formData.tax}
            readOnly
          />
        </div>
        <div className="text-left my-2 flex flex-col">
          <label>EIS:</label>
          <input
            className="bg-slate-200 border-slate-50 border-2 rounded ml-1"
            type="text"
            value={formData.eis}
            readOnly
          />
        </div>
        <div className="text-left my-2 flex flex-col">
          <label>SOCSO:</label>
          <input
            className="bg-slate-200 border-slate-50 border-2 rounded ml-1"
            type="text"
            value={formData.socso}
            readOnly
          />
        </div>
        <div className="text-left my-2 flex flex-col">
          <label>Net Salary</label>
          <input
            className="bg-slate-200 border-slate-50 border-2 rounded ml-1"
            type="text"
            value={formData.netSalary}
            readOnly
          />
        </div>
      </form>
      <button
        className="rounded border-black border-2 p-1 bg-blue-700"
        onClick={calculateNetSalary}
      >
        Calculate Net Salary
      </button>
    </div>
  );
}

export default SalaryCalculator;
