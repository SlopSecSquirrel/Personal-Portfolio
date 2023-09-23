import Image from "next/image";
import Navbar from "./components/navbar";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
import Year from "./components/year";

export default async function Home() {
  let years = await prisma.CVEYear.findMany({
    include: {
      products: {
        include: {
          cves: true,
        },
      },
    },
  });

  // Reverse the years, so the most recent ones come first.
  years.reverse();

  return (
    <>
      <Navbar years={years}></Navbar>

      <section className="mt-10 flex flex-col items-center">   
        {years.map((year) => (
          <div className="w-4/5 justify-center mx-auto" key={year.id}>
            <Year year={year} />
          </div>
        ))}
      </section>
    </>
  );
}
