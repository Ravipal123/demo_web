import React, { useState } from 'react';
import { FaAngleRight } from "react-icons/fa";

const Card = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={`flex flex-col w-[80%] bg-white p-4 rounded-lg shadow-md mt-3 ml-20 relative overflow-hidden transition-all duration-300 ${isOpen ? 'h-[165px]' : 'h-[118px]'}`}>
            <div className="flex items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <img src="https://tse1.mm.bing.net/th?id=OIP.YNwnjEZOQFH4vQpF62jVhAHaGE&pid=Api&P=0&h=220" alt="Course" className="rounded-md w-24 h-24 mr-5" />
                <div className='w-[600px] p-2'>
                    <h1 className="text-[16px] font-bold">Introduction of Machine Learning</h1>
                    <p className="text-gray-600 text-[12px]">14 min|24 bytes</p>
                </div>
                <FaAngleRight className='ml-[380px]'/>
            </div>
            <button className='mt-1.5 bg-purple-500 text-white px-4 py-2 rounded transition-opacity duration-300"'>Start Exploring</button>    
        </div>    
    );
};

export default Card;
