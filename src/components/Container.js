import React, { useState } from 'react';
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Services from "./pages/Services.js";
import Contact from "./pages/Contact.js";


function Container() {
    const [currentPage, setCurrentPage] = useState('Home');
    
    const renderPage = () => {
    if (currentPage === 'Home') {
        return <Home />;
    } else if (currentPage === 'About') {
        return <About />;
    } else if (currentPage === 'Services') {
        return <Services />;
    } else {
        return <Contact />;
    }
 };

 const handlePageChange = (page) => setCurrentPage(page);
 
  return (
    <>
    <nav currentPage={currentPage} handlePageChange={handlePageChange}>
        Test NavBar
    </nav>

    {renderPage()}
    </>
  );
}

export default Container;