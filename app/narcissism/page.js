import Image from 'next/image'
import Navbar from '../components/navbar'

export default function AboutMe() {
  return (
    <>
      <Navbar></Navbar>

      <main className="flex flex-col items-center justify-between p-24">

        <h1 className="text-5xl font-bold text-white  py-10 ">About Me. <b>Me me me.</b> Me.</h1>
      </main>
    </>
  )
}
