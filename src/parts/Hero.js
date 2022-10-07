import React from "react";
// import HeroImage from "../assets/images/Other_19.png";
import HeroImage from "../assets/images/Other_19.svg";

export default function Hero() {
    return (
        <section className="grid grid-col-2 sm:grid-cols-4 items-center sm:mt-10 my-10 text-[#F8F0F0]">
            <div className="sm:px-10 px-0  sm:text-start text-center sm:col-span-2 col-span-1">
                <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-extrabold capitalize mb-5">
                    discover and collect rare NFTs
                </h1>
                <p className="mb-8">
                    The most secure marketplace for buying and selling unique
                    crypto assets.
                </p>
                <div className="flex flex-row sm:justify-start justify-center space-x-3">
                    <button
                        type="button"
                        className="bg-[#8D8CDA] flex items-center justify-center h-12 sm:w-48 w-32 rounded-2xl font-bold"
                    >
                        BUY NFTS
                    </button>
                    <button
                        type="button"
                        className="outline outline-2 outline-[#8D8CDA] flex items-center justify-center h-12 sm:w-48 w-32 rounded-2xl font-bold"
                    >
                        SELL NFTS
                    </button>
                </div>
            </div>
            <div className="sm:col-span-2 col-span-1 place-self-center">
                <img
                    src={HeroImage}
                    alt="hero"
                    className="sm:max-w-full w-96"
                />
            </div>
        </section>
    );
}
