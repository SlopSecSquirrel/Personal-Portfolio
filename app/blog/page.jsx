import { headers } from "next/headers";
import Link from "next/link";

export default async function Page({ params }) {

  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-items-center justify-center p-24">
        <h1 className="text-5xl font-bold text-white  py-10 ">
          Blog coming soon!
        </h1>
        <p className="text-2xl font-bold text-slate-200 italic my-10">
          This is scope creep in action..
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
