"use client"

export default async function CVEChip({cve}) {
  return (
    <>

      <section className="w-4/5 flex flex-wrap items-center justify-between mx-auto  align-text-bottom">
        <h1>{cve.vulnName}</h1>
      </section>
    </>
  );
}
