import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import doctor from "../assets/doctor.jpeg";

const Home = () => {
  const typedTextRef = useRef(null);

  useEffect(() => {
    const lines = [
      'Protect Your Life',
      'And Take Care Of',
      'Your Health'
    ];

    const text = lines.join('<br>');

    const options = {
      strings: [text],
      typeSpeed: 50, 
      loop: false,
      showCursor: false
    };

    const typed = new Typed(typedTextRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex">
      <div className="text-left flex flex-col items-left mt-20 ml-16">
        <h1 ref={typedTextRef} className="font-bold text-4xl text-blue-600 leading-tight mb-4"></h1>
      </div>
      <div className="ml-auto mr-16">
        <img src={doctor} alt='doctor' className="h-auto max-h-screen" />
      </div>
      <div className="fixed bottom-0 left-0 p-8 w-full max-w-md">
        <div className="mb-8">
          <button className="bg-blue-800 text-white py-2 px-4 rounded block w-full font-bold">
           Talk to Doctor
          </button>
        </div>
        <div className="mb-8">
          <button className="bg-blue-800 text-white py-2 px-4 rounded block w-full font-bold">
             Medicines
          </button>
        </div>
        <div className="mb-8">
          <button className="bg-blue-800 text-white py-2 px-4 rounded block w-full font-bold">
            Lab Tests
          </button>
        </div>
        <div>
          <button className="bg-blue-800 text-white py-2 px-4 rounded block w-full font-bold">
            Home Health Care
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
