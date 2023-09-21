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

  return (
    <>
      <Navbar></Navbar>

      <main className="flex flex-col items-center justify-between p-24">
        <h1 className="text-5xl font-bold text-white  py-10 ">Coming soon</h1>
      </main>
    </>
  );
}
