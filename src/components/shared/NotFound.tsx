import React from 'react';
import { useNavigate } from 'react-router-dom';

import notFound from '../../assets/not_found.png'

export const NotFound = () => {

    const navigate = useNavigate();

    return (
        <div className='_main-container-not_found'>
            <img src={notFound} alt="not_Found" />
            <span>
            We can't seem to find the page you're looking for.
            </span>
            <button className="_button-not-found" onClick={() => navigate(-1)}>
                Go Back
            </button>
        </div>
    )
}

