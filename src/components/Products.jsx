import React, { use } from 'react';
import { Check } from 'lucide-react';

const Products = ({ productsPromise }) => {

    const products = use(productsPromise);
    console.log(products);

    return (
        <section className="py-12 mt-15 bg-gray-50">

            {/* Header */}
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-[#101727]">Premium Digital Tools</h2>
                <p className="mt-3 text-[#627382] max-w-2xl mx-auto">
                    Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
                </p>
            </div>

            {/* Tabs */}
            <div className="flex justify-center gap-4 mb-8">
                <input type="radio" name="my_tabs_2" className="tab tab-bordered" aria-label="Products" />
                <input type="radio" name="my_tabs_2" className="tab tab-bordered" aria-label="Cart (0)" />
            </div>

            {/* Products */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8">
                {
                    products.map( product => <div key={product.id}>
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
                                <p className="flex items-center text-[#627382] font-medium">
                                    <Check className='text-[#30B868]' />
                                    {product.features[0]}
                                </p>
                                <p className="flex items-center text-[#627382] font-medium">
                                    <Check className='text-[#30B868]' />
                                    {product.features[1]}
                                </p>
                                <p className="flex items-center text-[#627382] font-medium">
                                    <Check className='text-[#30B868]' />
                                    {product.features[2]}
                                </p>
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

export default Products;

