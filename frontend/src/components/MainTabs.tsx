import React, { Fragment } from "react";
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
                selected ? "bg-blue-500 text-white" : "bg-white text-black"
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
                selected ? "bg-blue-500 text-white" : "bg-white text-black"
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
                selected ? "bg-blue-500 text-white" : "bg-white text-black"
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
                selected ? "bg-blue-500 text-white" : "bg-white text-black"
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
