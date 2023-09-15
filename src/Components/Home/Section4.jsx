import React from "react";
import bestgear_img from "/DESKTOP/Azubi Africa/Accelerator Phase/React Projects/audiophile_ecommerce/resources/assets/shared/mobile/image-best-gear.jpg"

export const Section4 = () => {

    return (
        <div className="flex flex-col items-center gap-10 mt-[30%] mx-[10%]">
            <img src={bestgear_img} alt="bestgear_img" className="w-80 h-72 rounded-lg" />
            <div className="flex flex-col gap-10">
                <h3 className="text-center">
                    <span className="text-black text-3xl font-bold font-['Manrope'] uppercase tracking-wide">Bringing you the </span>
                    <span className="text-orange-400 text-3xl font-bold font-['Manrope'] uppercase tracking-wide">best </span>
                    <span className="text-black text-3xl font-bold font-['Manrope'] uppercase tracking-wide">audio gear</span>
                </h3>
                <p
                    className="opacity-50 text-center text-black text-base font-medium font-['Manrope'] leading-normal">
                    Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                </p>
            </div>
        </div>
    )
}