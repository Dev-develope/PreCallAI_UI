'use client';

import { useState } from "react";
import Image from "next/image";

const tabs = [
  {
    id: "ai-voice",
    title: "Ai Voice",
    image: "/ai-voice.png",
    heading: "Ai Voice",
    description: "Unify all business communications on a single platform, automate note-taking, and enhance team productivity effortlessly.",
    buttonText: "Book a Demo",
  },
  {
    id: "ai-meetings",
    title: "Ai Meetings",
    image: "/ai-meetings.png",
    heading: "Ai Meetings",
    description: "Manage your meetings with AI-driven scheduling and smart notes to streamline communication.",
    buttonText: "Get Started",
  },
  {
    id: "ai-sales",
    title: "Ai Sales",
    image: "/ai-sales.png",
    heading: "Ai Sales",
    description: "Boost your sales efficiency with AI-assisted customer insights and engagement tracking.",
    buttonText: "Try Now",
  },
];

export default function AiFeatures() {
  const [activeTab, setActiveTab] = useState("ai-voice");

  return (
    <div className="bg-[#e6eff8] h-[35rem] flex flex-col items-center justify-center px-4 overflow-auto">

      {/* Scrollable Tabs */}
      <div className="flex justify-center item-center md:justify-start space-x-4 bg-white p-2 rounded-full shadow-md mb-6 w-full max-w-md md:max-w-lg lg:max-w-84 overflow-x-hidden mt-5">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium ${activeTab === tab.id
              ? "bg-purple-600 text-white shadow-md"
              : "text-gray-700 hover:bg-gray-100"
              }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-center max-w-4xl  space-x-8 p-4 md:p-6 rounded-2xl w-full mb-5">

        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={tabs.find((tab) => tab.id === activeTab)?.image}
            alt={tabs.find((tab) => tab.id === activeTab)?.heading}
            width={350}
            height={250}
            className="rounded-lg shadow-md w-full max-w-xs sm:max-w-sm md:max-w-md"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 p-4 md:p-6 text-center md:text-left">
          <h3 className="text-gray-600 text-xs sm:text-sm">Explore the Qcall.ai Suite</h3>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
            {tabs.find((tab) => tab.id === activeTab)?.heading}
          </h2>
          <p className="text-gray-600 mt-2 text-xs sm:text-sm">
            {tabs.find((tab) => tab.id === activeTab)?.description}
          </p>
          <button className="mt-4 px-4 py-2 sm:px-6 sm:py-2 bg-purple-600 text-white rounded-full text-xs sm:text-sm shadow-md hover:bg-purple-700 transition-all">
            {tabs.find((tab) => tab.id === activeTab)?.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
