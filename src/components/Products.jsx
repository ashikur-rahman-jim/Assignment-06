import React, { use } from 'react';
import ProductsCard from './ProductsCard';

const Products = ({ productsPromise }) => {

    const products = use(productsPromise);
    // console.log(products);

    

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
                    products.map(product => <div key={product.id}>
                        <ProductsCard product={product}></ProductsCard>
                    </div>)
                }
            </div>

        </section>
    );
};

export default Products;

