export const residentTaxBracket = {
  tax1: {
    min: 5000,
    max: 20000,
    tax: 0.01,
  },
  tax2: {
    min: 20001,
    max: 35000,
    tax: 0.03,
  },
  tax3: {
    min: 35001,
    max: 50000,
    tax: 0.06,
  },
  tax4: {
    min: 50001,
    max: 70000,
    tax: 0.11,
  },
  tax5: {
    min: 70001,
    max: 100000,
    tax: 0.19,
  },
  tax6: {
    min: 100001,
    max: 400000,
    tax: 0.25,
  },
  tax7: {
    min: 400001,
    max: 600000,
    tax: 0.26,
  },
  tax8: {
    min: 600001,
    max: 2000000,
    tax: 0.28,
  },
  tax9: {
    min: 2000001,
    max: Infinity,
    tax: 0.3,
  },
};

export const nonResidentTaxBracket = {
  tax1: {
    tax: 0.3,
  },
};

// export const eisContributions = [
//   {
//     wageRange: "Up to RM30",
//     employerContribution: 0.05, // 5 sen
//     employeeContribution: 0.05, // 5 sen
//     totalContribution: 0.1, // 10 sen
//   },
//   {
//     wageRange: "RM30 to RM50",
//     employerContribution: 0.1,
//     employeeContribution: 0.1,
//     totalContribution: 0.2,
//   },
//   {
//     wageRange: "RM50 to RM70",
//     employerContribution: 0.15,
//     employeeContribution: 0.15,
//     totalContribution: 0.3,
//   },
//   {
//     wageRange: "RM70 to RM100",
//     employerContribution: 0.2,
//     employeeContribution: 0.2,
//     totalContribution: 0.4,
//   },
//   {
//     wageRange: "RM100 to RM140",
//     employerContribution: 0.25,
//     employeeContribution: 0.25,
//     totalContribution: 0.5,
//   },
//   {
//     wageRange: "RM140 to RM200",
//     employerContribution: 0.35,
//     employeeContribution: 0.35,
//     totalContribution: 0.7,
//   },
//   {
//     wageRange: "RM200 to RM300",
//     employerContribution: 0.5,
//     employeeContribution: 0.5,
//     totalContribution: 1.0,
//   },
//   {
//     wageRange: "RM300 to RM400",
//     employerContribution: 0.7,
//     employeeContribution: 0.7,
//     totalContribution: 1.4,
//   },
//   {
//     wageRange: "RM400 to RM500",
//     employerContribution: 0.9,
//     employeeContribution: 0.9,
//     totalContribution: 1.8,
//   },
//   {
//     wageRange: "RM500 to RM600",
//     employerContribution: 1.1,
//     employeeContribution: 1.1,
//     totalContribution: 2.2,
//   },
//   {
//     wageRange: "RM600 to RM700",
//     employerContribution: 1.3,
//     employeeContribution: 1.3,
//     totalContribution: 2.6,
//   },
//   {
//     wageRange: "RM700 to RM800",
//     employerContribution: 1.5,
//     employeeContribution: 1.5,
//     totalContribution: 3.0,
//   },
//   {
//     wageRange: "RM800 to RM900",
//     employerContribution: 1.7,
//     employeeContribution: 1.7,
//     totalContribution: 3.4,
//   },
//   {
//     wageRange: "RM900 to RM1,000",
//     employerContribution: 1.9,
//     employeeContribution: 1.9,
//     totalContribution: 3.8,
//   },
//   {
//     wageRange: "RM1,000 to RM1,100",
//     employerContribution: 2.1,
//     employeeContribution: 2.1,
//     totalContribution: 4.2,
//   },
//   {
//     wageRange: "RM1,100 to RM1,200",
//     employerContribution: 2.3,
//     employeeContribution: 2.3,
//     totalContribution: 4.6,
//   },
//   {
//     wageRange: "RM1,200 to RM1,300",
//     employerContribution: 2.5,
//     employeeContribution: 2.5,
//     totalContribution: 5.0,
//   },
//   {
//     wageRange: "RM1,300 to RM1,400",
//     employerContribution: 2.7,
//     employeeContribution: 2.7,
//     totalContribution: 5.4,
//   },
//   {
//     wageRange: "RM1,400 to RM1,500",
//     employerContribution: 2.9,
//     employeeContribution: 2.9,
//     totalContribution: 5.8,
//   },
//   {
//     wageRange: "RM1,500 to RM1,600",
//     employerContribution: 3.1,
//     employeeContribution: 3.1,
//     totalContribution: 6.2,
//   },
//   {
//     wageRange: "RM1,600 to RM1,700",
//     employerContribution: 3.3,
//     employeeContribution: 3.3,
//     totalContribution: 6.6,
//   },
//   {
//     wageRange: "RM1,700 to RM1,800",
//     employerContribution: 3.5,
//     employeeContribution: 3.5,
//     totalContribution: 7.0,
//   },
//   {
//     wageRange: "RM1,800 to RM1,900",
//     employerContribution: 3.7,
//     employeeContribution: 3.7,
//     totalContribution: 7.4,
//   },
//   {
//     wageRange: "RM1,900 to RM2,000",
//     employerContribution: 3.9,
//     employeeContribution: 3.9,
//     totalContribution: 7.8,
//   },
//   {
//     wageRange: "RM2,000 to RM2,100",
//     employerContribution: 4.1,
//     employeeContribution: 4.1,
//     totalContribution: 8.2,
//   },
//   {
//     wageRange: "RM2,100 to RM2,200",
//     employerContribution: 4.3,
//     employeeContribution: 4.3,
//     totalContribution: 8.6,
//   },
//   {
//     wageRange: "RM2,200 to RM2,300",
//     employerContribution: 4.5,
//     employeeContribution: 4.5,
//     totalContribution: 9.0,
//   },
//   {
//     wageRange: "RM2,300 to RM2,400",
//     employerContribution: 4.7,
//     employeeContribution: 4.7,
//     totalContribution: 9.4,
//   },
//   {
//     wageRange: "RM2,400 to RM2,500",
//     employerContribution: 4.9,
//     employeeContribution: 4.9,
//     totalContribution: 9.8,
//   },
//   {
//     wageRange: "RM2,500 to RM2,600",
//     employerContribution: 5.1,
//     employeeContribution: 5.1,
//     totalContribution: 10.2,
//   },
//   {
//     wageRange: "RM2,600 to RM2,700",
//     employerContribution: 5.3,
//     employeeContribution: 5.3,
//     totalContribution: 10.6,
//   },
//   {
//     wageRange: "RM2,700 to RM2,800",
//     employerContribution: 5.5,
//     employeeContribution: 5.5,
//     totalContribution: 11.0,
//   },
//   {
//     wageRange: "RM2,800 to RM2,900",
//     employerContribution: 5.7,
//     employeeContribution: 5.7,
//     totalContribution: 11.4,
//   },
//   {
//     wageRange: "RM2,900 to RM3,000",
//     employerContribution: 5.9,
//     employeeContribution: 5.9,
//     totalContribution: 11.8,
//   },
//   {
//     wageRange: "RM3,000 to RM3,100",
//     employerContribution: 6.1,
//     employeeContribution: 6.1,
//     totalContribution: 12.2,
//   },
//   {
//     wageRange: "RM3,100 to RM3,200",
//     employerContribution: 6.3,
//     employeeContribution: 6.3,
//     totalContribution: 12.6,
//   },
//   {
//     wageRange: "RM3,200 to RM3,300",
//     employerContribution: 6.5,
//     employeeContribution: 6.5,
//     totalContribution: 13.0,
//   },
//   {
//     wageRange: "RM3,300 to RM3,400",
//     employerContribution: 6.7,
//     employeeContribution: 6.7,
//     totalContribution: 13.4,
//   },
//   {
//     wageRange: "RM3,400 to RM3,500",
//     employerContribution: 6.9,
//     employeeContribution: 6.9,
//     totalContribution: 13.8,
//   },
//   {
//     wageRange: "RM3,500 to RM3,600",
//     employerContribution: 7.1,
//     employeeContribution: 7.1,
//     totalContribution: 14.2,
//   },
//   {
//     wageRange: "RM3,600 to RM3,700",
//     employerContribution: 7.3,
//     employeeContribution: 7.3,
//     totalContribution: 14.6,
//   },
//   {
//     wageRange: "RM3,700 to RM3,800",
//     employerContribution: 7.5,
//     employeeContribution: 7.5,
//     totalContribution: 15.0,
//   },
//   {
//     wageRange: "RM3,800 to RM3,900",
//     employerContribution: 7.7,
//     employeeContribution: 7.7,
//     totalContribution: 15.4,
//   },
//   {
//     wageRange: "RM3,900 to RM4,000",
//     employerContribution: 7.9,
//     employeeContribution: 7.9,
//     totalContribution: 15.8,
//   },
//   {
//     wageRange: "RM4,000 to RM4,100",
//     employerContribution: 8.1,
//     employeeContribution: 8.1,
//     totalContribution: 16.2,
//   },
//   {
//     wageRange: "RM4,100 to RM4,200",
//     employerContribution: 8.3,
//     employeeContribution: 8.3,
//     totalContribution: 16.6,
//   },
//   {
//     wageRange: "RM4,200 to RM4,300",
//     employerContribution: 8.5,
//     employeeContribution: 8.5,
//     totalContribution: 17.0,
//   },
//   {
//     wageRange: "RM4,300 to RM4,400",
//     employerContribution: 8.7,
//     employeeContribution: 8.7,
//     totalContribution: 17.4,
//   },
//   {
//     wageRange: "RM4,400 to RM4,500",
//     employerContribution: 8.9,
//     employeeContribution: 8.9,
//     totalContribution: 17.8,
//   },
//   {
//     wageRange: "RM4,500 to RM4,600",
//     employerContribution: 9.1,
//     employeeContribution: 9.1,
//     totalContribution: 18.2,
//   },
//   {
//     wageRange: "RM4,600 to RM4,700",
//     employerContribution: 9.3,
//     employeeContribution: 9.3,
//     totalContribution: 18.6,
//   },
//   {
//     wageRange: "RM4,700 to RM4,800",
//     employerContribution: 9.5,
//     employeeContribution: 9.5,
//     totalContribution: 19.0,
//   },
//   {
//     wageRange: "RM4,800 to RM4,900",
//     employerContribution: 9.7,
//     employeeContribution: 9.7,
//     totalContribution: 19.4,
//   },
//   {
//     wageRange: "RM4,900 to RM5,000",
//     employerContribution: 9.9,
//     employeeContribution: 9.9,
//     totalContribution: 19.8,
//   },
//   {
//     wageRange: "Above RM5,000",
//     employerContribution: 9.9,
//     employeeContribution: 9.9,
//     totalContribution: 19.8,
//   },
// ];

