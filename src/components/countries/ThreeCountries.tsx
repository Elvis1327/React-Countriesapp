import React from 'react';
import { Link } from 'react-router-dom';

export const ThreeCountries = ({res}: any) => {
    
    return (
    <div className="_three-main-container">
        <div className="_three-countries-flags">
            <img src={res.flags.png} alt="pic" />
        </div>
        <h1 className='_three-countries-name'>{res.name.common}</h1>
        <span className="_three-countries-languages">{res.capital}</span>
        <Link to="/countries">Search your favorite countrie</Link>
    </div>
  )
}
