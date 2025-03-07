import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ErrorBoundary from './ErroBoundery';
import Home from './Page/Home';
import Shop from './Page/Shop';
import Review from './Page/Review';

function App() {

  return (
    <>
      <Navbar />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/review" element={<Review />} />
        </Routes>
      </ErrorBoundary>
      <Footer />
    </>
  )
}

export default App

