import React from 'react';
import Instagram from '../hero-assets/Social/Instagram.png'
import Facebook from '../hero-assets/Social/Facebook.png'
import x from '../hero-assets/Social/x.png'

const Footer = () => {
    return (
        <footer className="bg-[#101727] text-white py-12">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                
                {/* Company Info */}
                <div>
                    <h3 className="text-2xl font-bold mb-4">DigiTools</h3>
                    <p className="text-sm text-gray-300">
                        Premium digital tools for creators, professionals, and businesses. 
                        Work smarter with our suite of powerful tools.
                    </p>
                </div>

                {/* Product */}
                <div>
                    <p className="font-semibold text-lg mb-3">Product</p>
                    <ul className="space-y-2 text-gray-300">
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Templates</li>
                        <li>Integrations</li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <p className="font-semibold text-lg mb-3">Company</p>
                    <ul className="space-y-2 text-gray-300">
                        <li>About</li>
                        <li>Blog</li>
                        <li>Careers</li>
                        <li>Press</li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <p className="font-semibold text-lg mb-3">Resources</p>
                    <ul className="space-y-2 text-gray-300">
                        <li>Documentation</li>
                        <li>Help Center</li>
                        <li>Community</li>
                        <li>Contact</li>
                    </ul>
                </div>

                {/* Social Links */}
                <div>
                    <p className="font-semibold text-lg mb-3">Social Links</p>
                    <div className="flex space-x-4">
                        <img src={Instagram} alt="Instagram" className="w-6 h-6 cursor-pointer bg-white rounded-full p-1" />
                        <img src={Facebook} alt="Facebook" className="w-6 h-6 cursor-pointer bg-white rounded-full p-1" />
                        <img src={x} alt="Twitter/X" className="w-6 h-6 cursor-pointer bg-white rounded-full p-1" />
                    </div>
                </div>
            </div>

            {/* Divider */}
            <hr className="border-gray-700 my-8" />

            {/* Bottom Section */}
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
                <p>© 2026 DigiTools. All rights reserved.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <p className="cursor-pointer hover:text-white">Privacy Policy</p>
                    <p className="cursor-pointer hover:text-white">Terms of Service</p>
                    <p className="cursor-pointer hover:text-white">Cookies</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
