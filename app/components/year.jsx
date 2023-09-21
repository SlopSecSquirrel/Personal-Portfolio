import React from "react";
import Link from "next/link";
import next from "next";
import Product from "../components/product";

export default function Year({ year }) {
  return (
    <>
      <h1>Year {year.year}</h1>
      <h2>This year has many products: </h2>
      <ul>
        {year.products.map((product) => (
          <li key={product.id}>
            <Product product={product} />
          </li>
        ))}
      </ul>
    </>
  );
}
