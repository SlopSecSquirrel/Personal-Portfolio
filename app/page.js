import Image from "next/image";
import Navbar from "./components/navbar";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

let yearNow;

async function main() {
  yearNow = await prisma.CVEYear.findFirst();
}

export default async function Home() {
  yearNow = await prisma.CVEYear.findFirst();


  return (
    <>
      <Navbar></Navbar>

      <main className="flex flex-col items-center justify-between p-24">
        <h1 className="text-5xl font-bold text-white  py-10 ">Coming soon</h1>
        <h2>Year: {yearNow.year}</h2>
      </main>
    </>
  );
}
