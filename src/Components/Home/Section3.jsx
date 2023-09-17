import React from "react";
import speaker_zx7 from "/DESKTOP/Azubi Africa/Accelerator Phase/React Projects/audiophile_ecommerce/resources/assets/home/mobile/image-speaker-zx7.jpg"
import earphones_yx1 from "/DESKTOP/Azubi Africa/Accelerator Phase/React Projects/audiophile_ecommerce/resources/assets/home/mobile/image-earphones-yx1.jpg"
import speaker_zx9 from "/DESKTOP/Azubi Africa/Accelerator Phase/React Projects/audiophile_ecommerce/resources/assets/home/mobile/image-speaker-zx9.png"


export const Section3 = () => {

    return (
        <div className="flex flex-col items-center mx-[4%] mt-[40%] gap-10 md:gap-24">
            <div className="flex flex-col gap-12 md:gap-20 bg-orange-400 rounded-lg items-center justify-center">
                <img src={speaker_zx9} alt="speaker2" className="w-46 h-52 md:h-60 mt-12 md:mt-28 px-[10%]" />
                <div className="Oval w-72 md:w-96 h-72 md:h-96 rounded-full border border-white mx-[10%] absolute top-[1260px] md:top-[1780px]" />
                <div className="OvalCopy w-80 md:w-[350px] h-80 md:h-[350px] rounded-full border border-white mx-[5%] absolute top-[1249px] md:top-[1750px]" />
                <h2 className="text-center text-white text-4xl md:text-6xl font-bold font-['Manrope'] uppercase leading-10 tracking-wider">ZX9<br />SPEAKER</h2>
                <div className="OvalCopy2 w-[300px] md:w-[760px] h-[430px] md:h-[760px] rounded-full border border-white mx-[-5%] absolute top-[1150px] md:top-[1510px]" />
                <p className="opacity-75 text-center mx-[10%] md:mx-[15%] text-white text-base md:text-3xl font-medium font-['Manrope'] leading-normal">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                <button className="w-40 md:w-48 h-12 md:h-16 mb-10 bg-black text-white text-xs md:text-xl font-bold font-['Manrope'] uppercase tracking-wide">SEE PRODUCT</button>
            </div>
            <div className="flex items-center rounded-lg w-96 h-80">
                <div className="flex flex-col gap-10 md:gap-16 pl-5 md:ml-[-55%]">
                    <h2 className="text-black text-3xl md:text-5xl font-bold font-['Manrope'] uppercase tracking-widest z-50">ZX7 SPEAKER</h2>
                    <button className="text-black text-xs md:text-xl font-bold font-['Manrope'] uppercase tracking-wide w-40 md:w-48 h-12 md:h-16 border border-black z-50">See Product</button>
                </div>
                <img src={speaker_zx7} alt="ZX7 Speaker" className="h-80 md:h-96 w-96 md:w-[710px] absolute right-5 md:right-10 rounded-lg" />
            </div>
            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex items-center h-48 md:h-96 bg-zinc-100 rounded-lg">
                    <img src={earphones_yx1} alt="bitmap earphone" className="rounded-lg md:h-96" />
                </div>
                <div className="flex items-center md:justify-center bg-zinc-100 rounded-lg md:w-[70%] h-80 md:h-96">
                    <div className="flex flex-col gap-10 pl-5 md:pl-0">
                        <h2 className="text-black text-3xl md:text-4xl font-bold font-['Manrope'] uppercase tracking-widest">YX1 EARPHONES</h2>
                        <button className="text-black text-xs md:text-xl font-bold font-['Manrope'] uppercase tracking-wide w-40 md:w-48 h-12 md:h-16 border border-black">See Product</button>
                    </div>
                </div>
            </div>
        </div>
    )
}