
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-lavender-100 text-foreground py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="font-pacifico text-2xl text-barbie-300 text-glow">
                SlayStyle
              </span>
            </Link>
            <p className="text-sm">
              Your ultimate destination for cute, trendy clothing with virtual try-ons.
              Make your fashion dreams come true!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/category/tops" className="hover:text-barbie-300">Tops</Link></li>
              <li><Link to="/category/bottoms" className="hover:text-barbie-300">Bottoms</Link></li>
              <li><Link to="/category/short dresses" className="hover:text-barbie-300">Short Dresses</Link></li>
              <li><Link to="/category/long dresses" className="hover:text-barbie-300">Long Dresses</Link></li>
              <li><Link to="/category/sets" className="hover:text-barbie-300">Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Help</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/size-chart" className="hover:text-barbie-300">Size Chart</Link></li>
              <li><Link to="/shipping" className="hover:text-barbie-300">Shipping Info</Link></li>
              <li><Link to="/returns" className="hover:text-barbie-300">Returns & Exchanges</Link></li>
              <li><Link to="/contact" className="hover:text-barbie-300">Contact Us</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
            <p className="text-sm mb-3">Subscribe for the latest trends, promotions, and updates!</p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-3 py-2 rounded-full border border-lavender-200 focus:outline-none focus:ring-2 focus:ring-barbie-300 text-sm"
              />
              <button className="bg-barbie-300 hover:bg-barbie-400 text-white px-4 py-2 rounded-full text-sm transition-colors font-medium">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-5 border-t border-lavender-200 text-center text-sm">
          <p>© 2025 SlayStyle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
