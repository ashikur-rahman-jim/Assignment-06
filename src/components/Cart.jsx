import React from 'react';

const Cart = ({ carts, setCarts }) => {
    console.log(carts)

    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0)
    console.log(totalPrice);

    return (
        <section className="bg-gray-50 py-12">
            <div className="container mx-auto px-4 max-w-2xl bg-white rounded-xl shadow-md p-6">
                {/* Header */}
                <h2 className="text-2xl md:text-3xl font-bold text-[#101727] mb-6">Your Cart</h2>

                {
                    carts.length === 0 ? <p className='text-center text-[#101727] py-5 font-bold'>Cart is empty</p> : <>

                        {/* Cart Items */}
                        <div className="space-y-4">
                            {carts.map(cart => (
                                <div key={cart.id} className="flex justify-between items-center bg-[#F9FAFC] p-4">
                                    {/* Item Info */}
                                    <div className="flex items-center gap-4">
                                        <img src={cart.icon} alt="" className="" />
                                        <div>
                                            <h3 className="text-lg font-semibold text-[#101727]">{cart.name}</h3>
                                            <p className="text-sm text-[#627382]">${cart.price}</p>
                                        </div>
                                    </div>

                                    {/* Remove */}
                                    <button className="text-sm text-red-500 hover:cursor-pointer">Remove</button>
                                </div>
                            ))}
                        </div>

                        {/* Total */}
                        <div className="flex justify-between items-center mt-6">
                            <p className="text-[#627382]">Total</p>
                            <p className="text-lg font-bold text-[#101727]">$ {totalPrice}</p>
                        </div>

                        {/* Button */}
                        <div className="mt-6">
                            <button onClick={() => setCarts([])} className="w-full py-3 px-4 bg-linear-to-t from-[#4F39F6] to-[#9514FA] text-white font-semibold rounded-full cursor-pointer hover:opacity-90 transition">
                                Proceed To Checkout
                            </button>
                        </div>

                    </>
                }


            </div>
        </section>
    );
};

export default Cart;

