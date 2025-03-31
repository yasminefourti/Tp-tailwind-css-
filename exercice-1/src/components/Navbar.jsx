import React from "react";
import { useState } from "react";


function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <div class="border-black border-4 rounded-lg  min-h-32 text-3xl flex justify-around  m-4 w-lg">
        <img src="#" alt="logo" className="h-12" />
      </div>

        {/* Seulement sur ordi */}
      <div class="hidden md:flex justify-around space-x-8">
      <button className="hover:text-blue-500 hover:text-2xl text-2xl">Home</button>    
      <button className="hover:text-2xl hover:text-blue-500 text-2xl">About</button>    
      <button className="hover:text-2xl hover:text-blue-500 text-2xl">Services</button>    
      <button className="hover:text-2xl hover:text-blue-500 text-2xl">Contact</button> 
      <button>🔍</button> 
      </div>

      {/* Seulement sur mobile */}
      <div class={`flex md:hidden justify-between p-2 transition-all duration-300 ease-in-out bg-gray-500 ${
          isMenuOpen ? "opacity-100 translate-y-0":"opacity-0 -translate-y-5"  }`}>
        <button className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
            {isMenuOpen ? (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
            >
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
            </svg>
             ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/> </svg>
                )}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
