"use client"

export default  function CVEChip({cve}) {
    let bgColour = "bg-white"
    switch(cve.vulnSeverity){
        case "Critical":
            bgColour = "bg-red-700/80 ";
            break;
            case "High":
            bgColour = "bg-orange-700/90";
            break;
            case "Medium":
            bgColour = "bg-yellow-400/80";
            break;
            case "Low":
            bgColour = "bg-amber-200/80";
            break;
    }
  return (
    <>

      <section className={"relative w-56 h-56 md:w-48 md:h-48 lg:w-64 lg:h-64 mb-5 mr-5 rounded-sm p-4 justify-center text-center shadow-xl shadow-slate-700/60 hover:shadow-slate-500/60  cursor-pointer "+bgColour}>
        <h1 className="font-semibold text-black text-lg">{cve.vulnName}</h1>
        <h1 className="absolute bg-stone-900/50 rounded-sm  px-1 py-1 bottom-1 right-1 m-1 text-slate-200/50 font-semibold text-sm">{cve.vulnSeverity}</h1>
      </section>
    </>
  );
}
