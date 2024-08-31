import React from 'react';

function NavigationBar() {
    return (
        <>
            <div className="Navbar flex flex-col md:flex-row justify-between items-center w-full p-4 bg-gray-800 text-white">
                <div className="Uve flex justify-center md:justify-start w-full md:w-auto mb-2 md:mb-0">
                    <h1 className="text-2xl font-bold">Pantai Uve.</h1>
                </div>
                <div className="flex flex-col md:flex-row justify-center md:justify-evenly w-full md:w-auto space-y-2 md:space-y-0 md:space-x-4">
                    <a href="#pengertian" className="text-lg md:text-base px-4 py-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-300 duration-300 rounded-lg">
                        Pengertian pantai
                    </a>
                    <a href="#Halaman" className="text-lg md:text-base px-4 py-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-pink-500 duration-300 rounded-lg">
                        Aneka Pantai
                    </a>
                    <a href="https://wa.me/6282112992879" className="text-lg md:text-base px-4 py-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-violet-600 duration-300 rounded-lg">
                        Contact
                    </a>
                </div>
            </div>
            <div className="garis bg-red-400 h-1 w-full"></div>
        </>
    );
}

export default NavigationBar;
