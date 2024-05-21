
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope  } from 'react-icons/fa';
import letterCarfts from "../assets/Image/letterCarfts.png"
import { Icon } from "@iconify/react";
// import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#101D2E] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl">
          <Link to="/"><img src={letterCarfts} alt=''/></Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              )}
            </svg>
          </button>
        </div>
        <div className={`md:flex items-center ${isOpen ? 'block' : 'hidden'}`}>
          <Link to="/home" className="text-white hover:text-gray-300 block mt-4 md:inline-block md:mt-0 md:ml-6">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-gray-300 block mt-4 md:inline-block md:mt-0 md:ml-6">
            About
          </Link>
          <Link to="/services" className="text-white hover:text-gray-300 block mt-4 md:inline-block md:mt-0 md:ml-6 ">
            Services
            <Icon  icon="uiw:down"  className='inline-flex ml-1' />
            {/* <FaChevronDown style={{color:'#ffffff',justifyContent:'space-around'}}/> */}
          </Link>
          <Link to="/languages" className="text-white hover:text-gray-300 block mt-4 md:inline-block md:mt-0 md:ml-6">
          Languages
          <Icon  icon="uiw:down" className='inline-flex ml-1' />
          </Link>
          <Link to="/epayments" className="text-white hover:text-gray-300 block mt-4 md:inline-block md:mt-0 md:ml-6">
          ePayments
          </Link>
          <Link to="/blog" className="text-white hover:text-gray-300 block mt-4 md:inline-block md:mt-0 md:ml-6">
          Blog
          </Link>
          <button href="mailto:info@example.com" className="text-white block mt-4 md:inline-block md:mt-0 md:ml-6 bg-[#3D65FF] hover:bg-blue-700 rounded-full p-2">
            <FaEnvelope className="inline mr-1" />info@lettercrafts.org
          </button>
          <button href="tel:+1234567890" className="text-white  hover:bg-blue-700 block mt-4 md:inline-block md:mt-0 md:ml-6 bg-[#3D65FF] rounded-full p-2">
           <Icon icon="mdi:phone" className='inline-flex mr-1' /> 
            +65 67110135
          </button>
          {/* <div className="-mr-2 flex md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800 inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <MailIcon className="h-6 w-6" />
              </button>
            </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


