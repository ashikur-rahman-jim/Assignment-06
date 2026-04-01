import React from 'react';
import NewImg from '../hero-assets/products/Group 5.png';
import { Play } from 'lucide-react';
import BannerImg from '../hero-assets/banner.png';

const Banner = () => {
    return (
        <section className="bg-gray-100 py-12 lg:py-20">

            <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                {/* Left Content */}
                <div id="left-content" className="space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">

                    {/* Badge */}
                    <div className="flex items-center gap-1 bg-indigo-100 px-2 py-1 rounded-full">
                        <div>
                            <img src={NewImg} alt="Badge Image" />
                        </div>
                        <p className='text-sm font-medium bg-linear-to-t from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>New: AI-Powered Tools Available</p>
                    </div>

                    {/* Heading */}
                    <h2 className='text-3xl lg:text-6xl font-extrabold text-[#101727]'>Supercharge Your Digital Workflow</h2>

                    {/* Description */}
                    <p className='text-[#627382] text-sm lg:text-base max-w-md'>Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.
                        Explore Products
                    </p>

                    {/* Buttons */}
                    <div className='flex gap-4 flex-wrap justify-center lg:justify-start'>
                        <button className='text-white font-semibold bg-linear-to-t from-[#4F39F6] to-[#9514FA] px-5 py-2 rounded-full hover:cursor-pointer'>Explore Products</button>

                        <button className='flex items-center gap-2 border border-[#9514FA] text-[#9514FA] px-5 py-2.5 rounded-full font-semibold hover:cursor-pointer'><Play /> Watch Demo</button>
                    </div>
                </div>

                {/* Right Image */}
                <div id="banner-image" className='flex justify-center lg:justify-end'>
                    <img src={BannerImg} alt="Banner Image" className='w-full max-w-md lg:max-w-lg object-contain shadow-2xl' />
                </div>

            </div>

        </section>
    );
};

export default Banner;
