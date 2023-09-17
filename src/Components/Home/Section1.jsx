import React from "react";
import header_img from "/DESKTOP/Azubi Africa/Accelerator Phase/React Projects/audiophile_ecommerce/resources/assets/home/mobile/image-header.jpg"
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const Section1 = () => {

    return (
        <div className="bg-zinc-900 bg-cover text-white h-[565px]">
            <div className="flex justify-between md:justify-start items-center pt-[5%] mx-[5%]">
                <GiHamburgerMenu className="w-8 md:w-11 h-8 md:h-11 z-20" />
                <h1 className="text-3xl md:text-4xl md:pl-[10%] font-bold z-20">audiophile</h1>
                <AiOutlineShoppingCart className="md:ml-[55%] w-8 md:w-11 h-8 md:h-11 z-20" />
            </div>
            <hr className="mt-[8%] h-px opacity-10 bg-white" />
            <div>
                <div className="flex flex-col text-center items-center gap-6 md:gap-14 mt-[30%] mx-[10%] md:mx-[15%]">
                    <h3 className="opacity-50 text-center text-white text-2xl md:text-4xl font-normal font-['Manrope'] uppercase tracking-widest z-20">NEW PRODUCT</h3>
                    <h2 className="text-center text-white text-4xl md:text-6xl font-bold font-['Manrope'] uppercase leading-10 tracking-wider z-20">XX99 Mark II<br />HeadphoneS</h2>
                    <p className="opacity-75 text-center text-white text-base md:text-3xl font-medium font-['Manrope'] leading-normal z-20">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                    <button className="w-40 md:w-48 h-12 md:h-14 bg-orange-400 text-white text-xs md:text-xl font-bold font-['Manrope'] uppercase tracking-wide z-20">See Product</button>
                </div>
                <div className="">
                    <img src={header_img} alt="headphones" className="h-[100%] bg-cover w-full absolute bottom-[20px]" />
                </div>
            </div>
        </div>
    )
}