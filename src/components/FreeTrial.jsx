import React from 'react';

const FreeTrial = () => {
    return (
        <section className='bg-linear-to-t from-[#4F39F6] to-[#9514FA] p-15'>

            <div className='text-center mb-10 space-y-8'>

                {/* Title + Description */}
                <h2 className="text-3xl md:text-4xl font-bold text-white">Ready To Transform Your Workflow?</h2>
                <p className="mt-3 text-white max-w-2xl mx-auto">Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>

                {/* Buttons */}
                <div className='flex gap-4 flex-wrap justify-center'>
                    <button className='bg-white font-semibold text-[#9514FA] px-5 py-2 rounded-full hover:cursor-pointer'>Explore Products</button>

                    <button className='font-semibold text-white border border-white px-5 py-2 rounded-full hover:cursor-pointer bg-transparent'>View Pricing</button>
                </div>

                {/* Message */}
                <p className="mt-3 text-white max-w-2xl mx-auto">14-day free trial • No credit card required • Cancel anytime</p>
            </div>

        </section>
    );
};

export default FreeTrial;