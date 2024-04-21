import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Page/App';
import reportWebVitals from './reportWebVitals';
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Portfolio from "./Portfolio";

console.log("Hello, Mirage!");
console.log("Made Crigas");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/portfolio" element={<Portfolio/>}/>
                <Route path="/" element={<App/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();