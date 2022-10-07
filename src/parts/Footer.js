import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="mt-28 mb-20 text-[#F8F0F0] flex flex-grow items-start justify-around space-x-4">
            <a href="/" className="text-lg font-semibold hidden sm:block">
                KRYPTO.
            </a>
            <div className="">
                <p className="text-sm mb-10">Krypto</p>
                <Router>
                    <ul className="flex flex-col space-y-3 text-xs">
                        <li>
                            <Link to="/about" className="hover:underline">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/pricing" className="hover:underline">
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:underline">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link to="/buy" className="hover:underline">
                                Buy
                            </Link>
                        </li>
                    </ul>
                </Router>
            </div>
            <div className="">
                <p className="text-sm mb-10">Market</p>
                <ul className="flex flex-col space-y-3 text-xs">
                    <li>
                        <a href="/about" className="hover:underline">
                            Browse Nfts
                        </a>
                    </li>
                    <li>
                        <a href="/about" className="hover:underline">
                            Buy Nfts
                        </a>
                    </li>
                    <li>
                        <a href="/about" className="hover:underline">
                            Sell Nfts
                        </a>
                    </li>
                </ul>
            </div>
            <div className="">
                <p className="text-sm mb-10">Contact</p>
                <ul className="flex flex-col space-y-3 text-xs">
                    <li>
                        <a href="/about" className="hover:underline">
                            Email
                        </a>
                    </li>
                    <li>
                        <a href="/about" className="hover:underline">
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href="/about" className="hover:underline">
                            Instagram
                        </a>
                    </li>
                    <li>
                        <a href="/about" className="hover:underline">
                            Twiter
                        </a>
                    </li>
                </ul>
            </div>
            <div className="">
                <p className="text-lg mb-10 font-semibold">
                    Join Our Newletter
                </p>
                <form className="group relative">
                    <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="absolute left-3 top-1/3 -mt-3.5 text-slate-400 pointer-events-none "
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        />
                    </svg>

                    <input
                        className="focus:ring-2 bg-[#16154C] w-full h-12 focus:outline-none text-sm  text-slate-900 placeholder-slate-400 rounded-lg py-2 pl-10 shadow-sm"
                        type="text"
                        aria-label="Filter projects"
                        placeholder="Email adderess"
                    />
                    <button
                        type="button"
                        className="bg-[#8D8CDA] h-auto w-auto rounded-lg text-sm font-semibold px-5 py-2 mt-2"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </footer>
    );
}
