import Error from './pages/error.jsx';
import Home from './pages/home.jsx';
import React from 'react';
import Header from './components/header/header'
import Footer from './components/footer/footer'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";


function RoutesApp (){
    return(
        <Router>
            <Header/>
            <main>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path ="*" element={<Error/>}/>
            </Routes>
            </main>
            <Footer/>
        </Router>
    )
}
export default RoutesApp