import { getAllCVEsForProductID } from "@/lib/dbUtils";
import Link from "next/link";
import Year from "../components/year";
import Navbar from "../components/navbar";
import Image from "next/image";
import { getAllCVEYearsAsJSON } from "@/lib/dbUtils";

import { redirect } from "next/navigation";

export default async function Page({ params }) {
  let year = params.year;

  if (isNaN(year) || Number(year) <= 1900 || Number(year) >= 2099) {
    redirect("/hax-detected");
  }

  let years = await getAllCVEYearsAsJSON(true);
  let currentYear = years.find((year) => year.year == Number(params.year));

  if (currentYear == null || currentYear == undefined) {
    return (
      <>
        <Navbar years={years}></Navbar>

        <section className="mb-5 flex flex-col items-center">
          <div className="mt-0 w-4/5 justify-center mx-auto">
            <h1 className="mt-5  text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200 inline-flex items-center justify-center w-full">
              No research was conducted in the year {params.year}
            </h1>
            <h1 className="mt-5  text-lg sm:text-3xl font-bold text-slate-900 tracking-tight dark:text-slate-500 inline-flex items-center justify-center w-full">
              #slacking
            </h1>
            <div className="inline-flex items-center justify-center w-full">
              <hr className="w-2/3 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
              <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
                <Image
                  src={"./bug.svg"}
                  width={20}
                  height={20}
                  alt="Logo"
                ></Image>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Navbar years={years}></Navbar>

      <section className="mb-5 flex flex-col items-center">
        <div
          className="mt-0 w-4/5 justify-center mx-auto"
          key={currentYear._id}
        >
          <Year year={currentYear} />
          {/* <hr className="h-px mt-8 bg-gray-200 border-0 dark:bg-gray-700" /> */}

          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-2/3 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
            <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
              <Image
                src={"./bug.svg"}
                width={20}
                height={20}
                alt="Logo"
              ></Image>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
