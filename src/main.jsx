import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/HomePage";
import './index.css';

const rootElement = document.getElementById("root");
    render(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/scruggy" element={<Scruggy />} />
                <Route path="/flaubert" element={<Flaubert />} />
                <Route path="/skalez" element={<Skalez />} />
                <Route path="/pantslee" element={<Pantslee />} />
                <Route path="/stylez" element={<Stylez />} />
                <Route path="/hk" element={<HK />} />
            </Routes>
        </BrowserRouter>,
        rootElement
    )