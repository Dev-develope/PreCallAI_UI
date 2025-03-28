import React from 'react';
import CommonButton from './Button';
import { driveMoreRevenueData } from 'src/constants/ai-sales';

const QCallHeroSection = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
      >
        <source src="/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div> */}


      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16 text-center">

        <div className="inline-block border px-4 py-2 rounded-full text-sm mb-2">
          What Achievement At Qcall.ai
        </div>

        <h1 className="text-4xl font-light  max-w-4xl mx-auto mb-4 leading-tight">
          Drive More Revenue, Reduce Manual Tasks
        </h1>

        <p className=" text-lg max-w-2xl mx-auto mb-8">
          to improve engagement and drive results.
        </p>

        <div className="grid md:grid-cols-3 gap-6 w-full max-w-4xl px-4">
          {driveMoreRevenueData.map((card, index) => (
            <div
              key={index}
              className=" border border-gray-300 rounded-3xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span className="text-xs text-green-400 mb-2 block">
                {card.category}
              </span>
              <h3 className="text-xl font-semibold mb-4">
                {card.title}
              </h3>
              <p className="text-sm">
                {card.description}
              </p>
            </div>
          ))}
        </div>
        <CommonButton title="Create your AI agent in 30 seconds" className="mt-12 bg-purple-600 hover:bg-purple-700 text-white font-light py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg" />
      </div>
    </div>
  );
};

export default QCallHeroSection;