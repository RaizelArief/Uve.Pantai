import React from 'react';
function NavigationBar() {
    return (
        <>
            <div className="Navbar flex justify-between w-full">
                <div className="Uve justify-start w-full">
                    <h1>Pantai Uve.</h1>
                </div>
                <div className="flex justify-evenly w-full mx-7 wrapper">
                   <a href="#pengertian"><h1 className="px-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-300 duration-300">Pengertian pantai</h1></a>
                    <a href="#Halaman"><h1 className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-pink-500 duration-300">Aneka Pantai</h1></a>
                    <a href="#footer"><h1 className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-violet-600 duration-300">Contact</h1></a>
                </div>
            </div>
                <div className="garis"></div>
        </>
    );
}

export default NavigationBar;