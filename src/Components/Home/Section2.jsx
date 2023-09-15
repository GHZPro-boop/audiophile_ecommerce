import React from "react";
import markone_headphones from "/DESKTOP/Azubi Africa/Accelerator Phase/React Projects/audiophile_ecommerce/resources/assets/shared/mobile/image-xx99-mark-one-headphones.jpg";
import zx9_speaker from "/DESKTOP/Azubi Africa/Accelerator Phase/React Projects/audiophile_ecommerce/resources/assets/home/mobile/image-speaker-zx9.png";
import yx1_earphone from "/DESKTOP/Azubi Africa/Accelerator Phase/React Projects/audiophile_ecommerce/resources/assets/product-yx1-earphones/mobile/image-category-page-preview.jpg";
import { IoIosArrowForward } from "react-icons/io";

export const Section2 = () => {

    return (
        <div className="flex flex-col gap-14 pt-[20%] items-center px-[3%]">
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col items-center justify-center bg-zinc-100 gap-5 w-80 h-40 rounded-lg">
                    <img src={markone_headphones} alt="markone_headphones" className="w-96 h-40 relative bottom-[20px]" />
                    <div className="bg-zinc-100 items-center justify-center flex flex-col gap-5 pb-5 w-80 h-40">
                        <h4 className="text-center text-black text-base font-bold font-['Manrope'] uppercase tracking-wide">HEADPHONES</h4>
                        <div className="flex items-center justify-center gap-2">
                            <h4 className="opacity-50 text-black text-xs font-bold font-['Manrope'] uppercase tracking-wide">SHOP</h4>
                            <IoIosArrowForward className="text-orange-400" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <img src={zx9_speaker} alt="zx9_speaker" className="bg-none bg-white w-20 h-24 shadow-black drop-shadow-8xl relative bottom-[-30px]" />
                <div className="flex flex-col items-center justify-end gap-5 bg-zinc-100 w-80 h-40 pb-5 rounded-lg">
                    <h4 className="text-center text-black text-base font-bold font-['Manrope'] uppercase tracking-wide">SPEAKERS</h4>
                    <div className="flex items-center justify-center gap-2">
                        <h4 className="opacity-50 text-black text-xs font-bold font-['Manrope'] uppercase tracking-wide">SHOP</h4>
                        <IoIosArrowForward className="text-orange-400" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col items-center justify-center gap-5 bg-zinc-100 w-80 h-40 rounded-lg">
                    <img src={yx1_earphone} alt="yx1_earphone" className="bg-white w-20 h-24 relative bottom-[20px]" />
                    <div className="bg-zinc-100 w-80 h-40 pb-5  items-center justify-center flex flex-col gap-5">
                        <h4 className="text-center text-black text-base font-bold font-['Manrope'] uppercase tracking-wide">EARPHONES</h4>
                        <div className="flex items-center justify-center gap-2">
                            <h4 className="opacity-50 text-black text-xs font-bold font-['Manrope'] uppercase tracking-wide">SHOP</h4>
                            <IoIosArrowForward className="text-orange-400" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}