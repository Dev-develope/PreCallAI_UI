import Image from "next/image";
import CommonButton from "./Button";

export default function Future() {
    return (<>
        <div className="bg-gray-300">
            <div className="container mx-auto  flex justify-center items-center">
                <div className="flex flex-col md:flex-row overflow-hidden p-6">
                    <div className="md:w-1/2 flex flex-col p-6">
                        <span className="bg-gradient-to-r from-purple-500 to-green-500  text-xs font-semibold px-3 py-1 rounded-full self-start">
                            Ai-Powered
                        </span>
                        <h2 className="text-2xl font-bold text-gray-800 mt-4">
                            The Future of AI-Powered Calling is Here
                        </h2>
                        <ul className="mt-4 space-y-2 text-gray-600 self-start">
                            <li className="flex items-start"> At QCall.ai, we’re building human-like AI voices with advanced custom voice training—bringing AI conversations closer to reality.
                                We’re not just innovating. We’re revolutionizing AI calling.</li>
                            <li className="flex items-start">Our parent company, TinyCheque, is dedicated to driving AI advancements and creating meaningful solutions that redefine industries.
                                India is innovating, and we’re leading the charge.</li>
                        </ul>
                        <CommonButton title="Try PreCallAi Today" />
                    </div>
                    <div className="md:w-1/2 flex justify-center items-center p-4">
                        <Image src="/mnt/data/image.png" alt="Chat AI" width={450} height={300} className="w-full h-auto rounded-lg border border-gray-200 shadow-md" />
                    </div>
                </div>
            </div>
        </div>
    </>)
}