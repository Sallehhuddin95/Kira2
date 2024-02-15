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

export type salary = {
  grossSalary: number;
  epfEmployee: number;
  epfEmployer: number;
  tax: number;
  eis: number;
  socso: number;
  netSalary: number;
};

export type taxBracket = {
  min: number;
  max: number | "No limit";
  tax: number;
};

export type ResidentTaxBracket = {
  tax1: taxBracket;
  tax2: taxBracket;
  tax3: taxBracket;
  tax4: taxBracket;
  tax5: taxBracket;
  tax6: taxBracket;
  tax7: taxBracket;
  tax8: taxBracket;
  tax9: taxBracket;
};

export type socsoCalculation = {
  totalContribution: number;
  employeeContribution: number;
};

export type eisCalculation = {
  totalContribution: number;
  employeeContribution: number;
};

//lot calculator types
export type lotCalculator = {
  amountToInvest: number;
  stockPrice: number;
  brokerageFee: number;
  totalCost: number;
  maxLot: number;
};

// bmi calculator types
export type bmiCalculator = {
  yourWeight: number;
  yourHeight: number;
  bmi: number;
};

// compounding interest types
export type compoundingCalculator = {
  initialCapital: number;
  monthlyContribution: number;
  annualReturn: number;
  yearsToGrow: number;
  finalCapital: number;
};

export type compoundingFund = {
  initialCapital: number;
  annualReturn: number;
  yearsToGrow: number;
  finalCapital: number;
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  message: string | null;
  compoundingTable: compoundingFundCalculation[];
};

export type compoundingFundInput = {
  initialCapital: number;
  monthlyContribution: number;
  annualReturn: number;
  yearsToGrow: number;
  finalCapital: number;
};

export type compoundingFundCalculation = {
  yearsToGrow: number;
  finalCapital: number;
  principal: number;
  gains: number;
};
