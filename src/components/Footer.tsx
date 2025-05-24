import {
    FaInstagram,
    FaFacebookF,
    FaYoutube,
    FaLinkedinIn,
  } from 'react-icons/fa';
  
  export default function Footer() {
    return (
      <footer className="bg-[#506a52] text-white text-sm mt-8">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo + Socials */}
          <div>
            <h1 className="text-2xl font-semibold">
              <span className="text-green-300">Just</span>Local
            </h1>
            <div className="flex mt-4 space-x-4 text-2xl">
              <a href="#"><FaInstagram className="hover:text-pink-400" /></a>
              <a href="#"><FaFacebookF className="hover:text-blue-500" /></a>
              <a href="#"><FaYoutube className="hover:text-red-500" /></a>
              <a href="#"><FaLinkedinIn className="hover:text-blue-700" /></a>
            </div>
          </div>
  
          {/* About */}
          <div>
            <h3 className="text-green-300 font-semibold mb-2">ABOUT</h3>
            <ul className="space-y-1">
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Cleartrip</a></li>
              <li><a href="#">Corporate Information</a></li>
            </ul>
          </div>
  
          {/* Help */}
          <div>
            <h3 className="text-green-300 font-semibold mb-2">HELP</h3>
            <ul className="space-y-1">
              <li><a href="#">Payments</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Cancellation & Returns</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Report Infringement</a></li>
            </ul>
          </div>
  
          {/* Consumer Policy */}
          <div>
            <h3 className="text-green-300 font-semibold mb-2">CONSUMER POLICY</h3>
            <ul className="space-y-1">
              <li><a href="#">Cancellation & Returns</a></li>
              <li><a href="#">Terms Of Use</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">Privacy</a></li>
            </ul>
          </div>
  
          {/* Contact */}
          <div>
            <h3 className="text-green-300 font-semibold mb-2">Mail US:</h3>
            <p className="mb-4">deelbaba@gmail.com</p>
            <h3 className="text-green-300 font-semibold mb-2">OFFICE ADDRESS</h3>
            <p>Lorem Ipsum Dolor Sit Amet,</p>
            <p>Consectetur Adipiscing Elit.</p>
            <p>Sed Do Eiusmod Tem</p>
          </div>
        </div>
  
        <div className="border-t border-gray-500 py-4 px-6 flex flex-col md:flex-row justify-between text-xs max-w-7xl mx-auto">
          <p>© JustLocal - All Rights Reserved</p>
          <p>
            Developed By{' '}
            <a href="#" className="underline hover:text-green-300">Batheco</a>
          </p>
        </div>
      </footer>
    );
  }
  