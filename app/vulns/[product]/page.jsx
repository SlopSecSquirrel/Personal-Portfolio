import { getAllCVEsForProductID } from "@/lib/dbUtils"
import { headers } from 'next/headers'
import Link from "next/link"
import { redirect } from "next/navigation"

export default async function Page({ params }) {
  let product = await getAllCVEsForProductID(params.product)
  
  if(product == null){
    redirect("/hax-detected")
  }

  return <>
    <h1>{product._id}</h1>
  </>
  
}