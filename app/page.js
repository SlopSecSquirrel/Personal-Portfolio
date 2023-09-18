import Image from "next/image";
import Navbar from "./components/navbar";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

export default function Home() {
  return (
    <>
      <Navbar></Navbar>

      <main className="flex flex-col items-center justify-between p-24">
        <h1 className="text-5xl font-bold text-white  py-10 ">Coming soon</h1>
      </main>
    </>
  );
}
