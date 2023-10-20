import Image from "next/image";
import CVEShowcaseDropdown from "./cve_showcase_dropdown";
import NarcissismDropdown from "./narcissism_dropdown";
import { getAllCVEYearsAsJSON } from "@/lib/dbUtils";
import MobilePopoverMenu from "./mobile_menu";
import ImageHover from "./image_hover";

export default async function Navbar() {
  let years = await getAllCVEYearsAsJSON(false);
  // Forcibly sort the years from new to old, just in case.
  years.sort(function (a, b) {
    return a.year > b.year ? -1 : b.year > a.year ? 1 : 0;
  });

  return (
    <navbar className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center mb-0 md:mb-5">
          <ImageHover
            width="40"
            height="40"
            imageOne="/bug.svg"
            imageTwo="/bug_hover.svg"
          ></ImageHover>

          <span className="self-center text-4xl font-semibold whitespace-nowrap text-white px-2">
            Oliver Brooks
            <span className="px-3 dark:text-slate-600 dark:hover:text-slate-400 hidden self-center text-2xl whitespace-nowrap lg:inline-flex md:inline-flex">
              &#47;&#47; doing the security things
            </span>
          </span>
        </a>
        <MobilePopoverMenu years={years}></MobilePopoverMenu>

        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 lg:mr-10 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <CVEShowcaseDropdown years={years}></CVEShowcaseDropdown>
            </li>
            <li>
              <a
                href="/blog"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-red-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Blog <span className="text-red-600">(soon..)</span>
              </a>
            </li>
            <li>
              <NarcissismDropdown></NarcissismDropdown>
            </li>
            <li>
              <a
                href="https://github.com/SlopSecSquirrel/Personal-Portfolio"
                target="_blank"
                className="flex pl-2 pr-2"
              >
                <ImageHover
                  width="32"
                  height="32"
                  imageOne="/github.svg"
                  imageTwo="/github_hover.svg"
                ></ImageHover>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </navbar>
  );
}
