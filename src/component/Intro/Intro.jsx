import React from 'react';
import { useNavigate } from 'react-router-dom';

const Intro = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="intro flex items-center justify-center min-h-screen">
                <div className="introButton ml-4 text-start">
                    <button onClick={() => navigate('/index')} className="px-6 py-3 text-white font-semibold rounded-lg shadow-lg
//                     bg-red-600 shadow-emerald-500/15 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500
//                     transition-colors duration-300 ease-in-out
//                     sm:bg-red-600 sm:hover:bg-red-700
//                     lg:bg-blue-700 lg:hover:bg-blue-800">Pencet untuk ke halaman selanjutnya</button>
                </div>
            </div>
        </>
    )

}

export default Intro;


// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Intro = () => {
//     const navigate = useNavigate();
//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gray-100">
//             <div className="text-center p-4 md:p-6 lg:p-8">
//                 <button
//                     onClick={() => navigate('/index')}
//                     className="px-6 py-3 text-white font-semibold rounded-lg shadow-lg
//                     bg-red-600 shadow-emerald-500/15 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500
//                     transition-colors duration-300 ease-in-out
//                     sm:bg-red-600 sm:hover:bg-red-700
//                     lg:bg-blue-700 lg:hover:bg-blue-800"
//                 >
//                     Pencet untuk ke halaman selanjutnya
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Intro;