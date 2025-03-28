import React from 'react';
const HeroCard = ({ herocardData, className }) => {
    return (
        <div className="flex items-center justify-center">
            <div className="bg-white rounded-2xl max-w-5xl w-full shadow-lg p-8">
                <div className="text-center py-8 px-4">
                    <div className="inline-block border border-gray-300  px-3 py-1 rounded-full text-xs font-light mb-4">
                        {herocardData[0]?.sectionTitle}
                    </div>
                    <h1 className="text-3xl font-semibold mb-4 text-center">
                        {herocardData[0]?.mainHeading}
                    </h1>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        {herocardData[0]?.subHeading}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4 p-4 text-center">
                    {herocardData[0]?.cards?.map((card, index) => (
                        <div key={index} className='p-[1px]  rounded-lg bg-gradient-to-r from-violet-500 to-purple-500'>
                            <div key={index} className="bg-purple-50 border border-purple-100 rounded-lg p-6 h-full">
                                {card.extraText && <p className="text-xs mb-2">{card.extraText}</p>}
                                <h2 className="text-md font-semibold mb-1">
                                    {card.title}
                                </h2>
                                <p className="text-gray-600 text-sm">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroCard;
