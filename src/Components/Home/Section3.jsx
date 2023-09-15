import React from "react";
import speaker_zx7 from "/DESKTOP/Azubi Africa/Accelerator Phase/React Projects/audiophile_ecommerce/resources/assets/home/mobile/image-speaker-zx7.jpg"
import earphones_yx1 from "/DESKTOP/Azubi Africa/Accelerator Phase/React Projects/audiophile_ecommerce/resources/assets/home/mobile/image-earphones-yx1.jpg"
import speaker_zx9 from "/DESKTOP/Azubi Africa/Accelerator Phase/React Projects/audiophile_ecommerce/resources/assets/home/mobile/image-speaker-zx9.png"


export const Section3 = () => {

    return (
        <div className="flex flex-col items-center mx-[4%] mt-[30%] gap-10">
            <div className="flex flex-col gap-12 bg-orange-400 rounded-lg items-center justify-center">
                <img src={speaker_zx9} alt="speaker2" className="w-46 h-52 mt-12 px-[10%]" />
                <div className="Oval w-72 h-72 rounded-full border border-white mx-[10%] absolute top-[1398px]" />
                <div className="OvalCopy w-80 h-80 rounded-full border border-white mx-[5%] absolute top-[1386px]" />
                <h2 className="text-center text-white text-4xl font-bold font-['Manrope'] uppercase leading-10 tracking-wider">ZX9<br />SPEAKER</h2>
                <div className="OvalCopy2 w-[300px] h-[430px] rounded-full border border-white mx-[-5%] absolute top-[1300px]" />
                <p className="opacity-75 text-center mx-[10%] text-white text-base font-medium font-['Manrope'] leading-normal">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                <button className="w-40 h-12 mb-10 bg-black text-white text-xs font-bold font-['Manrope'] uppercase tracking-wide">SEE PRODUCT</button>
            </div>
            <div className="flex items-center rounded-lg w-96 h-80">
                <div className="flex flex-col gap-10 pl-5">
                    <h2 className="text-black text-3xl font-bold font-['Manrope'] uppercase tracking-widest z-50">ZX7 SPEAKER</h2>
                    <button className="text-black text-xs font-bold font-['Manrope'] uppercase tracking-wide w-40 h-12 border border-black z-50">See Product</button>
                </div>
                <img src={speaker_zx7} alt="ZX7 Speaker" className="h-80 w-96 absolute right-6 rounded-lg" />
            </div>
            <div className="flex items-center h-48 bg-zinc-100 rounded-lg w-96">
                <img src={earphones_yx1} alt="bitmap earphone" className="rounded-lg" />
            </div>
            <div className="flex items-center bg-zinc-100 rounded-lg w-96 h-80">
                <div className="flex flex-col gap-10 pl-5">
                    <h2 className="text-black text-3xl font-bold font-['Manrope'] uppercase tracking-widest">YX1 EARPHONES</h2>
                    <button className="text-black text-xs font-bold font-['Manrope'] uppercase tracking-wide w-40 h-12 border border-black">See Product</button>
                </div>
            </div>
        </div>
    )
}