export const eisContributions = [
  {
    wageRange: { min: 0, max: 30 },
    employerContribution: 0.05,
    employeeContribution: 0.05,
    totalContribution: 0.1,
  },
  {
    wageRange: { min: 30, max: 50 },
    employerContribution: 0.1,
    employeeContribution: 0.1,
    totalContribution: 0.2,
  },
  {
    wageRange: { min: 50, max: 70 },
    employerContribution: 0.15,
    employeeContribution: 0.15,
    totalContribution: 0.3,
  },
  {
    wageRange: { min: 70, max: 100 },
    employerContribution: 0.2,
    employeeContribution: 0.2,
    totalContribution: 0.4,
  },
  {
    wageRange: { min: 100, max: 140 },
    employerContribution: 0.25,
    employeeContribution: 0.25,
    totalContribution: 0.5,
  },
  {
    wageRange: { min: 140, max: 200 },
    employerContribution: 0.35,
    employeeContribution: 0.35,
    totalContribution: 0.7,
  },
  {
    wageRange: { min: 200, max: 300 },
    employerContribution: 0.5,
    employeeContribution: 0.5,
    totalContribution: 1.0,
  },
  {
    wageRange: { min: 300, max: 400 },
    employerContribution: 0.7,
    employeeContribution: 0.7,
    totalContribution: 1.4,
  },
  {
    wageRange: { min: 400, max: 500 },
    employerContribution: 0.9,
    employeeContribution: 0.9,
    totalContribution: 1.8,
  },
  {
    wageRange: { min: 500, max: 600 },
    employerContribution: 1.1,
    employeeContribution: 1.1,
    totalContribution: 2.2,
  },
  {
    wageRange: { min: 600, max: 700 },
    employerContribution: 1.3,
    employeeContribution: 1.3,
    totalContribution: 2.6,
  },
  {
    wageRange: { min: 700, max: 800 },
    employerContribution: 1.5,
    employeeContribution: 1.5,
    totalContribution: 3.0,
  },
  {
    wageRange: { min: 800, max: 900 },
    employerContribution: 1.7,
    employeeContribution: 1.7,
    totalContribution: 3.4,
  },
  {
    wageRange: { min: 900, max: 1000 },
    employerContribution: 1.9,
    employeeContribution: 1.9,
    totalContribution: 3.8,
  },
  {
    wageRange: { min: 1000, max: 1100 },
    employerContribution: 2.1,
    employeeContribution: 2.1,
    totalContribution: 4.2,
  },
  {
    wageRange: { min: 1100, max: 1200 },
    employerContribution: 2.3,
    employeeContribution: 2.3,
    totalContribution: 4.6,
  },
  {
    wageRange: { min: 1200, max: 1300 },
    employerContribution: 2.5,
    employeeContribution: 2.5,
    totalContribution: 5.0,
  },
  {
    wageRange: { min: 1300, max: 1400 },
    employerContribution: 2.7,
    employeeContribution: 2.7,
    totalContribution: 5.4,
  },
  {
    wageRange: { min: 1400, max: 1500 },
    employerContribution: 2.9,
    employeeContribution: 2.9,
    totalContribution: 5.8,
  },
  {
    wageRange: { min: 1500, max: 1600 },
    employerContribution: 3.1,
    employeeContribution: 3.1,
    totalContribution: 6.2,
  },
  {
    wageRange: { min: 1600, max: 1700 },
    employerContribution: 3.3,
    employeeContribution: 3.3,
    totalContribution: 6.6,
  },
  {
    wageRange: { min: 1700, max: 1800 },
    employerContribution: 3.5,
    employeeContribution: 3.5,
    totalContribution: 7.0,
  },
  {
    wageRange: { min: 1800, max: 1900 },
    employerContribution: 3.7,
    employeeContribution: 3.7,
    totalContribution: 7.4,
  },
  {
    wageRange: { min: 1900, max: 2000 },
    employerContribution: 3.9,
    employeeContribution: 3.9,
    totalContribution: 7.8,
  },
  {
    wageRange: { min: 2000, max: 2100 },
    employerContribution: 4.1,
    employeeContribution: 4.1,
    totalContribution: 8.2,
  },
  {
    wageRange: { min: 2100, max: 2200 },
    employerContribution: 4.3,
    employeeContribution: 4.3,
    totalContribution: 8.6,
  },
  {
    wageRange: { min: 2200, max: 2300 },
    employerContribution: 4.5,
    employeeContribution: 4.5,
    totalContribution: 9.0,
  },
  {
    wageRange: { min: 2300, max: 2400 },
    employerContribution: 4.7,
    employeeContribution: 4.7,
    totalContribution: 9.4,
  },
  {
    wageRange: { min: 2400, max: 2500 },
    employerContribution: 4.9,
    employeeContribution: 4.9,
    totalContribution: 9.8,
  },
  {
    wageRange: { min: 2500, max: 2600 },
    employerContribution: 5.1,
    employeeContribution: 5.1,
    totalContribution: 10.2,
  },
  {
    wageRange: { min: 2600, max: 2700 },
    employerContribution: 5.3,
    employeeContribution: 5.3,
    totalContribution: 10.6,
  },
  {
    wageRange: { min: 2700, max: 2800 },
    employerContribution: 5.5,
    employeeContribution: 5.5,
    totalContribution: 11.0,
  },
  {
    wageRange: { min: 2800, max: 2900 },
    employerContribution: 5.7,
    employeeContribution: 5.7,
    totalContribution: 11.4,
  },
  {
    wageRange: { min: 2900, max: 3000 },
    employerContribution: 5.9,
    employeeContribution: 5.9,
    totalContribution: 11.8,
  },
  {
    wageRange: { min: 3000, max: 3100 },
    employerContribution: 6.1,
    employeeContribution: 6.1,
    totalContribution: 12.2,
  },
  {
    wageRange: { min: 3100, max: 3200 },
    employerContribution: 6.3,
    employeeContribution: 6.3,
    totalContribution: 12.6,
  },
  {
    wageRange: { min: 3200, max: 3300 },
    employerContribution: 6.5,
    employeeContribution: 6.5,
    totalContribution: 13.0,
  },
  {
    wageRange: { min: 3300, max: 3400 },
    employerContribution: 6.7,
    employeeContribution: 6.7,
    totalContribution: 13.4,
  },
  {
    wageRange: { min: 3400, max: 3500 },
    employerContribution: 6.9,
    employeeContribution: 6.9,
    totalContribution: 13.8,
  },
  {
    wageRange: { min: 3500, max: 3600 },
    employerContribution: 7.1,
    employeeContribution: 7.1,
    totalContribution: 14.2,
  },
  {
    wageRange: { min: 3600, max: 3700 },
    employerContribution: 7.3,
    employeeContribution: 7.3,
    totalContribution: 14.6,
  },
  {
    wageRange: { min: 3700, max: 3800 },
    employerContribution: 7.5,
    employeeContribution: 7.5,
    totalContribution: 15.0,
  },
  {
    wageRange: { min: 3800, max: 3900 },
    employerContribution: 7.7,
    employeeContribution: 7.7,
    totalContribution: 15.4,
  },
  {
    wageRange: { min: 3900, max: 4000 },
    employerContribution: 7.9,
    employeeContribution: 7.9,
    totalContribution: 15.8,
  },
  {
    wageRange: { min: 4000, max: 4100 },
    employerContribution: 8.1,
    employeeContribution: 8.1,
    totalContribution: 16.2,
  },
  {
    wageRange: { min: 4100, max: 4200 },
    employerContribution: 8.3,
    employeeContribution: 8.3,
    totalContribution: 16.6,
  },
  {
    wageRange: { min: 4200, max: 4300 },
    employerContribution: 8.5,
    employeeContribution: 8.5,
    totalContribution: 17.0,
  },
  {
    wageRange: { min: 4300, max: 4400 },
    employerContribution: 8.7,
    employeeContribution: 8.7,
    totalContribution: 17.4,
  },
  {
    wageRange: { min: 4400, max: 4500 },
    employerContribution: 8.9,
    employeeContribution: 8.9,
    totalContribution: 17.8,
  },
  {
    wageRange: { min: 4500, max: 4600 },
    employerContribution: 9.1,
    employeeContribution: 9.1,
    totalContribution: 18.2,
  },
  {
    wageRange: { min: 4600, max: 4700 },
    employerContribution: 9.3,
    employeeContribution: 9.3,
    totalContribution: 18.6,
  },
  {
    wageRange: { min: 4700, max: 4800 },
    employerContribution: 9.5,
    employeeContribution: 9.5,
    totalContribution: 19.0,
  },
  {
    wageRange: { min: 4800, max: 4900 },
    employerContribution: 9.7,
    employeeContribution: 9.7,
    totalContribution: 19.4,
  },
  {
    wageRange: { min: 4900, max: 5000 },
    employerContribution: 9.9,
    employeeContribution: 9.9,
    totalContribution: 19.8,
  },
  {
    wageRange: { min: 5000, max: Infinity },
    employerContribution: 9.9,
    employeeContribution: 9.9,
    totalContribution: 19.8,
  },
];

