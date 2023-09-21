import React from "react";
import Link from "next/link";
import next from "next";
import Product from "../components/product";

export default function Year({ year }) {
  let products = year.products;
  products.reverse(); // put the most recent product first
  return (
    <>
      <section className="bg-slate-700 px-6 pb-8 pt-10 shadow-md ring-2 ring-slate-900 shadow-black w-full rounded-sm p-48 m-5">
        <h1 className="inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">Year {year.year}</h1>

        <ul>
        {products.map((product) => (
          <li  className="text-md  text-slate-900 tracking-tight dark:text-slate-200" key={product.id}><Product product={product}  /></li>
        ))}
        </ul>
      </section>
      
    </>
  );
}
