import React from "react";
import Link from "next/link";
import Product from "../components/product";
import Musing from "./musing";

export default function Year({ year, openMusing=true  }) {
  let products = year.products;
  products.reverse(); // put the most recent product first

  //Next, sort the array again to put the products in the order of public, then private
  products.sort(function(a,b) {return (a.state > b.state) ? -1 : ((b.state > a.state) ? 1 : 0);} );

  return (
    <>
      <h1 className="mt-5 inline-block text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight dark:text-slate-200">
      Products researched {Number(year.year) == new Date().getFullYear() ? "this year" : "in "+year.year} 
      </h1>
      <br/>

      {/* <div className="px-6 py-3 bg-slate-800 block border border-gray-600 rounded-md shadow my-5">
        <p className="italic text-1xl sm:text-1xl text-slate-900 tracking-tight dark:text-slate-300" dangerouslySetInnerHTML={{__html: year.notes}}></p>
      </div> */}

      <Musing thought={year.notes} defaultOpen={openMusing}></Musing>

      <div className="grid grid-cols-1 grid-rows-1 gap-2 md:grid-cols-1 2xl:grid-cols-2 items-stretch">
        {products.map((product) => (
          <div key={product._id}>
            <Product product={product} />
          </div>
        ))}
      </div>
    </>
  );
}
