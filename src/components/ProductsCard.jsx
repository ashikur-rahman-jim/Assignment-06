import React, { useState } from 'react';
import { Check } from 'lucide-react';

const ProductsCard = ({product}) => {

    const [isSubscribed, setIsSubscribed] = useState(false);

    const handelSubscription = () => {
        setIsSubscribed(true);
    }

    return (
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between">

                            {/* Tag + Icon */}
                            <div className="flex items-center justify-between mb-4">
                                <img src={product.icon} alt="" />
                                <p className="text-sm font-medium text-[#BB4D00] bg-[#FEF3C6] px-3 py-1 rounded-full">{product.tag}</p>
                            </div>

                            {/* Title + Description */}
                            <h3 className="text-xl font-bold text-[#101727]">{product.name}</h3>
                            <p className="text-[#627382] mt-2">{product.description}</p>

                            {/* Price */}
                            <div className='flex items-center mt-4'>
                                <p className="text-lg font-semibold text-[#101727]">{'$' + product.price}</p>
                                <p className='text-sm text-[#627382]'>{'/' + product.period}</p>
                            </div>

                            {/* Features */}
                            <div className="mt-4 space-y-2">
                                {product.features.map((feature, index) => (
                                        <p key={index} className="flex items-center text-[#627382] font-medium gap-2">
                                            <Check className="w-4 h-4 text-[#30B868]" />
                                            {feature}
                                        </p>
                                    ))}
                            </div>

                            {/* Button */}
                            <div className='mt-5'>
                                <button onClick={handelSubscription} className="w-full py-2 px-4 bg-linear-to-t from-[#4F39F6] to-[#9514FA] text-white font-semibold rounded-full hover:opacity-90 transition">{isSubscribed ? "Subscribed" : "Buy Now"}</button>
                            </div>
                        </div>
    );
};

export default ProductsCard;