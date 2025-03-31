import Image from "next/image";
import CommonButton from "./Button";
import img from "../../../public/images/robo.jpg"
export default function Language() {
    return (
        <div className="relative  flex items-center justify-center px-6">
            
            {/* Background Image (Using Next.js Image Component) */}
            <div className="absolute inset-0 w-full h-full -z-10">
                <Image 
                    src={img} 
                    alt="Background Image" 
                    layout="fill" 
                    objectFit="cover" 
                    priority // Loads image faster
                />
            </div>

            {/* Main Content */}
            <div className="container mx-auto p-4 flex justify-center items-center relative">
                <div className="flex flex-col md:flex-row overflow-hidden p-6 justify-center rounded-lg">
                    
                    {/* Left Section - Text Content */}
                    <div className="md:w-1/2 flex flex-col justify-center p-6">
                        <span className="text-white text-xs border border-white px-3 py-1 rounded-full self-start">
                            Speak their Language
                        </span>
                        <h2 className="text-2xl font-bold text-gray-800 mt-4">
                            QCall.ai Supports <br />Multiple Languages
                        </h2>
                        <ul className="mt-4 space-y-2 text-gray-600">
                            <li>Whether your audience speaks English, Spanish, Hindi, Gujarati, Bengali, Tamil, Kannada, Marathi, or more, QCall.ai handles conversations naturally in multiple languages.</li>
                        </ul>
                        <p className="mt-2 text-sm text-gray-400 max-w-sm">
                            Need a custom voice or regional dialect? We'll train it specifically for you!
                        </p>
                        <div className="mt-6">
                            <CommonButton title="Explore More Voices" className="bg-purple-600 rounded-full text-white text-sm hover:bg-purple-700 transition" />
                        </div>
                    </div>

                    {/* Right Section - Language Cards */}
                    <div className="md:w-1/2 flex justify-center items-center p-4">
                        <div className="flex flex-col items-center mt-12 space-y-6">
                            {[
                                { agent: "Agent 1", language: "English" },
                                { agent: "Agent 2", language: "Hindi" },
                                { agent: "Agent 3", language: "French" },
                            ].map((item, index) => (
                                <div key={index} className="bg-white text-black w-[250px] p-4 rounded-lg shadow-lg flex items-center justify-between">
                                    <div>
                                        <p className="font-semibold">{item.agent}</p>
                                        <p className="text-sm text-gray-600">{item.language}</p>
                                    </div>
                                    <div className="h-8 w-24 bg-purple-200 rounded-full flex items-center justify-center">
                                        <span className="text-xs text-purple-700">🔊 Audio</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
