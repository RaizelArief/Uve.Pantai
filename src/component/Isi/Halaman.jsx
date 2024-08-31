import React from 'react';

function Halaman() {
    return (
        <>
            <div className="wowa w-full py-6 px-4 md:px-8" id="Halaman">
                 {/* Pantai Wediombo */}
                <div className="Halaman1">
                    <div class="bg-scroll...">
                        <img src="pantai1.jpg" alt="" className="w-auto" />
                        <h1 className="tulisan">Pantai wediombo </h1>
                    </div>
                    <div className="text-purple-600 text-xl font-bold font-mono drop-shadow-lg Namaini ">
                        <h1>Berasal dari Gunungkidul, Provinsi DIY.</h1>
                    </div>
                </div>
                <br />
                 {/* Pantai Papuma */}
                <div className="Halaman2">
                    <div class="bg-scroll...">
                        <img src="pantai2.jpg" alt="" className="w-auto" />
                        <h1 className="tulisan">Pantai Papuma </h1>
                    </div>
                    <div className="text-purple-600 text-xl font-bold font-mono drop-shadow-lg Namaini ">
                        <h1>Berasal dari Jember, Provinsi Jawa Timur</h1>
                    </div>
                </div>
                <br />
                 {/* Pantai Anyer */}
                <div className="Halaman3">
                    <div class="bg-scroll...">
                        <img src="anyer.jpg" alt="" className="w-auto" />
                        <h1 className="tulisan">Pantai anyer </h1>
                    </div>
                    <div className="text-purple-600 text-xl font-bold font-mono  drop-shadow-lg Namaini ">
                        <h1>Berasal dari Serang, Provinsi Banten</h1>
                    </div>
                </div>
                <br />
                 {/* Pantai Carita */}
                <div className="Halaman4">
                    <div class="bg-scroll...">
                        <img src="Carita.jpg" alt="" className="w-auto" />
                        <h1 className="tulisan">Pantai Carita </h1>
                    </div>
                    <div className="text-purple-600 text-xl font-bold font-mono drop-shadow-lg Namaini ">
                        <h1>Berasal dari Serang, Provinsi Banten</h1>
                    </div>
                </div>
                <br />
                 {/* Pantai Ora */}
                <div className="Halaman5">
                    <div class="bg-scroll...">
                        <img src="pantai3.jpg" alt="" className="w-auto" />
                        <h1 className="tulisan">Pantai Ora </h1>
                    </div>
                    <div className="text-purple-600 text-xl font-bold font-mono drop-shadow-lg Namaini ">
                        <h1>Berasal dari  Maluku Tengah, Provinsi Maluku</h1>
                    </div>
                </div>


            </div>

        </>
    );
}

export default Halaman;


// import React from 'react';

// function Halaman() {
//     return (
//         <>
//             <div className="w-full py-6 px-4 md:px-8" id="Halaman">
//                 {/* Pantai Wediombo */}
//                 <div className="mb-8">
//                     <div className="bg-gray-200 p-4 rounded-lg shadow-md">
//                         <img src="pantai1.jpg" alt="Pantai Wediombo" className="w-full h-auto object-cover rounded-lg" />
//                         <h1 className="text-xl md:text-2xl font-bold text-center mt-4">Pantai Wediombo</h1>
//                     </div>
//                     <div className="text-purple-600 text-lg md:text-xl font-bold font-mono drop-shadow-lg text-center mt-2">
//                         <h1>Berasal dari Gunungkidul, Provinsi DIY.</h1>
//                     </div>
//                 </div>

//                 {/* Pantai Papuma */}
//                 <div className="mb-8">
//                     <div className="bg-gray-200 p-4 rounded-lg shadow-md">
//                         <img src="pantai2.jpg" alt="Pantai Papuma" className="w-full h-auto object-cover rounded-lg" />
//                         <h1 className="text-xl md:text-2xl font-bold text-center mt-4">Pantai Papuma</h1>
//                     </div>
//                     <div className="text-purple-600 text-lg md:text-xl font-bold font-mono drop-shadow-lg text-center mt-2">
//                         <h1>Berasal dari Jember, Provinsi Jawa Timur</h1>
//                     </div>
//                 </div>

//                 {/* Pantai Anyer */}
//                 <div className="mb-8">
//                     <div className="bg-gray-200 p-4 rounded-lg shadow-md">
//                         <img src="anyer.jpg" alt="Pantai Anyer" className="w-full h-auto object-cover rounded-lg" />
//                         <h1 className="text-xl md:text-2xl font-bold text-center mt-4">Pantai Anyer</h1>
//                     </div>
//                     <div className="text-purple-600 text-lg md:text-xl font-bold font-mono drop-shadow-lg text-center mt-2">
//                         <h1>Berasal dari Serang, Provinsi Banten</h1>
//                     </div>
//                 </div>

//                 {/* Pantai Carita */}
//                 <div className="mb-8">
//                     <div className="bg-gray-200 p-4 rounded-lg shadow-md">
//                         <img src="Carita.jpg" alt="Pantai Carita" className="w-full h-auto object-cover rounded-lg" />
//                         <h1 className="text-xl md:text-2xl font-bold text-center mt-4">Pantai Carita</h1>
//                     </div>
//                     <div className="text-purple-600 text-lg md:text-xl font-bold font-mono drop-shadow-lg text-center mt-2">
//                         <h1>Berasal dari Serang, Provinsi Banten</h1>
//                     </div>
//                 </div>

//                 {/* Pantai Ora */}
//                 <div>
//                     <div className="bg-gray-200 p-4 rounded-lg shadow-md">
//                         <img src="pantai3.jpg" alt="Pantai Ora" className="w-full h-auto object-cover rounded-lg" />
//                         <h1 className="text-xl md:text-2xl font-bold text-center mt-4">Pantai Ora</h1>
//                     </div>
//                     <div className="text-purple-600 text-lg md:text-xl font-bold font-mono drop-shadow-lg text-center mt-2">
//                         <h1>Berasal dari Maluku Tengah, Provinsi Maluku</h1>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Halaman;
