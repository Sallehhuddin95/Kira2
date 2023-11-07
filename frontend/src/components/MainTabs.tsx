import React from "react";
import { Tab } from "@headlessui/react";
import { LotCalculator } from "./kiralot";

function MainTabs() {
  return (
    <Tab.Group>
      <Tab.List className="grid grid-flow-col justify-stretch">
        <Tab>Calculate Stock Lot</Tab>
        <Tab>Calculate Net Salary</Tab>
        <Tab>Tab 3</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel className="flex justify-center">
          <LotCalculator />
        </Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}

export default MainTabs;
