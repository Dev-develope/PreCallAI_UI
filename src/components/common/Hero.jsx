"use client";
import { usePathname } from "next/navigation";
import HeroCard from "./HeroCard";

function Hero({ data, children, herocardData, className,videoPath}) {
    console.log(videoPath,"videoPath")
    const path = usePathname();
    const isHomePage = path === "/";

    return (
        <>
            <div className="relative w-full min-h-[40rem] overflow-hidden z-0">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={videoPath} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Dark Overlay (Optional) */}
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>

                {/* Content */}
                <div className="relative z-10 container mx-auto text-white text-center tracking-[1px] flex flex-col justify-center items-center min-h-[40rem]">
                    <p className="px-4 py-2 rounded-full inline-block text-xs mb-4 border border-gray-400">
                        {data?.heading}
                    </p>

                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold">
                        {data?.h1}
                    </h1>
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-light mt-2">
                        {data?.h2}
                    </h2>

                    <p className="mt-4 max-w-2xl mx-auto text-gray-300 text-sm sm:text-base">
                        {data?.para2}
                    </p>
                    <p className="mt-4 max-w-2xl mx-auto text-gray-300 text-xs">
                        {data?.para3}
                    </p>

                    {children} {/* Additional content like buttons */}
                </div>
            </div>

            {/* Hero Card Section */}
            <div className="container mx-auto px-4 flex justify-center items-center mt-6 md:mt-[-8rem]">
                {isHomePage ? (
                    <div className="h-[28rem] w-full sm:w-4/5 md:w-3/5 lg:w-2/3 flex justify-center items-center bg-white rounded-2xl shadow-lg p-4">
                        <span className="text-gray-600 font-medium text-xs sm:text-sm"></span>
                    </div>
                ) : (
                    <HeroCard herocardData={herocardData} className={className} />
                )}
            </div>
        </>
    );
}

export default Hero;
