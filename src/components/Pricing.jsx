import React, { use } from 'react';
import { Check } from 'lucide-react';

const Pricing = ({ pricePromise }) => {

    const pricing = use(pricePromise);
    // console.log(pricing);

    return (
        <section className="py-12 mt-15 bg-gray-50">

            {/* Header */}
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-[#101727]">Simple, Transparent Pricing</h2>
                <p className="mt-3 text-[#627382] max-w-2xl mx-auto">
                    Choose the plan that fits your needs. Upgrade or downgrade anytime.
                </p>
            </div>

            {/* Price */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8">
                {
                    pricing.map(price => <div key={price.id}>
                        <div className={`rounded-xl shadow-md p-6 flex flex-col h-full justify-between ${price.name == "Pro" ? 'bg-linear-to-t from-[#dfdeeb] to-[#c1bfc2] text-white' : 'bg-white'}`}>

                            {/* Title + Description */}
                            <h3 className="text-xl font-bold text-[#101727]">{price.name}</h3>
                            <p className="text-[#627382] mt-2">{price.description}</p>

                            {/* Price */}
                            <div className='flex items-center mt-4'>
                                <p className="text-lg font-semibold text-[#101727]">{'$' + price.price}</p>
                                <p className='text-sm text-[#627382]'>{'/' + price.billing}</p>
                            </div>

                            {/* Features */}
                            <div className="mt-4 space-y-2 flex-grow">
                                {price.features.map((feature, index) => (
                                    <p key={index} className="flex items-center text-[#627382] font-medium gap-2">
                                        <Check className="w-4 h-4 text-[#30B868]" />
                                        {feature}
                                    </p>
                                ))}
                            </div>

                            {/* Button */}
                            <div className='mt-5'>
                                <button className="w-full py-2 px-4 bg-linear-to-t from-[#4F39F6] to-[#9514FA] text-white font-semibold rounded-full hover:opacity-90 transition">Buy Now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </section>
    );
};

export default Pricing;


