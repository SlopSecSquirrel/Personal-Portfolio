"use client"; // This is a client component 👈🏽

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  if (classes == null) return "";
  return classes.filter(Boolean).join(" ");
}

// https://tailwindui.com/components/application-ui/elements/dropdowns this is the source of the dropdown menu

export default function NarcissismDropdown({ years }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
    <div>
      <Menu.Button className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-red-600 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
        Narcissism{" "}
        <svg
          className="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </Menu.Button>
    </div>

    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white/60 backdrop-blur  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1">
        <Menu.Item>
            {({ active }) => (
              <a
                href="/narcissism"
                className={classNames(
                  active
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-700",
                  "block px-4 py-2 text-sm"
                )}
              >
                About me
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="/contact"
                className={classNames(
                  active
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-700",
                  "block px-4 py-2 text-sm"
                )}
              >
                Contact me
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="/resume"
                className={classNames(
                  active
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-700",
                  "block px-4 py-2 text-sm"
                )}
              >
                Resumé
              </a>
            )}
          </Menu.Item>
        </div>
      </Menu.Items>
    </Transition>
  </Menu>
  );
}
