import { useState } from "react";
import { salary } from "../../../assets/data/DataTypes";

import {
  calculateEis,
  calculateSocso,
  calculateTax,
} from "./SalaryCalculations";

type FormData = salary;

function SalaryCalculator() {
  const [formData, setFormData] = useState<FormData>({
    grossSalary: 0,
    epfEmployee: 0,
    epfEmployer: 0,
    tax: 0,
    eis: 0,
    socso: 0,
    netSalary: 0,
  });

  const handleFieldChange = (fieldName: string, value: number) => {
    if (value <= 0) {
      const capitalizedFieldName =
        fieldName === "grossSalary"
          ? "Gross Salary"
          : fieldName === "epfEmployee"
          ? "EPF Employee Contribution"
          : "EPF Employer Contribution";

      alert(`${capitalizedFieldName} must be a positive value`);
      return;
    }
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const calculateNetSalary = () => {
    const { grossSalary, epfEmployee } = formData;

    const tax = calculateTax(grossSalary, epfEmployee);
    const eisEmployee = calculateEis(grossSalary).employeeContribution; // Calculate EIS
    const socsoEmployee = calculateSocso(grossSalary).employeeContribution; // Calculate SOCSO
    const eis = calculateEis(grossSalary).totalContribution; // Calculate EIS
    const socso = calculateSocso(grossSalary).totalContribution; // Calculate SOCSO
    const epfEmployeeMyr = (epfEmployee / 100) * grossSalary;

    const netSalary =
      grossSalary - tax - eisEmployee - socsoEmployee - epfEmployeeMyr;

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
    <div className="bg-zinc-300 rounded p-5 w-full md:w-2/4">
      <h1 className="font-bold text-xl">Salary Calculator</h1>
      <form className="m-3">
        <div className="text-left my-2 flex flex-col">
          <label>Gross Salary:</label>
          <input
            className="bg-transparent border-black border-2 rounded ml-1"
            type="number"
            required
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
            required
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
            required
            value={formData.epfEmployer}
            onChange={(e) =>
              handleFieldChange("epfEmployer", parseFloat(e.target.value))
            }
          />
        </div>
      </form>
      <button
        className="rounded border-black border-2 p-1 bg-blue-700"
        onClick={calculateNetSalary}
      >
        Calculate Net Salary
      </button>
      <hr className="my-3" />
      <div>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th>Item</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>EPF Employee Contribution</td>
              <td>
                {((formData.epfEmployee / 100) * formData.grossSalary).toFixed(
                  2
                )}
              </td>
            </tr>
            <tr>
              <td>EPF Employer Contribution</td>
              <td>
                {((formData.epfEmployer / 100) * formData.grossSalary).toFixed(
                  2
                )}
              </td>
            </tr>
            <tr>
              <td>Tax</td>
              <td>{formData.tax.toFixed(2)}</td>
            </tr>
            <tr>
              <td>EIS</td>
              <td>{formData.eis.toFixed(2)}</td>
            </tr>
            <tr>
              <td>SOCSO</td>
              <td>{formData.socso.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Net Salary</td>
              <td>{formData.netSalary.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SalaryCalculator;
