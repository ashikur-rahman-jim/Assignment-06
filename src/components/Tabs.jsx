import React from 'react';

const Tabs = ({ setActiveTab, carts }) => {
    

    return (
        <div className='py-12 mt-15 bg-gray-50'>

            {/* Header */}
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-[#101727]">Premium Digital Tools</h2>
                <p className="mt-3 text-[#627382] max-w-2xl mx-auto">
                    Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
                </p>
            </div>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-box justify-center gap-4 mb-8 bg-gray-50">
                <input onClick={() => setActiveTab("products")} type="radio" name="my_tabs_1" className="tab font-semibold px-5 py-2 rounded-full hover:cursor-pointer" aria-label="Products" defaultChecked />

                <input onClick={() => setActiveTab("cart")} type="radio" name="my_tabs_1" className="tab font-semibold px-5 py-2 rounded-full hover:cursor-pointer" aria-label={carts.length === 0 ? "Cart" : `Cart (${carts.length})`}  />
            </div>
        </div>
    );
};

export default Tabs;