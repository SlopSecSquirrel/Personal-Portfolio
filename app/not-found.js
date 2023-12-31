import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-items-center justify-center p-24">
        <h1 className="text-5xl font-bold text-white  py-10 ">
        That&apos;s a 404 eh, bud?
        </h1>
        <p className="text-2xl font-bold text-slate-200 italic my-10">
          The requested page wasn&apos;t found.
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
