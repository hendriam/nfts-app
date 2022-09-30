import React from "react";

export default function Action() {
    return (
        <section className="my-28 text-[#F8F0F0] bg-gradient-to-r from-[#323162] to-[#222169] sm:p-20 p-5 rounded-xl">
            <h5 className="font-bold mb-8 text-center uppercase">
                Are You Ready ?
            </h5>
            <h1 className="text-center lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold capitalize mb-10">
                be a part of the <br /> next big thing
            </h1>
            <button
                type="button"
                className="bg-[#000235] flex items-center justify-center h-12 sm:w-48 w-32 rounded-2xl font-bold  mx-auto"
            >
                GET STARTED
            </button>
        </section>
    );
}
