import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Input, Loading } from '../../components';
import { AllCountriesSearch } from '../../components/index';
import { getAllCountriesAction } from '../../features/countriesSlice';
import { getFilteredCountries } from '../../helpers/countries-fetch';
import { CountriesProps } from '../../interfaces/countriesProps';
import { ReducerProps } from '../../interfaces/one-countrie-props';

export const Countries = () => {

  const dispatch = useDispatch();
  const { allCountries, allCountriesLoading } = useSelector((state:ReducerProps) => state.countriesReducer); 
  const [ countriesInput, setCountriesInput  ] = useState('');

  useEffect(() => {
    dispatch(getAllCountriesAction());
  },[dispatch])
  
  const data = getFilteredCountries(allCountries, countriesInput);

  return (
    <div className="_countries-main-container">
      <Input 
        className='_input-countries'
        name='countries'
        placeHolder='Introduce a Countrie name'
        type='text'
        value={countriesInput}
        onChange={(e: any) => setCountriesInput(e.target.value)}
      />
      {allCountriesLoading
        ?
        <Loading />
        :
        <div className="_all-cards-search-countries-container">
          {data.map((res:CountriesProps, idx: number) => (
              <AllCountriesSearch countries={res} key={idx}  />
          ))}
        </div>
      }
    </div>
  );
};
