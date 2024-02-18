import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import {
  LotCalculator,
  SalaryCalculator,
  BmiCalculator,
  AsbfCalculator,
} from "./kirakira";
import { CompoundingFundTab, PensionFundTab } from ".";

function MainTabs() {
  return (
    <Tab.Group>
      <Tab.List className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 my-2 text-sm sm:text-base md:text-lg">
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
              Calculate ASBF
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
              Calculate Compounding Interest
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
        <Tab.Panel className="flex justify-center sm:text-sm">
          <SalaryCalculator />
        </Tab.Panel>
        <Tab.Panel className="flex justify-center">
          <PensionFundTab />
        </Tab.Panel>
        <Tab.Panel className="flex justify-center">
          <AsbfCalculator />
        </Tab.Panel>
        <Tab.Panel className="flex justify-center">
          <CompoundingFundTab />
        </Tab.Panel>
        <Tab.Panel className="flex justify-center">
          <BmiCalculator />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}

export default MainTabs;
