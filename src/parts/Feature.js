import React from "react";
import image5 from "../assets/images/image_5.png";
import image6 from "../assets/images/image_6.png";
import image7 from "../assets/images/image_7.png";
import image8 from "../assets/images/image_8.png";

export default function Feature() {
    return (
        <section className="text-[#F8F0F0] ">
            <h5 className="font-bold mb-3 uppercase">Featured On</h5>
            <div className="flex flex-wrap flex-row items-center justify-between h-auto sm:py-2 py-2 px-10 rounded-lg bg-[#554F8D] opacity-40">
                <img src={image5} alt="image 5" className="h-3" />
                <img src={image6} alt="image 6" className="h-8" />
                <img src={image7} alt="image 7" className="h-3" />
                <img src={image8} alt="image 8" className="h-3" />
            </div>
        </section>
    );
}
