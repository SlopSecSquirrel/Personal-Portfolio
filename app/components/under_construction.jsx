"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useEffect } from "react";
export default function UnderConstruction() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    let value;
    // Establish if the user already closed the banner
    value = localStorage.getItem("bannerClosed") || false;
    setOpen(!value);
  }, []);

  // Close the banner when the user clicks the close button.
  const saveToLocalStorage = (e) => {
    localStorage.setItem("bannerClosed", true);
    setOpen(false);
  };

  if (open) {
    return (
      <>
        <div className="grid grid-cols-[minmax(0,1fr),auto,minmax(0,1fr)] items-center hazard">
          <div></div>
          <div className="">
            <span className="text-sm font-bold text-black bg-white bg-opacity-30 rounded-md pl-2 pr-2">
              SITE UNDER CONSTRUCTION
            </span>
          </div>
          <div className="ml-auto mr-2">
            <button className="mt-1 underline text-red-900">
              <Image
                onClick={() => {
                  saveToLocalStorage();
                }}
                alt="Close banner button"
                src={"/close.svg"}
                width={"20"}
                height={"20"}
              ></Image>
            </button>
          </div>
        </div>
      </>
    );
  } else return <></>;
}
