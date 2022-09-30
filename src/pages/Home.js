import React, { Component } from "react";
import Action from "../parts/Action";
import Feature from "../parts/Feature";
import Footer from "../parts/Footer";
import GetOurApp from "../parts/GetOurApp";
import GetOurApp2 from "../parts/GetOurApp2";
import Header from "../parts/Header";
import Hero from "../parts/Hero";
import Testimonials from "../parts/Testimonials";
import elipse1 from "../assets/images/elips1.svg";

export default class Home extends Component {
    render() {
        return (
            <div className="max-w-5xl mx-4 sm:mx-8 md:mx-8 lg:mx-auto">
                {/* <img src={elipse1} alt="" className="relative top-0" /> */}
                <Header />
                {/* <img
                    src={elipse1}
                    alt=""
                    className="absolute -top-60 blur-3xl bg-opacity-10"
                />
                <img
                    src={elipse1}
                    alt=""
                    className="absolute top-52 -right-2/3 blur-3xl  bg-opacity-10"
                /> */}
                <Hero />
                <Feature />
                <GetOurApp />
                <GetOurApp2 />
                <Testimonials />
                <Action />
                <Footer />
            </div>
        );
    }
}
