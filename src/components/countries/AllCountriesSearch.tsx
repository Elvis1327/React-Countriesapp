import React from 'react';
import { Link } from 'react-router-dom';

import { CountriesProps } from '../../interfaces/countriesProps';

interface Props {
    countries: CountriesProps;
};

export const AllCountriesSearch = ({countries}: Props) => {
  return (
    <div className="_all-countries-search-card">
        <img 
            src={countries.flags.png} 
            alt="countrie pic" 
            className='_all-countries-search-img'    
        />
        <h1>{countries.name.common}</h1>
        <Link to={`countrie/${countries.name.common}`}>Countrie Details</Link>
    </div>
  )
}
