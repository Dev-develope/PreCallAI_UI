'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Partners from './Partners';
const testimonials = [
    {
        quote:
            'QCall AI has transformed our outreach! Outbound calls are quick and personalised, helping us connect with customers more effectively.',
        author: 'Eddkne Helen',
        role: 'CEO & Founder',
        company: 'strideUX',
        image: '/avatars/eddkne-helen.png',
    },
    {
        quote:
            'QCall AI has transformed our outreach! Outbound calls are quick and personalised, helping us connect with customers more effectively.',
        author: 'Eddkne Helen',
        role: 'CEO & Founder',
        company: 'strideUX',
        image: '/avatars/eddkne-helen.png',
    },
    {
        quote:
            'QCall AI has transformed our outreach! Outbound calls are quick and personalised, helping us connect with customers more effectively.',
        author: 'Eddkne Helen',
        role: 'CEO & Founder',
        company: 'strideUX',
        image: '/avatars/eddkne-helen.png',
    },
    // Add more testimonials here
];


export default function LogoSlider() {
    const [current, setCurrent] = useState(0);

    return (
        <div className='bg-gray-200'>
            <div className=" container mx-auto overflow-hidden w-full">
                <Partners />
            </div>
            <div className="w-full flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 py-5">
                <div className="max-w-3xl text-center">
                    <p className="text-4xl font-medium text-gray-900">
                        <span className="text-gray-400 text-3xl">“</span>
                        {testimonials[current].quote.split(/(quick|personalised|more|effectively)/g).map((word, i) => (
                            <span
                                key={i}
                                className={
                                    ['quick', 'more'].includes(word)
                                        ? 'text-purple-500'
                                        : ['personalised', 'effectively'].includes(word)
                                            ? 'text-green-500'
                                            : ''
                                }
                            >
                                {word}
                            </span>
                        ))}
                    </p>
                </div>

                <div className='flex justify-around w-full mt-5 container mx-auto'>
                    <div className="mt-6 flex gap-4">
                        <Image
                            src={testimonials[current].image}
                            alt={testimonials[current].author}
                            width={48}
                            height={48}
                            className="rounded-full"
                        />
                        <div>
                            <p className="font-semibold text-gray-900">{testimonials[current].author}</p>
                            <p className="text-sm text-gray-500">
                                {testimonials[current].role} @ {testimonials[current].company}
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 flex gap-2">
                        {testimonials.map((_, i) => (
                            <span
                                key={i}
                                className={`h-2 w-6 rounded-full transition-colors ${current === i ? 'bg-purple-500' : 'bg-pink-200'
                                    }`}
                                onClick={() => setCurrent(i)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}








