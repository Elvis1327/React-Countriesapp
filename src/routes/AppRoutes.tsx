import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { NotFound } from '../components';
import { Home, Navbar } from '../pages/index';
import { CountriesRoutes } from './CountriesRoutes';

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <div>
                <Routes>
                    <Route path="/" element={<Home />}  />
                    <Route path="/countries/*" element={<CountriesRoutes />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

