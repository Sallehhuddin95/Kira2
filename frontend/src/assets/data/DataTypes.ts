export type retirementFund = {
  initialCapital: number;
  monthlySalary: number;
  annualSalaryRaise: number;
  employeeContribution: number;
  employerContribution: number;
  annualReturn: number;
  yearsUntilRetire: number;
  finalCapital: number;
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  message: string | null;
  retirementTable: retirementFundFCalculation[];
};

export type retirementFundInput = {
  initialCapital: number;
  monthlySalary: number;
  annualSalaryRaise: number;
  employeeContribution: number;
  employerContribution: number;
  annualReturn: number;
  yearsUntilRetire: number;
  finalCapital: number;
};

export type retirementFundFCalculation = {
  yearsUntilRetire: number;
  finalCapital: number;
  employeeContribution: number;
  employerContribution: number;
  salary: number;
};
