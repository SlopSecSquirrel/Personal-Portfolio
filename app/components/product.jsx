import React from "react";

export default function Product({ product }) {
  if (product.state.toLowerCase() === "public") {
    return (
      
      <div className="p-6 bg-slate-200 block border border-gray-200 rounded-lg shadow h-full">
        <a href={"/vulns/"+product._id}>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900">
            {product.productName}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {product.productVersion}
          </span>
        </a>
        <p className="my-3 font-normal text-gray-700" dangerouslySetInnerHTML={{__html: product.notes}}></p>
        <a
          href={"/vulns/"+product._id}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Vulns
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    );
  } else {
    return (
      <div className="p-6 bg-gray-400 block border border-gray-200 rounded-lg shadow h-full">
        
          <h5 className="text-2xl font-bold tracking-tight text-gray-900">
            Responsible disclosure in progress
          </h5>
          <span className="text-sm text-gray-900 dark:text-gray-900 italic">version: private</span>
        
        <p className="my-3 font-normal text-gray-700" dangerouslySetInnerHTML={{__html: product.privateNotes}}></p>
      </div>
    );
  }
}
