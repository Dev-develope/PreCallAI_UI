import React from "react";

const RetailFeatures = ({ data }) => {
    return (
        <div className="bg-[#0f172a] text-white py-16 text-center">
            {/* Label */}
            {data.label && (
                <div className="inline-block border border-green-300 px-3 py-1 rounded-full text-xs font-light mb-4">
                    {data.label}
                </div>
            )}

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-semibold mb-8">
                {data.title}
            </h2>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto px-6">
                {data.features.map((feature, index) => (
                    <div
                        key={index}
                        className="border border-green-300 p-6 rounded-xl  bg-[#0a0f1e] shadow-lg flex flex-col items-center"
                    >
                        {/* Icon Wrapper - Centered */}
                        <div className="flex items-center justify-center w-12 h-12 bg-purple-300  rounded-full mb-4">
                            {feature.icon}
                        </div>
                        
                        {/* Feature Content */}
                        <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-300 text-sm text-center">{feature.description}</p>
                    </div>
                ))}
            </div>

            {/* Call-to-Action Button */}
            {data.buttonText && (
                <button className="mt-8 bg-purple-600 hover:bg-purple-700 font-medium py-3 px-6 rounded-full text-sm shadow-lg">
                    {data.buttonText}
                </button>
            )}
        </div>
    );
};

export default RetailFeatures;
