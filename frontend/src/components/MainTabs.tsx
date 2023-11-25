import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import {
  LotCalculator,
  SalaryCalculator,
  PensionFundCalculator,
  BmiCalculator,
} from "./kirakira";

function MainTabs() {
  return (
    <Tab.Group>
      <Tab.List className="grid grid-flow-col justify-stretch my-2">
        <Tab as={Fragment}>
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
            <button
              className={
                selected
                  ? "bg-blue-500 text-white rounded font-bold"
                  : "bg-white text-black border-solid border-2 border-black rounded"
              }
            >
              Calculate Stock Lot
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
            <button
              className={
                selected
                  ? "bg-blue-500 text-white rounded font-bold"
                  : "bg-white text-black border-solid border-2 border-black rounded"
              }
            >
              Calculate Net Salary
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
            <button
              className={
                selected
                  ? "bg-blue-500 text-white rounded font-bold"
                  : "bg-white text-black border-solid border-2 border-black rounded"
              }
            >
              Calculate Pension Fund
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
            <button
              className={
                selected
                  ? "bg-blue-500 text-white rounded font-bold"
                  : "bg-white text-black border-solid border-2 border-black rounded"
              }
            >
              Calculate BMI
            </button>
          )}
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel className="flex justify-center">
          <LotCalculator />
        </Tab.Panel>
        <Tab.Panel className="flex justify-center">
          <SalaryCalculator />
        </Tab.Panel>
        <Tab.Panel className="flex justify-center">
          <PensionFundCalculator />
        </Tab.Panel>
        <Tab.Panel className="flex justify-center">
          <BmiCalculator />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}

export default MainTabs;
