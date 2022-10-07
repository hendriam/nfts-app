import React from "react";
import GetOurAppImage from "../assets/images/Other_18.svg";

export default function GetOurApp() {
    return (
        <section className="grid grid-col-2 sm:grid-cols-4 items-center sm:my-28 my-20 text-[#F8F0F0]">
            <div className="sm:col-span-2 col-span-1 place-self-center">
                <img
                    src={GetOurAppImage}
                    alt="hero"
                    className="sm:max-w-full w-96"
                />
            </div>
            <div className="sm:px-10 px-0 sm:text-start text-center sm:col-span-2 col-span-1">
                <h5 className="font-bold mb-7 uppercase">Get Our App</h5>
                <h2 className="lg:text-4xl md:text-4xl sm:text-2xl text-2xl font-extrabold capitalize mb-5">
                    built-in analytics to track your nfts
                </h2>
                <p className="mb-8">
                    Use our built-in analytics dashboard to pull valuable
                    insights and monitor the value of your Krypto portfolio over
                    time.
                </p>
                <div className="flex flex-row sm:justify-start justify-center space-x-3">
                    <button
                        type="button"
                        className="bg-[#8D8CDA] flex items-center justify-center h-12 w-48 rounded-2xl font-bold"
                    >
                        VIEW OUR PRICING
                    </button>
                </div>
            </div>
        </section>
    );
}
