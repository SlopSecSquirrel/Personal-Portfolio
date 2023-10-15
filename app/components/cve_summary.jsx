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
      <div className="flex  md:hidden lg:hidden justify-between items-center m-1 font-medium py-1 px-2 w-screen rounded-lg text-white bg-slate-700">
        <div className="flex text-xs py-1 px-2 font-medium leading-none max-w-full flex-initial">
          Current CVE count: {cves.length}
        </div>
        <div className="flex text-xs  py-1 px-2 font-medium leading-none max-w-full flex-initial">
          Criticals: {criticalCount}
        </div>
        <div className="flex text-xs  py-1 px-2 font-medium leading-none max-w-full flex-initial">
          Highs: {highCount}
        </div>
        <div className="flex text-xs  py-1 px-2 font-medium leading-none max-w-full flex-initial">
          Mediums: {mediumCount}
        </div>
        <div className="flex text-xs  py-1 px-2 font-medium leading-none max-w-full flex-initial">
          Lows: {lowCount}
        </div>
      </div>

      {/* Desktop view */}
      <div className="hidden lg:flex md:flex justify-between items-center m-1 font-medium py-1 px-2 w-screen rounded-lg text-white bg-slate-700">
        <div className="flex text-xs py-1 px-2 font-medium leading-none max-w-full flex-initial">
          CVE count: {cves.length}
        </div>
        <div className="flex text-xs  py-1 px-2 font-medium leading-none max-w-full flex-initial">
          Critical severity CVEs: {criticalCount}
        </div>
        <div className="flex text-xs  py-1 px-2 font-medium leading-none max-w-full flex-initial">
          High severity CVEs: {highCount}
        </div>
        <div className="flex text-xs  py-1 px-2 font-medium leading-none max-w-full flex-initial">
          Medium severity CVEs: {mediumCount}
        </div>
        <div className="flex text-xs  py-1 px-2 font-medium leading-none max-w-full flex-initial">
          Low severity CVEs: {lowCount}
        </div>
      </div>
    </>
  );
}
