// components/RecruitmentLanding.jsx
import React from 'react';
import CommonButton from './Button';

// Feature card component
const FeatureCard = ({ icon, title, description }) => (

    <div className='p-[1px] bg-linear-to-r from-purple-300 via-green-200 to-green-200  rounded-2xl'>
        <div className="bg-white rounded-2xl p-6 flex flex-col gap-4 w-full h-full">
            <div className="text-purple-500">{icon}</div>
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-gray-700 text-sm">{description}</p>
        </div>
    </div>
);

// Icons
const LightbulbIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
        <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
    </svg>
);

const ProfileIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
    </svg>
);

const AutomationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
        <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
    </svg>
);

// Main component
const FutureCard = ({ data }) => {
    return (
        <div className="bg-gray-50 flex justify-center py-20">
            <div className="max-w-4xl w-full flex flex-col items-center text-center">
                {/* Badge */}
                <div className="inline-block px-4 py-1 rounded-full bg-white text-sm mb-6 border border-purple-200">
                    {data.badge}
                </div>

                {/* Headings */}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{data.title}</h1>
                {data.subtitle ? <h2 className="text-xl text-gray-700 mb-4">{data.subtitle}</h2>
                    : ""}
                {/* Subtitle */}
                {data.description ? <p className="max-w-xl mb-10">{data.description}</p> : ""}

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-10 text-start">
                    {data.features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>

                {data.description2 ? <p className="max-w-xl mb-10">{data.description2}</p> : ""}
                <CommonButton title={data.buttonText} className="bg-purple-500 hover:bg-purple-600 text-white font-medium px-6 py-3 rounded-full transition-colors" />
            </div>
        </div>
    );
};

// Data Array


export default FutureCard;
