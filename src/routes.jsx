import Error from './pages/error.jsx';
import Home from './pages/home.jsx';
import React from 'react';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";


function RoutesApp (){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path ="*" element={<Error/>}/>
            </Routes>
            
        </Router>
    )
}
export default RoutesApp