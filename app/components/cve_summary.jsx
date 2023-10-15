import React from 'react'
import { getAllCVEs } from '@/lib/dbUtils'

export default async function CVESummary() {
    // Step 1, get all of the CVEs out of the database
    const cves = await getAllCVEs()

    // Step 2, make the various counts of finding severities
    const count = cves.length;
    const criticalCount = cves.filter(cve => cve.vulnSeverity == "Critical").length
    const highCount = cves.filter(cve => cve.vulnSeverity == "High").length
    const mediumCount = cves.filter(cve => cve.vulnSeverity == "Medium").length
    const lowCount = cves.filter(cve => cve.vulnSeverity == "Low").length

    // Step 3, display little chips for each of the counts
    return (
        <>
    <div className="flex justify-center items-center m-1 font-medium py-1 px-2  rounded-lg text-white bg-red-900">
            <div className="text-xs py-1 px-2 font-medium leading-none max-w-full flex-initial">Current CVE count: {cves.length}</div>
    </div>
    <div className="flex justify-center items-center m-1 font-medium py-1 px-2  rounded-lg text-white bg-red-800 ">
            <div className="text-xs  py-1 px-2 font-medium leading-none max-w-full flex-initial">Criticals: {criticalCount}</div>
    </div>
    <div className="flex justify-center items-center m-1 font-medium py-1 px-2  rounded-lg text-white bg-red-700 ">
            <div className="text-xs  py-1 px-2 font-medium leading-none max-w-full flex-initial">Highs: {highCount}</div>
    </div>
    <div className="flex justify-center items-center m-1 font-medium py-1 px-2  rounded-lg text-white bg-red-600 ">
            <div className="text-xs  py-1 px-2 font-medium leading-none max-w-full flex-initial">Mediums: {mediumCount}</div>
    </div>
    <div className="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-lg text-white bg-red-500 ">
            <div className="text-xs  py-1 px-2 font-medium leading-none max-w-full flex-initial">Lows: {lowCount}</div>
    </div>
    
    </>
  )
}