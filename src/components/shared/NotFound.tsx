import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import notFound from '../../assets/not_found.png'

export const NotFound = () => {
    return (
        <div className='_main-container-not_found'>
            <img src={notFound} alt="not_Found" />
        </div>
    )
}

