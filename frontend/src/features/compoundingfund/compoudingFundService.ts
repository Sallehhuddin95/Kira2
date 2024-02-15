import {
  compoundingFundCalculation,
  compoundingFundInput,
} from "../../assets/data/DataTypes";

const calculateCompoundingFund = (
  data: compoundingFundInput
): compoundingFundCalculation[] => {
  const { initialCapital, annualReturn, yearsToGrow, monthlyContribution } =
    data;

  let currentCapital = initialCapital;
  let currentPrincipal = initialCapital;
  const compoundingTable: compoundingFundCalculation[] = [];

  for (let year = 1; year <= yearsToGrow; year++) {
    console.log("year", year);

    const annualInterest =
      ((currentCapital + monthlyContribution * 12) * annualReturn) / 100;
    const totalAmountAtYearEnd =
      currentCapital + annualInterest + monthlyContribution * 12;
    const totalPrincipal = currentPrincipal + monthlyContribution * 12;
    const gains = totalAmountAtYearEnd - totalPrincipal;

    compoundingTable.push({
      yearsToGrow: year,
      finalCapital: totalAmountAtYearEnd,
      principal: totalPrincipal,
      gains: gains,
    });

    currentCapital = totalAmountAtYearEnd;
    currentPrincipal = totalPrincipal;
  }

  // set final capital to local storage
  localStorage.setItem("finalCapital", currentCapital.toString());

  return compoundingTable;
};

const compoudingFundService = {
  calculateCompoundingFund,
};

export default compoudingFundService;
