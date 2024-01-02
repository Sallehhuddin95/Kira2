import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import { PensionFundCalculator } from "./kirakira";
import { CapitalTable } from "./table";

function PensionFundTab() {
  return (
    <Tab.Group>
      <div className="sm:w-3/4 md:w-2/4 w-full">
        <Tab.List className="grid grid-flow-col justify-stretch my-2 text-sm sm:text-base md:text-lg">
          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <button
                className={
                  selected
                    ? "bg-blue-300 text-white rounded font-bold"
                    : "bg-white text-black border-solid border-2 border-black rounded"
                }
              >
                Calculator
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <button
                className={
                  selected
                    ? "bg-blue-300 text-white rounded font-bold"
                    : "bg-white text-black border-solid border-2 border-black rounded"
                }
              >
                Details
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel className="flex  justify-center">
            <PensionFundCalculator />
          </Tab.Panel>
          <Tab.Panel className="flex justify-center">
            <CapitalTable />
          </Tab.Panel>
        </Tab.Panels>
      </div>
    </Tab.Group>
  );
}

export default PensionFundTab;
