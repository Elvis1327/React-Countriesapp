import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Loading } from '../../components';
import { ThreeCountries } from '../../components/countries/ThreeCountries';

import { getAllCountriesAction } from '../../features/countriesSlice';
import { getSomeCountries } from '../../utils/countries-fetch';
import { ReducerProps } from '../../interfaces/one-countrie-props';

export const Home = () => {

    const dispatch = useDispatch();
    const { allCountries, threeCountriesLoading } = useSelector((state: ReducerProps) => state.countriesReducer)
  
    useEffect(() => {
      dispatch(getAllCountriesAction())
    }, [dispatch]);

    const data = getSomeCountries(allCountries);

    return (
        <div className="_home-main-container">
            <h1>Find information about countries</h1>
            {threeCountriesLoading
                ?
                <Loading />
                :
                <div className="_home-three-countries">
                    {data.map((res: any, idx: number) => (
                        <ThreeCountries res={res} key={idx} />
                    ))}
                </div>
            }
        </div>        
    )
}


