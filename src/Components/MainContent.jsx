import React from 'react';
// import Card from './Card';
import { MdOutlineDomainVerification } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import Card from './Card';

const MainContent = () => {
    
  return (
    <>
    
    <div className='flex flex-col'>
        <div className=" bg-white p-6 rounded-lg shadow-md m-2 w-[70%] h-[320px]">
            <div className='flex flex-row w-[100%]'>
                <div className="w-[60%]">
                    <h2 className="text-xl font-bold mb-2">Journeying through GenAI and LLMS</h2>
                    <div className="flex space-x-4 mb-2">
                        <span className="bg-slate-200 text-blue-700 px-5 py-1 rounded font-bold">3 Weeks</span>
                        <span className="bg-slate-200 text-blue-700 px-5 py-1 rounded font-bold">Online</span>
                    </div>
                    <div className="mb-2 text-gray-600 flex">
                        <MdOutlineDomainVerification className='text-2xl mr-2 text-purple-700'/>
                        <span className="font-bold mr-9">Domain</span> 
                        Bootcamp: Data Science
                    </div>
                    <div className="mb-2 text-gray-600 flex">
                        <FaLocationDot className="text-xl mr-3 text-purple-700"/>
                        <span className="font-bold mr-12">Venue</span> 
                        Online, Zoom
                    </div>
                    <div className=" flex mb-6 text-gray-600">
                        <span className="flex bg-slate-200 px-2 py-0.5 rounded-lg text-sm  mr-5"><SlCalender className='text-xl mr-2 mt-0.5 bg-white rounded-lg p-0.5 text-purple-700 '/>3-5 June, 2024 05:00 PM</span> 
                        <span className='text-sm'>7 days to go</span>
                    </div>
                    <div className="flex space-x-4">
                        <button className='border border-purple-700 rounded-lg px-7 py-1.5 text-purple-500 font-bold'>Past Workshps</button>
                        <button className='bg-purple-700 rounded-lg px-7 py-1.5 text-white font-bold'>Join Workshop</button>
                    </div>
                </div>
                <div className=" bg-black w-[40%] shadow-[2px_2px_30px_rgba(0,0,0,0.1)] rounded-[10px] overflow-hidden">
                    <div className="flex flex-col h-[280px] w-full bg-white rounded shadow-md">
                        <img
                            src="https://tse3.mm.bing.net/th?id=OIP.tjUOUBGnthmW762mbRAFdQHaE8&pid=Api&P=0&h=220"
                            alt="Instructor"
                            className="w-full h-1/2 object-cover rounded-t"
                        />
                        <div className="h-1/2 p-4 bg-[linear-gradient(90deg,#000033,#000080)]">
                            <h2 className='text-[16px] font-bold text-white mb-1.5'>Journeying through GenAI and LLMS</h2>
                            <p className='text-purple-600 text-[14px] font-bold'>Projects</p>
                            <p className='text-[10px] text-gray-500 font-bold'>AI Chatbot</p>
                            <p className='text-[10px]  text-gray-500 font-bold'>AI Caption Generator</p>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
        
        <div className='flex flex-col '>
            <div className='flex flex-col items-center overflow-y-auto h-[400px] scrollbar-thin scrollbar-thumb-purple-700 scrollbar-track-gray-200'>
                <div className='w-full'>
                    <h1 className='mt-2 ml-20 mb-4 text-purple-600 font-bold'>Block 1: Exploring Careers</h1>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                <div className='w-full'>
                    <h1 className='mt-2 ml-20 mb-4 text-purple-600 font-bold'>Block 2: Exploring Careers</h1>
                    <Card/>
                    <Card/>
                </div>
            </div> 
        </div>
        
    </div>
    
    </>
  );
};

export default MainContent;
