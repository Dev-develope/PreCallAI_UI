import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';
import { footerData } from 'src/constants/naviation';

const Footer= () => {
    return (
        <footer className="bg-white text-gray-700 py-10 px-4 mt-10">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="col-span-1 flex flex-col items-center md:items-start">
                    <Image 
                        src={footerData.logo.src} 
                        alt={footerData.logo.alt} 
                        width={120} 
                        height={40} 
                        className="mb-2"
                    />
                    <p className="text-xs text-gray-500 text-center md:text-left">
                        {footerData.logo.tagline}
                    </p>
                </div>

                {footerData.sections.map((section, index) => (
                    <div key={index} className="col-span-1">
                        <h3 className="font-semibold mb-4 text-center md:text-left">
                            {section.title}
                        </h3>
                        <div className="flex flex-col items-center md:items-start space-y-2">
                            {section.links.map((link, linkIndex) => (
                                <Link 
                                    key={linkIndex} 
                                    href={link.href} 
                                    className="text-xs text-gray-600 hover:text-gray-900 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}

                <div className="col-span-1">
                    <h3 className="font-semibold mb-4 text-center md:text-left">Contact Us</h3>
                    <div className="flex flex-col items-center md:items-start space-y-2">
                        <p className="text-sm text-gray-600">{footerData.contact.phone}</p>
                        <p className="text-sm text-gray-600">{footerData.contact.email}</p>
                        <div className="flex space-x-4 mt-2">
                            {footerData.contact.socials.map((social, index) => (
                                <Link 
                                    key={index} 
                                    href={social.href} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-gray-900 transition-colors"
                                >
                                    <social.icon size={20} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


            <div className="border-t border-gray-200 mt-8 pt-6">
                <p className="text-center text-sm text-gray-500">
                    {footerData.copyright}
                </p>
            </div>
        </footer>
    );
};

export default Footer;