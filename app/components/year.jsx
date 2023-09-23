import React from "react";
import Link from "next/link";
import next from "next";
import Product from "../components/product";

export default function Year({ year }) {
  let products = year.products;
  products.reverse(); // put the most recent product first
  return (
    <>
      <h1 className="my-10 inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
        Year {year.year}
      </h1>

      <div className="grid grid-cols-1 grid-rows-1 gap-10 md:grid-cols-2 2xl:grid-cols-3 items-stretch">
        {products.map((product) => (
          <div key={product.id}>
            <Product product={product} />
          </div>
        ))}
      </div>
    </>
  );
}
