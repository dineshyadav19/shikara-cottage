import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="text-gray-500">
      <div className="bg-white py-14 ">
        <div className="container--boxed lg:flex">
          {/* About column */}
          <div className="flex-1 mb-8 lg:mb-0 lg:pr-12 ">
            <h3 className="text--lg font-semibold mb-4">About</h3>
            <p className="text-sm text-black max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              efficitur diam eget nunc lobortis, nec fringilla nulla finibus.
              Aenean aliquet justo in malesuada faucibus.
            </p>
          </div>
          {/* Address column */}
          <div className="flex-1 mb-8 lg:mb-0 lg:pr-12 lg:text-center">
            <h3 className="text--lg font-semibold mb-4">Address</h3>
            <p className="text-sm text-black">
              123 Main Street
              <br />
              Anytown, USA 12345
            </p>
          </div>
          {/* Social media column */}
          <div className="flex-1">
            <h3 className="text--lg font-semibold mb-4 lg:text-right mr-7">
              Social Media
            </h3>
            <div className="flex lg:justify-end">
              <Link href="#" className="mr-4 text-gray-500 hover:text-white">
                <FaFacebook size={24} color="blue" />
              </Link>
              <Link href="#" className="mr-4 text-gray-500 hover:text-white">
                <FaTwitter size={24} color="#1DA1F2" />
              </Link>
              <Link href="#" className="text-gray-500 mr-4 hover:text-white">
                <FaInstagram size={24} color="#E1306C" />
              </Link>
              <Link href="#" className="text-gray-500 mr-4 hover:text-white">
                <FaWhatsapp size={24} color="#128C7E" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
