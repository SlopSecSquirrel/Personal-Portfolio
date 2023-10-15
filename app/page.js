import Navbar from "./components/navbar";
import Year from "./components/year";
import Image from "next/image";

import { getAllCVEYearsAsJSON } from "@/lib/dbUtils";
import CVESummary from "./components/cve_summary";

export default async function Home() {
  let years = await getAllCVEYearsAsJSON(true);

  return (
    <>
      <Navbar></Navbar>

      <section className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 align-text-bottom">
        <CVESummary></CVESummary>
      </section>

      <section className="mb-5 flex flex-col items-center">
        {years.map((year) => (
          <div className="mt-0 w-4/5 justify-center mx-auto" key={year._id}>
            <Year year={year} openMusing={year.year == new Date().getFullYear()} />
            {/* <hr className="h-px mt-8 bg-gray-200 border-0 dark:bg-gray-700" /> */}
            
            <div className="inline-flex items-center justify-center w-full">
              <hr className="w-2/3 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
              <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
                <Image
                  src={"/bug.svg"}
                  width={20}
                  height={20}
                  alt="Logo"
                ></Image>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
