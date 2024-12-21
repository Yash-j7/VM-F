import React from 'react'

function Footer2() {
  return (
    <div>
  <footer className="bg-white lg:grid lg:grid-cols-5 lg:gap-8 p-8">
    {/* Logo Section */}
    <div className="relative w-72 h-72 lg:col-span-1 flex items-start">
      <img
        src="https://visiongifting.com/wp-content/uploads/2023/08/VISION-MEDIA-RAW-LOGO-1-1-1200x760.png"
        alt="Logo"
        className="w-72 h-auto"
      />
    </div>

    {/* Links Section */}
    <div className="lg:col-span-4">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Contact Section */}
        <div>
          <p>
            <span className="text-xs uppercase tracking-wide text-gray-500">Call us</span>
            <a href="#" className="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl">
              0123456789
            </a>
          </p>

          <ul className="mt-4 space-y-1 text-sm text-gray-700">
            <li>Monday to Friday: 10am - 5pm</li>
            <li>Weekend: 10am - 3pm</li>
          </ul>

          {/* Social Links */}
          <ul className="mt-4 flex gap-6">
            <li>
              <a href="#" target="_blank" className="text-gray-700 hover:opacity-75">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
            </li>
           
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <p className="font-medium text-gray-900">Services</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#" className="text-gray-700 hover:opacity-75">1on1 Coaching</a></li>
            <li><a href="#" className="text-gray-700 hover:opacity-75">Company Review</a></li>
            <li><a href="#" className="text-gray-700 hover:opacity-75">Accounts Review</a></li>
            <li><a href="#" className="text-gray-700 hover:opacity-75">HR Consulting</a></li>
            <li><a href="#" className="text-gray-700 hover:opacity-75">SEO Optimisation</a></li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <p className="font-medium text-gray-900">Company</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#" className="text-gray-700 hover:opacity-75">About</a></li>
            <li><a href="#" className="text-gray-700 hover:opacity-75">Meet the Team</a></li>
            <li><a href="#" className="text-gray-700 hover:opacity-75">Accounts Review</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-100 pt-4 sm:flex sm:justify-between">
        <ul className="flex flex-wrap gap-4 text-xs">
          <li><a href="#" className="text-gray-500 hover:opacity-75">Terms & Conditions</a></li>
          <li><a href="#" className="text-gray-500 hover:opacity-75">Privacy Policy</a></li>
          <li><a href="#" className="text-gray-500 hover:opacity-75">Cookies</a></li>
        </ul>
        <p className="mt-4 text-xs text-gray-500 sm:mt-0">
          &copy; 2022. Company Name. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</div>

  )
}
export default Footer2
