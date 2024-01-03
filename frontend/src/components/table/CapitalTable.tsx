import { useAppSelector } from "../../app/hook";

function CapitalTable() {
  const { retirementTable } = useAppSelector((state) => state.fund);
  //get current year
  const currentYear = new Date().getFullYear();

  const yearlyData =
    retirementTable?.map((yearlyEntry) => ({
      year: yearlyEntry.yearsUntilRetire,
      savings: yearlyEntry.finalCapital,
      employeeContribution: yearlyEntry.employeeContribution,
      employerContribution: yearlyEntry.employerContribution,
      salary: yearlyEntry.salary, // Update with the actual field name from retirementTable
    })) || [];

  return (
    <div className="bg-zinc-300 rounded p-5 w-full">
      <h2 className="font-bold text-xl">Yearly Savings and Contributions</h2>
      <table className="min-w-full bg-white border border-black-200 my-3">
        <thead>
          <tr>
            <th className=" py-3 bg-gray-100 text-center text-[10px] md:text-xs  leading-4 text-gray-500  mx-1">
              Year
            </th>
            <th className=" py-3 bg-gray-100 text-center text-[10px] md:text-xs leading-4  text-gray-500  mx-1">
              Savings
            </th>
            <th className="py-3 bg-gray-100 text-center text-[10px] md:text-xs leading-4  text-gray-500  mx-1">
              Employee Contribution
            </th>
            <th className=" py-3 bg-gray-100 text-center text-[10px] md:text-xs leading-4  text-gray-500  mx-1">
              Employer Contribution
            </th>
            <th className=" py-3 bg-gray-100 text-center text-[10px] md:text-xs leading-4  text-gray-500  mx-1">
              Monthly Salary
            </th>
          </tr>
        </thead>
        <tbody>
          {yearlyData.map((data) => (
            <tr key={data.year}>
              <td className=" py-4 whitespace-no-wrap border-b border-gray-200 text-[10px] md:text-xs">
                {data.year + currentYear}
              </td>
              <td className=" py-4 whitespace-no-wrap border-b border-gray-200 text-[10px] md:text-xs">
                {data.savings.toFixed(2)}
              </td>
              <td className="py-4 whitespace-no-wrap border-b border-gray-200 text-[10px] md:text-xs">
                {data.employeeContribution.toFixed(2)}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-[10px] md:text-xs">
                {data.employerContribution.toFixed(2)}
              </td>
              <td className=" py-4 whitespace-no-wrap border-b border-gray-200 text-[10px] md:text-xs">
                {(data.salary / 12).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CapitalTable;
