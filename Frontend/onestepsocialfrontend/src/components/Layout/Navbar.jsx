//Navbar
import './layout.css';
import { FaBriefcaseMedical } from "react-icons/fa";
import { BiSolidDonateHeart } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { TiGroupOutline } from "react-icons/ti";
import { IoMdChatboxes } from "react-icons/io"
import { useEffect, useState } from 'react';


const Navbar = () => {
  const [text, setText] = useState('Loading...');
  useEffect(() => {
    const fetchText = () => {
      setTimeout(() => {
        setText('loading...');
      }, 1000);
    };

    fetchText();
  }, []);


  return (
    
    <nav className="bg-blue-200 p-4 border-2  border-blue-300 ">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-4xl text-gradient font-serif hidden md:block">
          OnestepSocial
        </div>
        <div className="hidden md:block bg-white border-2 border-blue-400 text-blue-400 p-2 rounded-md ml-4">
            {text}
          </div>
        <div className="flex space-x-16 md:space-x-14 w-full center md:justify-end">
          {/* Icons visible on both mobile and desktop */}
          <a href="#" className="text-gray-700 hover:text-blue-500">
            <FaBriefcaseMedical className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-500">
            <BiSolidDonateHeart className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-500">
            <TiGroupOutline className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-500">
            <FaUser className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-500">
            <IoMdChatboxes className="w-6 h-6" />
          </a>
        </div>
      </div>
    </nav>
  );

};

export default Navbar;