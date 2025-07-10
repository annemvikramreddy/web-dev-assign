import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Navbar from './components/Navbar/Navbar';
import Login from './pages/Login/Login';
import {Routes,Route} from 'react-router-dom';
import './App.css'

function App() {
 

  return (
    <>
      <Navbar />
      <Header />
      <div className="container">
        <MainContent>
          <Routes>

            <Route path="/login" element={<Login />} />
          </Routes>
        </MainContent>
      </div>
      <Footer />
    </>
  )
}

export default App
