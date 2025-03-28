import { cardData2 } from "src/constants/naviation";
import CommonButton from "./Button";

export default function CardItem2() {
    return (
        <section className="py-16 px-4 text-center bg-white flex flex-col justify-center items-center">
            <div className="flex flex-col items-center max-w-lg w-full">
                <span className="px-4 py-1 border border-gray-300 rounded-full text-xs text-black">
                    Use Cases
                </span>
                <h2 className="text-[clamp(1.25rem,5vw,2rem)] font-bold text-gray-900 mt-4 text-center">
                    Who can benefit from PreCallAI
                </h2>
                <p className="text-gray-600 mt-2 text-[clamp(0.875rem,3vw,1rem)] max-w-md">
                    Sales & Lead generation - Automated cold calls, qualify leads,
                    and follow up without lifting a finger.
                </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
                {cardData2?.map((ele, index) => (
                    <div key={index} className="border border-purple-300 rounded-xl p-6 shadow-md text-center">
                        <div>Icon</div>
                        <h3 className="text-sm font-semibold text-purple-600 mt-2">{ele.Heading}</h3>
                        <p className="text-gray-600 text-sm mt-2">
                            {ele.para1}
                        </p>
                    </div>
                ))}
            </div>
            <p className="text-gray-600 text-[clamp(1rem,3vw,1.25rem)] mt-5 max-w-md">
                If your business relies on calls, PreCallAI is your GameChanger.
            </p>
            <div className="mt-5">
                <CommonButton className="text-white bg-purple-600 px-6 py-3 rounded-full text-[clamp(0.875rem,2vw,1rem)]" title="Request a Demo" />
            </div>
        </section>
    );
}