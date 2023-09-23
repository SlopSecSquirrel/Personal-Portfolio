import React from "react";

export default function Product({ product }) {
  return (
    <div className="my-10 py-2 px-7 bg-slate-50">
      <dl className="divide-y divide-gray-100">
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-base text-transform: capitalize font-medium leading-6 text-gray-900">
            Product Name
          </dt>
          <dd className="mt-1 text-sm leading-6 text-gray-500 sm:col-span-2 sm:mt-0">
            {product.productName}
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-base font-medium leading-6 text-gray-900">
            Product Version
          </dt>
          <dd className="mt-1 text-sm leading-6 text-gray-500 sm:col-span-2 sm:mt-0">
            {product.productVersion}
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-base font-medium leading-6 text-gray-900">Notes</dt>
          <dd className="mt-1 text-sm leading-6 text-gray-500 sm:col-span-2 sm:mt-0">
            {product.notes}
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">CVEs</dt>
          <dd className="mt-1 text-sm leading-6 text-gray-500 sm:col-span-2 sm:mt-0">
            {product.cve}
          </dd>
        </div>
      </dl>
    </div>
  );
}
