import React, { Component } from "react";
import ButtonHumberger from "../component/ButtonHumberger";
import Navbar from "../component/Navbar";

export default class Header extends Component {
    render() {
        return (
            <header className="flex flex-row justify-between text-[#F8F0F0] mt-8">
                <a href="/" className="text-lg font-semibold">
                    KRYPTO.
                </a>
                <ButtonHumberger />
                <Navbar />
            </header>
        );
    }
}
