"use client" 

import React, {useState} from "react";
export default function Musing({thought}) {
    const [open, setOpen] = useState(false);
    
    if(open){
  return (
    <>
      {/* <button className="px-6 py-3 bg-slate-800 block border border-gray-600 rounded-md shadow my-5"> */}
      <button onClick={()=>setOpen(false)} className="flex items-center bg-slate-800 my-5 justify-between w-full px-6 py-3 text-left  border  border-gray-600 rounded-md   hover:bg-gray-100 dark:hover:bg-gray-500">
        <p
          className="italic text-1xl sm:text-1xl text-slate-900 tracking-tight dark:text-slate-300"
          dangerouslySetInnerHTML={{ __html: thought }}
        ></p>
        <svg data-accordion-icon className="text-1xl sm:text-1xl text-slate-900 tracking-tight dark:text-slate-300 w-3 h-3 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
      </svg>
      </button>
    </>
  );
} else return (
    <>
      <button onClick={()=>setOpen(true)} className="flex items-center bg-slate-800 my-5 justify-between w-full px-6 py-3 text-left  border  border-gray-600 rounded-md   hover:bg-gray-100 dark:hover:bg-gray-500">
        <p
          className="underline-offset-1 text-1xl sm:text-1xl text-slate-900 tracking-tight dark:text-slate-300"
          dangerouslySetInnerHTML={{ __html: "Click here for some thoughts/goals/reflections on this year's research.." }}
        ></p>
        <svg data-accordion-icon className="text-1xl sm:text-1xl text-slate-900 tracking-tight dark:text-slate-300 w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
      </svg>
      </button>
    </>
)
}
