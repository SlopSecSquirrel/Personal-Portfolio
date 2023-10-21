"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function CVEChip({ cve }) {
  let [isVulnDialogOpen, setIsVulnDialogOpen] = useState(false);

  let bgColour = "bg-white";
  switch (cve.vulnSeverity) {
    case "Critical":
      bgColour = "bg-red-700/50 hover:bg-red-700/60 ";
      break;
    case "High":
      bgColour = "bg-orange-600/50 hover:bg-orange-600/60 ";
      break;
    case "Medium":
      bgColour = "bg-yellow-300/50 hover:bg-yellow-300/60";
      break;
    case "Low":
      bgColour = "bg-amber-200/40 hover:bg-amber-200/50";
      break;
  }
  return (
    <>
      <Transition appear show={isVulnDialogOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsVulnDialogOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-slate-900 p-6 text-left align-middle shadow-xl transition-all shadow-slate-200/5 border border-black/50">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-400"
                  >
                    {cve.cveId}
                  </Dialog.Title>
                  <div className="mt-2">
                  <span className="font-medium text-gray-400">
                      Details
                    </span>
                    <p className="text-sm text-gray-50">
                      {cve.vulnDescription}
                    </p>
                  </div>
                  {cve.vulnNotes ? <div className="mt-2">
                    <span className="font-medium text-gray-400 leading-6">Notes</span>
                    <p className="text-sm text-gray-100">{cve.vulnNotes}</p>
                  </div> : <></>}
                  <div className="mt-2">
                    <span className="font-medium text-gray-400">
                      Publication URLs
                    </span>
                    <ul>
                      {cve.pubURLs.split("|").map((URL) => (
                        <li className="mb-2" key={URL}>
                          <a  className="text-sm text-red-500 hover:text-white border-none" href={URL}>{URL}</a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-slate-700 px-4 py-2 text-sm font-medium text-slate-50 hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => setIsVulnDialogOpen(false)}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <div
        className="bg-inherit w-full h-64 p-4 mb-4 md:w-1/2  lg:w-1/3 xl:w-1/5 bg-orange"
        onClick={() => setIsVulnDialogOpen(true)}
      >
        <section
          className={
            " relative w-full h-64 rounded-sm p-4  text-center shadow-xl shadow-slate-800/40 hover:shadow-slate-800/60  cursor-pointer backdrop-blur hover:backdrop-blur-none " +
            bgColour
          }
        >
          <h1 className="absolute text-left w-full bg-stone-900/100 rounded-sm  px-1 py-1 top-0 left-0  text-slate-100/80 font-semibold text-sm ">
            {cve.cveId}
          </h1>
          <div className="flex items-center w-full h-full justify-center  flex-grow">
            <h1 className="font-semibold text-slate-200 text-lg ">
              {cve.vulnName}
            </h1>
          </div>
          <h1 className="absolute bg-stone-900/50 rounded-sm  px-1 py-1 bottom-1 right-1 m-1 text-slate-200/50 font-semibold text-sm">
            {cve.vulnSeverity}
          </h1>
        </section>
      </div>
    </>
  );
}
