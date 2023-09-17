import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai"
import { BsInstagram } from "react-icons/bs"


export const Footer = () => {

    return (
        <div className="flex flex-col items-center md:items-start mt-[30%] md:pl-[5%] pb-10 gap-6 bg-stone-950 text-white">
            <hr className="w-24 md:w-28 h-1 bg-orange-400" />
            <h1 className="text-3xl md:mt-[5%] md:text-4xl font-bold">audiophile</h1>
            <div className="flex flex-col md:flex-row gap-4 md:gap-10 md:mt-[3%] items-center justify-center">
                <h4 className="text-white text-xs md:text-xl font-bold font-['Manrope'] uppercase leading-normal tracking-widest">Home</h4>
                <h4 className="text-white text-xs md:text-xl font-bold font-['Manrope'] uppercase leading-normal tracking-widest">Headphones</h4>
                <h4 className="text-white text-xs md:text-xl font-bold font-['Manrope'] uppercase leading-normal tracking-widest">Speakers</h4>
                <h4 className="text-white text-xs md:text-xl font-bold font-['Manrope'] uppercase leading-normal tracking-widest">Earphones</h4>
            </div>
            <p className="opacity-50 mx-[10%] md:mx-[-0.1%] md:mr-[8%] md:mt-[3%] text-center md:text-left text-white text-base md:text-xl font-medium font-['Manrope'] leading-normal">Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
            <div className="flex flex-col md:flex-row md:justify-between md:w-[100%] md:my-[5%] gap-6">
                <p className="opacity-50 text-white text-base md:text-xl font-bold font-['Manrope'] leading-normal">Copyright 2021. All Rights Reserved</p>
                <div className="flex gap-5 mx-[30%] md:mx-[5%] items-center md:items-end justify-center md:justify-end">
                    <AiFillFacebook className="w-10 h-10" />
                    <AiOutlineTwitter className="w-10 h-10" />
                    <BsInstagram className="w-10 h-10" />
                </div>
            </div>
        </div>
    )
}