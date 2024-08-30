import React from 'react';
import Footer from '../component/Footer/Footer';
import NavigationBar from '../component/Intro/NavigationBar';
import Isian from '../component/Isi/Isian';
import Halaman from '../component/Isi/Halaman';


function Home() {
  return (
    <>
      <div className="overflow-auto">
        <div className="myNavbar static">
          <NavigationBar />
          <Isian />
        </div>

        <div className="nama">
          <Halaman/>
        </div>

        <div className="Footer">
          <Footer />
        </div>
      </div>

    </>
  )
}

export default Home;
