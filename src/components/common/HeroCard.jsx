import React from 'react';
import { herocardData } from 'src/constants/naviation';

const HeroCard = ({cardData}) => {
    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-5xl w-full shadow-lg">
                <div className="text-center py-8 px-4">
                    <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm mb-4">
                        What Achievement At Qcall.ai
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        Full operational capability from scratch
                    </h1>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        to improve engagement and drive results.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4 p-4 text-center">
                    {herocardData.map((card, index) => (
                        <div key={index} className={`purple-50 border border-purple-100 rounded-lg p-6`}>
                            {card.extraText && <p className="text-xs">{card.extraText}</p>}
                            <h2 className={`text-xl font-semibold mb-4`}>
                                {card.title}
                            </h2>
                            <p className="text-gray-600 text-sm">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroCard;