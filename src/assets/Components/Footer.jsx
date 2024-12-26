import React from 'react';
import logo from '../Pictures/plotter_files/logo.png';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-sm">
      <div className="container mx-auto px-5 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo and Description */}
        <div className="space-y-4">
          <img
            src={logo} // Replace with your logo path
            alt="Vision Media Logo"
            className="w-32 bg-white"
          />
          <p className="text-gray-400">
            Welcome to Vision Media, Your One-Stop Destination For High-Quality Sublimation Products.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-red-500">My Account</a></li>
            <li><a href="#" className="hover:text-red-500">My Orders</a></li>
            <li><a href="#" className="hover:text-red-500">Wishlist</a></li>
            <li><a href="#" className="hover:text-red-500">Account Security</a></li>
            <li><a href="#" className="hover:text-red-500">Track My Orders</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-red-500">Help Center</a></li>
            <li><a href="#" className="hover:text-red-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-red-500">Refund Policy</a></li>
            <li><a href="#" className="hover:text-red-500">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Connect With Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
          <ul className="space-y-2">
            <li>📞 <a href="tel:+918100280400" className="hover:text-red-500">+91 8100280400</a></li>
            <li>📱 <a href="tel:+919831463859" className="hover:text-red-500">+91 9831463859</a></li>
            <li>✉️ <a href="mailto:sales@visiongifting.com" className="hover:text-red-500">sales@visiongifting.com</a></li>
          </ul>
          <div className="mt-4">
            <h4 className="font-semibold">Head Office</h4>
            <p>📍 Kolkata</p>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold">Branch Office</h4>
            <p>📍 Chennai</p>
            <p>📍 Guwahati</p>
            <p>📍 Hyderabad</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-red-700 text-center py-3">
        <p>&copy; Copyright 1988–2023 | All Rights Reserved.</p>
        <p>Made with ❤️ By Your Creator</p>
      </div>
    </footer>
  );
};

export default Footer;
