"use client"
import Image from "next/image";
import { usePathname } from "next/navigation";
import HeroCard from "./HeroCard";
// import HeroCard from "./HeroCard";
function Hero({ data, children, herocardData }) {
    const path = usePathname()
    const isHomePage = path === "/"
    return (
        <>
            <div className="bg-gradient-to-b from-[rgb(18,0,43)] to-[#240046]">
                <div className="container mx-auto">
                    <div className="min-h-[40rem] flex flex-col text-white text-center tracking-[1px]">
                        <div className="d-flex flex-col justify-center items-center mt-10">
                            <p className="px-4 py-2 rounded-full inline-block text-xs mb-4 border border-gray-400 mt-15">
                                {data?.heading}
                            </p>

                            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold">
                                {data?.h1}
                            </h1>
                            <h2 className="text-2xl sm:text-4xl md:text-5xl font-light mt-2">
                                {data?.h2}
                            </h2>

                            <p className="mt-4 max-w-2xl mx-auto text-gray-300 text-sm sm:text-base ">
                                {data?.para2}
                            </p>
                            <p className="mt-4 max-w-80 mx-auto text-gray-300 text-xs">
                                {data?.para3}
                            </p>

                            {children} {/* Renders any additional content like buttons */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 flex justify-center items-center mt-6 md:mt-[-8rem]">
                {isHomePage ? (
                    // Show Hero UI only on Home Page
                    <div className="h-[28rem] w-full sm:w-4/5 md:w-3/5 lg:w-2/3 flex justify-center items-center bg-white rounded-2xl shadow-lg p-4">
                        <span className="text-gray-600 font-medium text-xs sm:text-sm">

                        </span>
                    </div>
                ) : (
                    <HeroCard herocardData={herocardData} />
                )}
            </div>
        </>
    );
}

export default Hero;
