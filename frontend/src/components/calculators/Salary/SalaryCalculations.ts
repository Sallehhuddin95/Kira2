import {
  residentTaxBracket,
  socsoContributions,
  eisContributions,
  pelepasanCukai,
} from "../../../assets/data/SalaryCalculationData";
import {
  socsoCalculation,
  eisCalculation,
} from "../../../assets/data/DataTypes";

export const calculateTax = (
  salary: number,
  employeeContribution: number
): number => {
  const kwsp = (salary * 12 * employeeContribution) / 100;
  const pelepasanKwsp = kwsp > pelepasanCukai.kwsp ? pelepasanCukai.kwsp : kwsp;
  const taxtableSalary =
    salary * 12 - pelepasanCukai.individual - pelepasanKwsp;

  let tax = 0;

  for (const taxBracketKey in residentTaxBracket) {
    const taxBracket =
      residentTaxBracket[taxBracketKey as keyof typeof residentTaxBracket];

    if (
      taxtableSalary > 5000 &&
      taxtableSalary < 2000000 &&
      taxtableSalary >= taxBracket.min
    ) {
      let taxableAmount: number = 0;

      if (taxtableSalary >= taxBracket.max) {
        taxableAmount = taxBracket.max - taxBracket.min;
      } else {
        taxableAmount = taxtableSalary - taxBracket.min;
      }

      tax += taxableAmount * taxBracket.tax;
    } else if (taxtableSalary > 5000 && taxtableSalary >= 2000000) {
      tax += (taxtableSalary - taxBracket.min) * taxBracket.tax;
      break;
    } else {
      break;
    }
  }

  return tax / 12;
};

export const calculateEis = (salary: number): eisCalculation => {
  for (const eisBracket of eisContributions) {
    const { min, max } = eisBracket.wageRange;
    const { totalContribution, employeeContribution } = eisBracket;

    if (salary >= min && salary < max) {
      return { totalContribution, employeeContribution };
    }
  }

  return { totalContribution: 0, employeeContribution: 0 };
};

export const calculateSocso = (salary: number): socsoCalculation => {
  for (const socsoBracket of socsoContributions) {
    const { min, max } = socsoBracket.wageRange;
    const { totalContribution, employeeContribution } = socsoBracket;

    if (salary >= min && salary < max) {
      return { totalContribution, employeeContribution };
    }
  }

  return { totalContribution: 0, employeeContribution: 0 };
};
