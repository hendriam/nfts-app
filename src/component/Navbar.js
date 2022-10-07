import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Navbar() {
    return (
        <Router>
            <nav className="hidden sm:flex">
                <ul className="flex items-center sm:space-x-16 text-md">
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
            </nav>
        </Router>
    );
}
