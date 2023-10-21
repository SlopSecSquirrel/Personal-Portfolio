import React from "react";
import { getAllCVEs } from "@/lib/dbUtils";

export default async function CVESummary() {
  // Step 1, get all of the CVEs out of the database
  const cves = await getAllCVEs();

  // Step 2, make the various counts of finding severities
  const count = cves.length;
  const criticalCount = cves.filter(
    (cve) => cve.vulnSeverity == "Critical"
  ).length;
  const highCount = cves.filter((cve) => cve.vulnSeverity == "High").length;
  const mediumCount = cves.filter((cve) => cve.vulnSeverity == "Medium").length;
  const lowCount = cves.filter((cve) => cve.vulnSeverity == "Low").length;

  // Step 3, display little chips for each of the counts
  return (
    <>
      {/* Mobile view */}
      <div className="flex   flex-wrap  md:hidden justify-center items-center m-1 font-medium py-1 px-2 w-full rounded-lg text-white bg-slate-700">
        <span className="flex flex-overflow text-xs py-1 px-2 font-medium leading-none max-w-full flex-initial">
          CVEs: {cves.length}
        </span>
        <span className="flex  text-sm py-1 px-2 font-bold leading-none max-w-full flex-initial text-red-600">
          /
        </span>
        <span className="flex  text-xs  py-1 px-2 font-medium leading-none max-w-full flex-initial">
          Criticals: {criticalCount}
        </span>
        <span className="flex  text-sm py-1 px-2 font-bold leading-none max-w-full flex-initial text-red-600">
          /
        </span>
        <span className="flex  text-xs  py-1 px-2 font-medium leading-none max-w-full flex-initial">
          Highs: {highCount}
        </span>
        <span className="flex  text-sm py-1 px-2 font-bold leading-none max-w-full flex-initial text-red-600">
          /
        </span>
        <span className="flex  text-xs  py-1 px-2 font-medium leading-none max-w-full flex-initial">
          Mediums: {mediumCount}
        </span>
        <span className="flex  text-sm py-1 px-2 font-bold leading-none max-w-full flex-initial text-red-600">
          /
        </span>
        <span className="flex  text-xs  py-1 px-2 font-medium leading-none max-w-full flex-initial">
          Lows: {lowCount}
        </span>
      </div>

      {/* Desktop view */}
      <div className="hidden md:flex justify-between items-center m-1 font-medium py-1 px-2 w-screen rounded-lg text-white bg-slate-700">
        <span className="flex text-xs py-1 px-2 font-medium leading-none max-w-full flex-initial">
          Total CVEs: {cves.length}
        </span>
        <span className="flex text-sm py-1 px-2 font-bold leading-none max-w-full flex-initial text-red-600">
          /
        </span>
        <span className="flex text-xs  py-1 px-2 font-medium leading-none max-w-full flex-initial">
          Critical Severity CVEs: {criticalCount}
        </span>
        <span className="flex text-sm py-1 px-2 font-bold leading-none max-w-full flex-initial text-red-600">
          /
        </span>
        <span className="flex text-xs  py-1 px-2 font-medium leading-none max-w-full flex-initial">
          High Severity CVEs: {highCount}
        </span>
        <span className="flex text-sm py-1 px-2 font-bold leading-none max-w-full flex-initial text-red-600">
          /
        </span>
        <span className="flex text-xs  py-1 px-2 font-medium leading-none max-w-full flex-initial">
          Medium Severity CVEs: {mediumCount}
        </span>
        <span className="flex text-sm py-1 px-2 font-bold leading-none max-w-full flex-initial text-red-600">
          /
        </span>
        <span className="flex text-xs  py-1 px-2 font-medium leading-none max-w-full flex-initial">
          Low Severity CVEs: {lowCount}
        </span>
      </div>
    </>
  );
}
