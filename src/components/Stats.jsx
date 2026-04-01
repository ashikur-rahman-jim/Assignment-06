import React from 'react';

const Stats = () => {
    return (
        <section className="bg-linear-to-t from-[#4F39F6] to-[#9514FA] py-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-center items-center text-white gap-8 md:gap-16">
                    
                    {/* Active Users */}
                    <div className="text-center">
                        <h2 className="text-4xl md:text-5xl font-bold">50K+</h2>
                        <p className="text-lg md:text-xl mt-2">Active Users</p>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block w-px h-16 bg-white opacity-50"></div>

                    {/* Premium Tools */}
                    <div className="text-center">
                        <h2 className="text-4xl md:text-5xl font-bold">200+</h2>
                        <p className="text-lg md:text-xl mt-2">Premium Tools</p>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block w-px h-16 bg-white opacity-50"></div>

                    {/* Rating */}
                    <div className="text-center">
                        <h2 className="text-4xl md:text-5xl font-bold">4.9</h2>
                        <p className="text-lg md:text-xl mt-2">Rating</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
