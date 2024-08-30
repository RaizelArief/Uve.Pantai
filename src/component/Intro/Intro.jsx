import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Intro = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="intro">
                <div className="introButton ml-4 text-start">
                    <button onClick={() => navigate('/index')} className="button">Pencet untuk ke halaman selanjutnya</button>
                </div>
            </div>
        </>
    )

}

export default Intro;