import React from "react";

export default function Product({ product }) {
  return (
    // <div className="my-10 py-2 px-7 bg-slate-50">
    //   <dl className="divide-y divide-gray-100">
    //     <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
    //       <dt className="text-base text-transform: capitalize font-medium leading-6 text-gray-900">
    //         Product Name
    //       </dt>
    //       <dd className="mt-1 text-sm leading-6 text-gray-500 sm:col-span-2 sm:mt-0">
    //         {product.productName}
    //       </dd>
    //     </div>
    //     <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
    //       <dt className="text-base font-medium leading-6 text-gray-900">
    //         Product Version
    //       </dt>
    //       <dd className="mt-1 text-sm leading-6 text-gray-500 sm:col-span-2 sm:mt-0">
    //         {product.productVersion}
    //       </dd>
    //     </div>
    //     <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
    //       <dt className="text-base font-medium leading-6 text-gray-900">Notes</dt>
    //       <dd className="mt-1 text-sm leading-6 text-gray-500 sm:col-span-2 sm:mt-0">
    //         {product.notes}
    //       </dd>
    //     </div>
    //     <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
    //       <dt className="text-sm font-medium leading-6 text-gray-900">CVEs</dt>
    //       <dd className="mt-1 text-sm leading-6 text-gray-500 sm:col-span-2 sm:mt-0">
    //         {product.cve}
    //       </dd>
    //     </div>
    //   </dl>
    // </div>
    <div className="p-6 bg-slate-200 block border border-gray-200 rounded-lg shadow h-full">
      <a href="#">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900">
          {product.productName}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {product.productVersion}
        </span>
      </a>
      <p className="my-3 font-normal text-gray-700">{product.notes}</p>
      <a
        href="#"
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-400 rounded-lg hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300"
      >
        Read more
        <svg
          className="w-3.5 h-3.5 ml-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>
  );
}
