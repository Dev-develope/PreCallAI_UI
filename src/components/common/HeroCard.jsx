import React from 'react';
const HeroCard = ({ herocardData, className }) => {
    return (
        <div className="flex items-center justify-center mb-10">
            <div className="bg-white rounded-2xl max-w-4xl w-full shadow-lg p-8">
                <div className="text-center py-8 px-4">
                    <div className="inline-block border border-gray-300  px-3 py-1 rounded-full text-xs font-light mb-4">
                        {herocardData[0]?.sectionTitle}
                    </div>
                    <h1 className="text-3xl font-semibold text-center">
                        {herocardData[0]?.mainHeading}
                    </h1>
                    {herocardData[0]?.subHeading ? <p className="text-gray-600 mb-2 mt-2 max-w-2xl mx-auto">
                        {herocardData[0]?.subHeading}
                    </p> : ""}
                    {herocardData[0]?.subpara ? <p className="text-gray-600 mb-1 max-w-2xl mx-auto">
                        {herocardData[0]?.subpara}
                    </p> : ""}
                </div>

                <div className={`${className} grid md:grid-cols-3 gap-4 p-4 text-start`}>
                    {herocardData[0]?.cards?.map((card, index) => (
                        <div key={index} className='p-[1px]  rounded-lg bg-linear-to-r from-purple-500 via-indigo-500 to-blue-500'>
                            <div key={index} className="bg-purple-50 border border-purple-100 rounded-lg p-6 h-full">
                                {card.extraText && <p className="text-xs mb-2">{card.extraText}</p>}
                                <h2 className="text-md font-semibold mb-1">
                                    {card.title}
                                </h2>
                                <p className="text-gray-600 text-sm mb-2">{card.description}</p>
                                {card?.list && (
                                    <ul className="list-disc list-inside text-gray-600 text-sm">
                                        {card?.list?.map((item, i) => (
                                            <li key={i} className="mb-1">{item}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroCard;
