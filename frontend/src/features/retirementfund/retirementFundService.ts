import {
  retirementFundInput,
  retirementFundFCalculation,
} from "../../assets/data/DataTypes";

const calculateRetirementFund = (
  data: retirementFundInput
): retirementFundFCalculation[] => {
  const {
    initialCapital,
    monthlySalary,
    annualSalaryRaise,
    employeeContribution,
    employerContribution,
    annualReturn,
    yearsUntilRetire,
  } = data;

  let currentCapital = initialCapital;
  let currentSalary = monthlySalary * 12;
  const retirementTable: retirementFundFCalculation[] = [];

  for (let year = 1; year <= yearsUntilRetire; year++) {
    const employeeContributionThisYear =
      currentSalary * (employeeContribution / 100);
    const employerContributionThisYear =
      currentSalary * (employerContribution / 100);
    const totalContribution =
      employeeContributionThisYear + employerContributionThisYear;
    const annualInterest = (currentCapital * annualReturn) / 100;
    const totalAmountAtYearEnd =
      currentCapital + totalContribution + annualInterest;

    const salary = currentSalary;

    retirementTable.push({
      yearsUntilRetire: year,
      finalCapital: totalAmountAtYearEnd,
      employeeContribution: employeeContributionThisYear,
      employerContribution: employerContributionThisYear,
      salary: salary,
    });

    currentSalary += currentSalary * (annualSalaryRaise / 100);
    currentCapital = totalAmountAtYearEnd;
  }

  return retirementTable;
};

const retirementFundService = {
  calculateRetirementFund,
};

export default retirementFundService;
