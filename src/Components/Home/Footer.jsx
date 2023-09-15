import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai"
import { BsInstagram } from "react-icons/bs"


export const Footer = () => {

    return (
        <div className="flex flex-col items-center mt-[30%] pb-10 gap-6 bg-stone-950 text-white">
            <hr className="w-24 h-1 bg-orange-400" />
            <h1 className="text-3xl font-bold">audiophile</h1>
            <div className="flex flex-col gap-4 items-center justify-center">
                <h4 className="text-white text-xs font-bold font-['Manrope'] uppercase leading-normal tracking-widest">Home</h4>
                <h4 className="text-white text-xs font-bold font-['Manrope'] uppercase leading-normal tracking-widest">Headphones</h4>
                <h4 className="text-white text-xs font-bold font-['Manrope'] uppercase leading-normal tracking-widest">Speakers</h4>
                <h4 className="text-white text-xs font-bold font-['Manrope'] uppercase leading-normal tracking-widest">Earphones</h4>
            </div>
            <p className="opacity-50 mx-[10%] text-center text-white text-base font-medium font-['Manrope'] leading-normal">Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
            <p className="opacity-50 text-white text-base font-bold font-['Manrope'] leading-normal">Copyright 2021. All Rights Reserved</p>
            <div className="flex gap-5 mx-[30%] items-center justify-center">
                <AiFillFacebook className="w-10 h-10" />
                <AiOutlineTwitter className="w-10 h-10" />
                <BsInstagram className="w-10 h-10" />
            </div>
        </div>
    )
}