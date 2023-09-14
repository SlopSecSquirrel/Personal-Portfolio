import Image from 'next/image'
import Navbar from './components/navbar'

// // Fetch all posts (in /pages/index.tsx)
// export async function getStaticProps() {
//   const prisma = new PrismaClient()
//   const posts = await prisma.post.findMany()

//   return {
//     props : { posts }
//   }
// }

export default function Home() {
  return (
    <>
      <Navbar></Navbar>

      <main className="flex flex-col items-center justify-between p-24">

        <h1 className="text-5xl font-bold text-white  py-10 ">Coming soon</h1>
      </main>
    </>
  )
}
