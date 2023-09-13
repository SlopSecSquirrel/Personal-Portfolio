import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-slate-700 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">

                {/* <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="-1953 -2031 3906 4061">
                    <title>maple leaf from the flag of Canada</title>
                    <path fill="#f00" d="m-90 2030 45-863a95 95 0 0 0-111-98l-859 151 116-320a65 65 0 0 0-20-73l-941-762 212-99a65 65 0 0 0 34-79l-186-572 542 115a65 65 0 0 0 73-38l105-247 423 454a65 65 0 0 0 111-57l-204-1052 327 189a65 65 0 0 0 91-27l332-652 332 652a65 65 0 0 0 91 27l327-189-204 1052a65 65 0 0 0 111 57l423-454 105 247a65 65 0 0 0 73 38l542-115-186 572a65 65 0 0 0 34 79l212 99-941 762a65 65 0 0 0-20 73l116 320-859-151a95 95 0 0 0-111 98l45 863z" />
                </svg> */}
                {/* Gorgeous bug adopted with love from https://www.svgrepo.com/svg/524337/bug-minimalistic */}
                <svg className="h-8 w-8 mr-2" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 10C5 6.13401 8.13401 3 12 3C15.866 3 19 6.13401 19 10V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V10Z" stroke="#ffffff" stroke-width="1.5" />
                    <path d="M19 13H22" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M5 13H2" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M20.4999 7L18.7021 7.71909" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M3.50012 7L5.29785 7.71909" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M14.5 3.5L17 2" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M9.5 3.5L7 2" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M20.5 19.0002L18.5 18.2002" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M3.5 19.0002L5.5 18.2002" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M10.5 10.5H13.5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M10.5 15.5H13.5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" />
                </svg>

                <span className="font-semibold text-2xl tracking-tight text-white">Oliver Brooks&apos; Portfolio</span>
                <span className="ml-2 font-semibold text-2xl tracking-tight text-slate-500">// a digital resumé</span>
            </div>
            <div className="block lg:hidden">
                <button aria-controls="navbar-default" aria-expanded="false" data-collapse-toggle="navbar-default" className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto" id="navbar-default">
                <div className="text-sm lg:flex-grow">
                    <Link href="/" className="block mt-4 lg:inline-block lg:mt-0 text-fuchsia-200 hover:text-white mr-4">
                        CVE Showcase
                    </Link>
                    <Link href="/narcissism" className="block mt-4 lg:inline-block lg:mt-0 text-fuchsia-200 hover:text-white mr-4">
                        About Me
                    </Link>
                    <span className="text-gray-400 cursor-not-allowed  block mt-4 lg:inline-block lg:mt-0 hover:text-fuchsia-200">
                        <span className="line-through">Blog</span> <span className='text-white'>(coming soon...™ )</span>
                    </span>
                </div>
                <div className="flex">
                    <Link className='inline-block max-w-xs  rounded-lg p-4 bg-slate-800 ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-zinc-700 hover:ring-zinc-600 hover:text-zinc-300 text-slate-50 ' href="/"><h3 className='text-sm font-semibold'>Download Resumé</h3></Link>
                    <Link className='inline-block max-w-xs ml-5 rounded-lg p-4 bg-slate-800 ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-zinc-700 hover:ring-zinc-600 hover:text-zinc-300 text-slate-50 ' href="https://github.com/SlopSecSquirrel/Personal-Portfolio/"> <Image width="24" height="24" src={"/github-mark-white.svg"}></Image>  </Link>
                </div>
            </div>
        </nav>
    );
}   