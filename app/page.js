import Navbar from "./components/navbar";
import Year from "./components/year";
import dbConnect from "@/lib/dbConnect"
import CVEYear from "@/models/CVEYear"
import CVEProduct from "@/models/CVEProduct"; // this needs to stay, otherwise the populate calls fail below.
import CVE  from "@/models/CVE"; // this needs to stay, otherwise the populate calls fail below.


export default async function Home() {
  await dbConnect();
  const years = await CVEYear.find().populate({
    path: 'products',
    model: "CVEProduct",
    populate: {
        path: 'cves',
        model: "CVE",
    }
  })

  // Reverse the years, so the most recent ones come first.
  years.reverse();


  // This is unfortunate, but I can't see a way around it. Basically because Mongoose returns an object with a prototype full of fun methods etc. 
  // For whatever reason, NextJS/React is getting sad that the object isn't a plain ol' serialized JSON object and it's throwing endless maximum call stack errors, 
  // We mitigate this flaw by making a basic "POJO" clone of the object to pass to the Navbar here.
  let yearsCloned = JSON.parse(JSON.stringify(years));



  return (
    <>
      <Navbar years={yearsCloned}></Navbar>

      <section className="mt-10 flex flex-col items-center">   
        {years.map((year) => (
          <div className="w-4/5 justify-center mx-auto" key={year._id}>
            <Year year={year} />
          </div>
        ))}
      </section>
    </>
  );

}