export const socsoContributions = [
  {
    wageRange: { min: 0, max: 30 },
    employerContribution: 0.4,
    employeeContribution: 0.1,
    totalContribution: 0.5,
  },
  {
    wageRange: { min: 30, max: 50 },
    employerContribution: 0.7,
    employeeContribution: 0.2,
    totalContribution: 0.9,
  },
  {
    wageRange: { min: 50, max: 70 },
    employerContribution: 1.1,
    employeeContribution: 0.3,
    totalContribution: 1.4,
  },
  {
    wageRange: { min: 70, max: 100 },
    employerContribution: 1.5,
    employeeContribution: 0.4,
    totalContribution: 1.9,
  },
  {
    wageRange: { min: 100, max: 140 },
    employerContribution: 2.1,
    employeeContribution: 0.6,
    totalContribution: 2.7,
  },
  {
    wageRange: { min: 140, max: 200 },
    employerContribution: 2.95,
    employeeContribution: 0.85,
    totalContribution: 3.8,
  },
  {
    wageRange: { min: 200, max: 300 },
    employerContribution: 4.35,
    employeeContribution: 1.25,
    totalContribution: 5.6,
  },
  {
    wageRange: { min: 300, max: 400 },
    employerContribution: 6.15,
    employeeContribution: 1.75,
    totalContribution: 7.9,
  },
  {
    wageRange: { min: 400, max: 500 },
    employerContribution: 7.85,
    employeeContribution: 2.25,
    totalContribution: 10.1,
  },
  {
    wageRange: { min: 500, max: 600 },
    employerContribution: 9.65,
    employeeContribution: 2.75,
    totalContribution: 12.4,
  },
  {
    wageRange: { min: 600, max: 700 },
    employerContribution: 11.35,
    employeeContribution: 3.25,
    totalContribution: 14.6,
  },
  {
    wageRange: { min: 700, max: 800 },
    employerContribution: 13.15,
    employeeContribution: 3.75,
    totalContribution: 16.9,
  },
  {
    wageRange: { min: 800, max: 900 },
    employerContribution: 14.85,
    employeeContribution: 4.25,
    totalContribution: 19.1,
  },
  {
    wageRange: { min: 900, max: 1000 },
    employerContribution: 16.65,
    employeeContribution: 4.75,
    totalContribution: 21.4,
  },
  {
    wageRange: { min: 1000, max: 1100 },
    employerContribution: 18.35,
    employeeContribution: 5.25,
    totalContribution: 23.6,
  },
  {
    wageRange: { min: 1100, max: 1200 },
    employerContribution: 20.15,
    employeeContribution: 5.75,
    totalContribution: 25.9,
  },
  {
    wageRange: { min: 1200, max: 1300 },
    employerContribution: 21.85,
    employeeContribution: 6.25,
    totalContribution: 28.1,
  },
  {
    wageRange: { min: 1300, max: 1400 },
    employerContribution: 23.65,
    employeeContribution: 6.75,
    totalContribution: 30.4,
  },
  {
    wageRange: { min: 1400, max: 1500 },
    employerContribution: 25.35,
    employeeContribution: 7.25,
    totalContribution: 32.6,
  },
  {
    wageRange: { min: 1500, max: 1600 },
    employerContribution: 27.15,
    employeeContribution: 7.75,
    totalContribution: 34.9,
  },
  {
    wageRange: { min: 1600, max: 1700 },
    employerContribution: 28.85,
    employeeContribution: 8.25,
    totalContribution: 37.1,
  },
  {
    wageRange: { min: 1700, max: 1800 },
    employerContribution: 30.65,
    employeeContribution: 8.75,
    totalContribution: 39.4,
  },
  {
    wageRange: { min: 1800, max: 1900 },
    employerContribution: 32.35,
    employeeContribution: 9.25,
    totalContribution: 41.6,
  },
  {
    wageRange: { min: 1900, max: 2000 },
    employerContribution: 34.15,
    employeeContribution: 9.75,
    totalContribution: 43.9,
  },
  {
    wageRange: { min: 2000, max: 2100 },
    employerContribution: 35.85,
    employeeContribution: 10.25,
    totalContribution: 46.1,
  },
  {
    wageRange: { min: 2100, max: 2200 },
    employerContribution: 37.65,
    employeeContribution: 10.75,
    totalContribution: 48.4,
  },
  {
    wageRange: { min: 2200, max: 2300 },
    employerContribution: 39.35,
    employeeContribution: 11.25,
    totalContribution: 50.6,
  },
  {
    wageRange: { min: 2300, max: 2400 },
    employerContribution: 41.15,
    employeeContribution: 11.75,
    totalContribution: 52.9,
  },
  {
    wageRange: { min: 2400, max: 2500 },
    employerContribution: 42.85,
    employeeContribution: 12.25,
    totalContribution: 55.1,
  },
  {
    wageRange: { min: 2500, max: 2600 },
    employerContribution: 44.65,
    employeeContribution: 12.75,
    totalContribution: 57.4,
  },
  {
    wageRange: { min: 2600, max: 2700 },
    employerContribution: 46.35,
    employeeContribution: 13.25,
    totalContribution: 59.6,
  },
  {
    wageRange: { min: 2700, max: 2800 },
    employerContribution: 48.15,
    employeeContribution: 13.75,
    totalContribution: 61.9,
  },
  {
    wageRange: { min: 2800, max: 2900 },
    employerContribution: 49.85,
    employeeContribution: 14.25,
    totalContribution: 64.1,
  },
  {
    wageRange: { min: 2900, max: 3000 },
    employerContribution: 51.65,
    employeeContribution: 14.75,
    totalContribution: 66.4,
  },
  {
    wageRange: { min: 3000, max: 3100 },
    employerContribution: 53.35,
    employeeContribution: 15.25,
    totalContribution: 68.6,
  },
  {
    wageRange: { min: 3100, max: 3200 },
    employerContribution: 55.15,
    employeeContribution: 15.75,
    totalContribution: 70.9,
  },
  {
    wageRange: { min: 3200, max: 3300 },
    employerContribution: 56.85,
    employeeContribution: 16.25,
    totalContribution: 73.1,
  },
  {
    wageRange: { min: 3300, max: 3400 },
    employerContribution: 58.65,
    employeeContribution: 16.75,
    totalContribution: 75.4,
  },
  {
    wageRange: { min: 3400, max: 3500 },
    employerContribution: 60.35,
    employeeContribution: 17.25,
    totalContribution: 77.6,
  },
  {
    wageRange: { min: 3500, max: 3600 },
    employerContribution: 62.15,
    employeeContribution: 17.75,
    totalContribution: 79.9,
  },
  {
    wageRange: { min: 3600, max: 3700 },
    employerContribution: 63.85,
    employeeContribution: 18.25,
    totalContribution: 82.1,
  },
  {
    wageRange: { min: 3700, max: 3800 },
    employerContribution: 65.65,
    employeeContribution: 18.75,
    totalContribution: 84.4,
  },
  {
    wageRange: { min: 3800, max: 3900 },
    employerContribution: 67.35,
    employeeContribution: 19.25,
    totalContribution: 86.6,
  },
  {
    wageRange: { min: 3900, max: 4000 },
    employerContribution: 69.15,
    employeeContribution: 19.75,
    totalContribution: 88.9,
  },
  {
    wageRange: { min: 4000, max: 4100 },
    employerContribution: 70.85,
    employeeContribution: 20.25,
    totalContribution: 91.1,
  },
  {
    wageRange: { min: 4100, max: 4200 },
    employerContribution: 72.65,
    employeeContribution: 20.75,
    totalContribution: 93.4,
  },
  {
    wageRange: { min: 4200, max: 4300 },
    employerContribution: 74.35,
    employeeContribution: 21.25,
    totalContribution: 95.6,
  },
  {
    wageRange: { min: 4300, max: 4400 },
    employerContribution: 76.15,
    employeeContribution: 21.75,
    totalContribution: 97.9,
  },
  {
    wageRange: { min: 4400, max: 4500 },
    employerContribution: 77.85,
    employeeContribution: 22.25,
    totalContribution: 100.1,
  },
  {
    wageRange: { min: 4500, max: 4600 },
    employerContribution: 79.65,
    employeeContribution: 22.75,
    totalContribution: 102.4,
  },
  {
    wageRange: { min: 4600, max: 4700 },
    employerContribution: 81.35,
    employeeContribution: 23.25,
    totalContribution: 104.6,
  },
  {
    wageRange: { min: 4700, max: 4800 },
    employerContribution: 83.15,
    employeeContribution: 23.75,
    totalContribution: 106.9,
  },
  {
    wageRange: { min: 4800, max: 4900 },
    employerContribution: 84.85,
    employeeContribution: 24.25,
    totalContribution: 109.1,
  },
  {
    wageRange: { min: 4900, max: 5000 },
    employerContribution: 86.65,
    employeeContribution: 24.75,
    totalContribution: 111.4,
  },
  {
    wageRange: { min: 5000, max: Infinity },
    employerContribution: 86.65,
    employeeContribution: 24.75,
    totalContribution: 111.4,
  },
];

export const pelepasanCukai = {
  individual: 9000,
  kwsp: 4000,
};
