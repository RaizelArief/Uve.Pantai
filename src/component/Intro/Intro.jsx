import React from 'react';
import { useNavigate } from 'react-router-dom';

const Intro = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="intro">
                <div className="introButton ml-4 text-start">
                    <button onClick={() => navigate('/index')} className="sm:bg-red-600 shadow-lg shadow-emerald-500/15 min-w-5 ms-52
                    lg:bg-blue-700 shadow-lg shadow-blue-500/50 button">Pencet untuk ke halaman selanjutnya</button>
                </div>
            </div>
        </>
    )

}

export default Intro;