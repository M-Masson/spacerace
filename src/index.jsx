import React from "react";
import './styles/style.css';
import RoutesApp from "./routes.jsx";
import ReactDom from "react-dom/client";
import '../src/styles/style.css'

const rootElement = document.getElementById('root');
const root = ReactDom.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <RoutesApp />
   </React.StrictMode>
);