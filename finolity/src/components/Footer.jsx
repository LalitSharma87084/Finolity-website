import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-5 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold">Finolity</h2>
          <p className="mt-2 text-sm">
            Empowering businesses with innovative IT solutions. Contact us to know more.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Industries */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Industries</h3>
          <ul className="space-y-2 text-sm">
            <li>Healthcare Solutions</li>
            <li>Financial Services</li>
            <li>E-commerce Platforms</li>
            <li>Education Tech Solutions</li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Products</h3>
          <ul className="space-y-2 text-sm">
            <li>Cloud Infrastructure</li>
            <li>AI-Powered Solutions</li>
            <li>Cybersecurity Platforms</li>
            <li>Custom Web Applications</li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Get in Touch</h3>
          <p className="text-sm mb-3">hello@Finolity.com</p>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-blue-500"><FaLinkedinIn /></a>
            <a href="#" className="text-white hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="text-white hover:text-blue-700"><FaFacebookF /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-sm text-center">
        &copy; 2025 Finolity, All rights reserved | <a href="#" className="underline">Terms & Conditions</a> | <a href="#" className="underline">Privacy Policy</a>
      </div>
    </footer>
  );
}
