import React from "react";
import { Section1 } from "./Section1";
import { Section2 } from "./Section2";
import { Section3 } from "./Section3";
import { Section4 } from "./Section4";
import { Footer } from "./Footer";

export const Home = () => {

    return (
        <div className="bg-white bg-cover h-full w-full">
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Footer />
        </div>
    )
}