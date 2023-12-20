import { getProductByProductID } from "@/lib/dbUtils";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import Navbar from "@/app/components/navbar";
import Image from "next/image";
import CVEChip from "@/app/components/cve_chip";
export default async function Page({ params }) {
  let product = await getProductByProductID(params.product, true);

  if (product == null) {
    redirect("/hax-detected");
  }

  if (product.state === "private") {
    return (
      <>
        <div className="flex min-h-screen flex-col items-center justify-items-center justify-center px-24 my-0">
          <h1 className="text-5xl font-bold text-white  pb-10 ">
            This product is currently private.
          </h1>
          <p className="text-xl font-semibold text-slate-200 my-10 text-center">
            This product is currently undergoing responsible disclosure. As an
            ethical security professional I have opted to keep this page private
            until the product is patched.
          </p>
          <Link
            className="max-w-xs mx-auto rounded-lg p-4 bg-slate-800 ring-1 ring-slate-800/5 shadow-lg space-y-3 hover:bg-zinc-700 hover:ring-zinc-600 hover:text-zinc-300 text-slate-50 "
            href="/"
          >
            <h3 className="text-lg font-semibold">&larr; Return.</h3>
          </Link>
        </div>
      </>
    );
  }

  
  // Ensure that we only display PUBLIC cves for safety.
  product.cves = product.cves.filter((cve) => cve.vulnState.toLowerCase() === "public")


  const count = product.cves.length;

  // Debug stuff 👇
  // const criticals = product.cves.filter(
  //   (cve) => cve.vulnSeverity == "Critical"
  // );
  // const highs = product.cves.filter((cve) => cve.vulnSeverity == "High");
  // const mediums = product.cves.filter((cve) => cve.vulnSeverity == "Medium");
  // const lows = product.cves.filter((cve) => cve.vulnSeverity == "Low");

  return (
    <>
      <section className="mb-5 flex flex-col items-center">
        <div className="mt-0 w-full md:w-4/5 justify-center mx-auto" key={product._id}>
          <h1 className="m-5 inline-block text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight dark:text-slate-200 text-center">
            Vulnerabilities identified in {product.productName} {product.productVersion}  
          </h1>
          {/* debug stuff 👇 */}
          {/* <h1 className="text-white">{product._id}</h1>
          <h1 className="text-white">Critical count: {criticals.length}</h1>
          <h1 className="text-white">High count: {highs.length}</h1>
          <h1 className="text-white">Medium count: {mediums.length}</h1>
          <h1 className="text-white">Low count: {lows.length}</h1> */}

          {/* <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-5"> */}
          <div className="flex flex-wrap mt-5 p-5">
            {product.cves.map((cve) => (
                <CVEChip key={cve} cve={cve}></CVEChip>
              ))}
          </div>

          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-2/3 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
            <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
              <Image src={"/bug.svg"} width={20} height={20} alt="Logo"></Image>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
