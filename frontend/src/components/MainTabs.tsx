import React from "react";
import { Tab } from "@headlessui/react";
import { LotCalculator, SalaryCalculator } from "./kirakira";

function MainTabs() {
  return (
    <Tab.Group>
      <Tab.List className="grid grid-flow-col justify-stretch">
        <Tab>Calculate Stock Lot</Tab>
        <Tab>Calculate Net Salary</Tab>
        <Tab>Calculate Pension Fund</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel className="flex justify-center">
          <LotCalculator />
        </Tab.Panel>
        <Tab.Panel className="flex justify-center">
          <SalaryCalculator />
        </Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}

export default MainTabs;
