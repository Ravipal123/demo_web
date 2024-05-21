import React from 'react';
import { FaHome, FaSearch, FaGraduationCap, FaAward, FaTasks, FaProjectDiagram, FaBriefcase, FaChalkboardTeacher, FaBlog, FaUsers } from 'react-icons/fa';
import { FaWhatsapp, FaLinkedin, FaInstagram, FaYoutube, FaDiscord } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-[175px] static bg-white p-4 flex flex-col mr-1">
        <ul>
          <li className="mb-4 flex items-center text-gray-700">
            <FaHome className="mr-3" />Home
          </li>
          <li className="mb-4 flex items-center text-gray-700">
            <FaSearch className="mr-3" />Explore
          </li>
          <li className="mb-4 flex items-center text-gray-700">
            <FaGraduationCap className="mr-3" />Learn
          </li>
          <li className="mb-4 flex items-center text-gray-700">
            <FaAward className="mr-3" />Achieve
          </li>
          <li className="mb-4 flex items-center text-gray-700">
            <FaTasks className="mr-3" />Practice
          </li>
          <li className="mb-4 flex items-center text-gray-700">
            <FaProjectDiagram className="mr-3" />Projects
          </li>
          <li className="mb-4 flex items-center text-gray-700">
            <FaBriefcase className="mr-3" />Career
          </li>
          <li className="mb-4 flex items-center text-gray-700">
            <FaChalkboardTeacher className="mr-3" />Mentorship
          </li>
          <li className="mb-4 flex items-center text-gray-700">
            <FaBlog className="mr-3" />Blogs
          </li>
          <li className="mb-4 flex items-center text-gray-700">
            <FaUsers className="mr-3" />Community
          </li>
        </ul>
        <div className='relative flex justify-center items-center mt-3'>
            <div className='absolute top-0 w-14 h-14 rounded-full bg-purple-500 border-4 border-white transform -translate-y-1/2'></div>
            <div className="w-[300px] h-[90px] bg-purple-400 rounded-lg flex items-center justify-center"></div>
        </div>
        <div className="mt-1.5 bg-slate-200 rounded-lg p-1.5">
            <p className="text-black font-bold ">Connect with us</p>
            <div className="flex space-x-2 mt-2 text-2xl">
                <FaWhatsapp className="text-green-500" />
                <FaLinkedin className="text-blue-700" />
                <FaInstagram className="text-purple-600" />
                <FaDiscord className='text-slate-600'/>
                <FaYoutube className="text-red-600" />
            </div>
        </div>
    </div>
  );
};

export default Sidebar;
