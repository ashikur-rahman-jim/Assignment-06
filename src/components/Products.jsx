import React, { use } from 'react';
import ProductsCard from './ProductsCard';

const Products = ({ productsPromise, carts, setCarts }) => {

    const products = use(productsPromise);
    // console.log(products);

    

    return (
        <section className="pb-12  bg-gray-50">

            {/* Products */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8">
                {
                    products.map(product => <div key={product.id}>
                        <ProductsCard product={product} carts={carts} setCarts={setCarts}></ProductsCard>
                    </div>)
                }
            </div>

        </section>
    );
};

export default Products;

