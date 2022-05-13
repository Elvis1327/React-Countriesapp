import React from 'react';
import { Routes, Route,  } from 'react-router-dom';
import { NotFound } from '../components';

import { Capital } from '../pages';
import { CountrieDetails } from '../pages';
import { Countries } from '../pages';

export const CountriesRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Countries />} />
            <Route path='favorities' element={<Capital />} />
            <Route path='countrie/:name' element={<CountrieDetails />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
};

