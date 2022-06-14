import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {  getOneCountrieByParamsAction } from '../../features/countriesSlice';
import { ReducerProps } from '../../interfaces/one-countrie-props';

export const CountrieDetails = () => {
    
    const dispatch = useDispatch();
    const { getOneCountrie } = useSelector((state: ReducerProps) => state.countriesReducer);
    const navigate = useNavigate();  
    const { name } = useParams();


    useEffect(() => {
        dispatch(getOneCountrieByParamsAction(name));
    },[dispatch, name]);

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <article className="_countries-details-main-container">
            {getOneCountrie.map((res, idx: number) => (
                <div className="_one-countrie-detail" key={idx}>
                    <img src={res.flags.png} alt={res.name.common}  />
                    {/* Information */}
                    <section className="_one-countrie-detail-information">

                        <article className="_one-countrie-detail-information-name">
                            <h2 style={{margin: '0px'}}>Name:</h2>
                            <span>{res.name}</span>
                        </article>

                        <article className="_one-countrie-detail-information-population">
                            <h2 style={{margin: '0px'}}>Population:</h2>
                            <span>{res.population}</span>
                        </article>

                        <article className="_one-countrie-detail-information-lenguages">
                            <h2 style={{margin: '0px'}}>Region:</h2>
                            <span>{res.region}</span>
                        </article>

                        <article className="_one-countrie-detail-information-capital">
                            <h2 style={{margin: '0px'}}>Capital:</h2>
                            <span>{res.capital}</span>
                        </article>
                        
                        <button
                            className='_one-countrie-detail-button'
                            onClick={handleGoBack}
                        >
                            Go Back
                        </button>
                    </section>
                </div>
            ))};
        </article>
    )
}


















