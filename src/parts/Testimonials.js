import React from "react";
import olivia from "../assets/images/olivia.svg";
import john from "../assets/images/john.svg";
import katty from "../assets/images/katty.svg";

export default function Testimonials() {
    return (
        <section className="my-28 text-[#F8F0F0]">
            <h5 className="font-bold mb-8 text-center uppercase">
                Testimonials
            </h5>
            <h2 className="text-center lg:text-4xl md:text-4xl sm:text-2xl text-2xl font-extrabold capitalize mb-5">
                read what other <br /> shave to say
            </h2>
            <div className="flex flex-row justify-center space-x-3 my-24">
                <div className="relative h-48 sm:w-56 w-52 rounded-lg bg-[#554F8D] bg-opacity-30">
                    <img
                        src={olivia}
                        alt=""
                        className="w-24 absolute sm:left-16 sm:-top-14 left-14 -top-14"
                    />
                    <p className="text-center text-sm mt-16 mb-3 font-bold uppercase">
                        Olivia Cole
                    </p>
                    <p className="text-xs text-center mx-3 leading-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc ullamcorper scelerisque mi, in malesuada felis
                        malesuada vel.
                    </p>
                </div>
                <div className="relative h-48 sm:w-56 w-52 rounded-lg bg-[#554F8D] bg-opacity-30">
                    <img
                        src={john}
                        alt=""
                        className="w-24 absolute sm:left-16 sm:-top-14 left-14 -top-14"
                    />
                    <p className="text-center text-sm mt-16 mb-3 font-bold uppercase">
                        John Doe
                    </p>
                    <p className="text-xs text-center mx-3 leading-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc ullamcorper scelerisque mi, in malesuada felis
                        malesuada vel.
                    </p>
                </div>
                <div className="hidden md:block relative h-48 w-56 rounded-lg bg-[#554F8D] bg-opacity-30">
                    <img
                        src={katty}
                        alt=""
                        className="w-24 absolute left-16 -top-14"
                    />
                    <p className="text-center text-sm mt-16 mb-3 font-bold uppercase">
                        Katty More
                    </p>
                    <p className="text-xs text-center mx-3 leading-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc ullamcorper scelerisque mi, in malesuada felis
                        malesuada vel.
                    </p>
                </div>
            </div>
        </section>
    );
}
