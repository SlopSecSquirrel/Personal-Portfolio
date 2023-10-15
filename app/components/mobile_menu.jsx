"use client";

import { Popover, Transition } from "@headlessui/react";
import Image from "next/image";
import React, { Fragment } from "react";

export default function MobilePopoverMenu({ years }) {
  return (
    <div className="max-w-sm lg:hidden md:hidden ">
      <Popover className="fixed top-0 right-0 mt-5 mr-5">
        <Popover.Button className="group inline-flex items-center rounded-md px-3 py-2 text-base font-medium text-white hover:text-opacity-100 hover:bg-blue-500">
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </Popover.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute divide-gray-300  bg-white/50 backdrop-blur my-5 justify-between py-3 text-left  border  border-gray-600 rounded-md  left-1/3 z-10 mt-3 w-screen max-w-sm -translate-x-1/3 transform sm:px-0 lg:max-w-3xl">
            <div className="grid grid-cols-1 font-normal">
              <div className="">
                <a href="/" className="pl-5 flex items-center mb-0 md:mb-5 py-2 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-grey-900 md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Home
                </a>
                <hr></hr>
              </div>
              <div className="">
                <a href="/contact" className="pl-5 flex items-center mb-0 md:mb-5 py-2 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-grey-900 md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Contact me
                </a>
                <hr></hr>
              </div>
              <div className="">
                <a href="/narcissism" className="pl-5 flex items-center mb-0 md:mb-5 py-2 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-grey-900 md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Narcissism
                </a>
                <hr></hr>
              </div>
              <div className="">
                <a href="/resume" className="pl-5 flex items-center mb-0 md:mb-5 py-2 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-grey-900 md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  My resume
                </a>
                <hr></hr>
              </div>
              <div className="">
              <a
                href="https://github.com/SlopSecSquirrel/Personal-Portfolio"
                target="_blank"
                className="pl-5 flex items-center mb-0 md:mb-5 py-2 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-grey-900 md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                <Image
                  src={"/github_dark.svg"}
                  width={32}
                  height={32}
                  alt="GitHub icon"
                ></Image>
                <span className="pl-2">Open Source</span>
              </a>
                {/* <a href="https://github.com/SlopSecSquirrel/Personal-Portfolio" className=' hover:text-orange-700' target='_blank'>Github</a> */}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}
