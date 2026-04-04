import React from 'react';
import cartImg from '../hero-assets/products/shopping-cart.png';

const NavBar = ({ carts }) => {
    return (
        <nav className="">
            <div className="navbar bg-base-100 shadow-sm container mx-auto px-2 md:px-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Products</a></li>
                            <li><a>Features</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Testimonials</a></li>
                            <li><a>FAQ</a></li>
                        </ul>
                    </div>
                    <h3 className="btn btn-ghost text-xl md:text-3xl bg-linear-to-t from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">DigiTools</h3>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a className="font-semibold text-[#101727]">Products</a></li>
                        <li><a className="font-semibold text-[#101727]">Features</a></li>
                        <li><a className="font-semibold text-[#101727]">Pricing</a></li>
                        <li><a className="font-semibold text-[#101727]">Testimonials</a></li>
                        <li><a className="font-semibold text-[#101727]">FAQ</a></li>
                    </ul>
                </div>
                <div className='navbar-end gap-0.5 md:gap-4 flex items-center'>
                    <div className='flex gap-1 items-center'>
                        <div>
                            <img className="cursor-pointer text-[#101727]" src={cartImg} alt="Shopping Cart Image" />
                        </div>
                        {
                            carts.length === 0 ? null : <p className='text-sm'>({carts.length})</p>
                        }
                    </div>
                    <div className="">
                        <a className="btn btn-ghost btn-sm md:btn-md text-xs md:text-base text-[#101727] px-2">Login</a>
                    </div>
                    <div>
                        <button className="btn btn-primary px-2 text-sm md:px-4 py-2 rounded-full bg-linear-to-t from-[#4F39F6] to-[#9514FA] text-white  md:text-base">Get Started</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
