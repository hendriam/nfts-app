import React from "react";

export default function Navbar() {
    return (
        <nav className="hidden sm:flex">
            <ul className="flex items-center sm:space-x-16 text-md">
                <li>
                    <a href="/about" className="hover:underline">
                        About
                    </a>
                </li>
                <li>
                    <a href="/about" className="hover:underline">
                        Pricing
                    </a>
                </li>
                <li>
                    <a href="/about" className="hover:underline">
                        Contact
                    </a>
                </li>
                <li>
                    <a href="/about" className="hover:underline">
                        Buy
                    </a>
                </li>
            </ul>
        </nav>
    );
}
