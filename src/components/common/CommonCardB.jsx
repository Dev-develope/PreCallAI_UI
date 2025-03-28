// 'use client';

// import Image from 'next/image';

// export default function CommonCardB() {
//     return (
//         <div className="container mx-auto p-4 flex justify-center items-center">
//             <div className="flex flex-col md:flex-row bg-white overflow-hidden p-6">
//                 <div className="md:w-1/2 flex justify-center items-center p-4">
//                     <Image src="/mnt/data/image.png" alt="Chat AI" width={500} height={300} className="w-full h-auto rounded-lg border border-gray-200 shadow-md" />
//                 </div>
//                 <div className="md:w-1/2 flex flex-col justify-center p-6">
//                     <span className="border border-gray-500 text-xs px-3 py-1 rounded-full self-start">
//                         Empower Agents & Enhance Confidence
//                     </span>
//                     <h2 className="text-2xl font-bold text-gray-800 mt-4">
//                         Deliver Instant Solutions to Customer Inquiries
//                     </h2>
//                     <ul className="mt-4 space-y-2 text-gray-600">
//                         <li className="flex items-start"><span className="text-purple-500 mr-2">&#10003;</span> Provide agents with immediate access to accurate answers using Qcall.ai’s intelligent knowledge base.</li>
//                         <li className="flex items-start"><span className="text-purple-500 mr-2">&#10003;</span> Ensuring they are always prepared to assist customers.</li>
//                     </ul>
//                 </div>

//             </div>
//         </div>
//     );
// }


'use client';

import Image from 'next/image';
import { useState } from 'react';
import { cardDataB } from 'src/constants/ai_contact_center';
export default function CommonCard({cardDatas}) {

    return (
        <div className="container mx-auto p-4 flex justify-center items-center">
            {cardDatas.map((card, index) => (
                <div key={index} className="flex flex-col md:flex-row bg-white overflow-hidden p-6">
                    <div className="md:w-1/2 flex justify-center items-center p-4">
                        <Image
                            src={card.imageSrc}
                            alt="Chat AI"
                            width={500}
                            height={300}
                            className="w-full h-auto rounded-lg border border-gray-200 shadow-md"
                        />
                    </div>
                    <div className="md:w-1/2 flex flex-col justify-center p-6">
                        <span className="text-xs px-3 py-1 rounded-full border border-gray-500 self-start">
                            {card.span}
                        </span>
                        <h2 className="text-2xl font-bold text-gray-800 mt-4">
                            {card.h1}
                        </h2>
                        <ul className="mt-4 space-y-2 text-gray-600">
                            {card.list.map((item, listIndex) => (
                                <li key={listIndex} className="flex items-start">
                                    <span className="text-purple-500 mr-2">&#10003;</span>
                                    {item.text}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            ))}
        </div>
    );
}