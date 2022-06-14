import axios from 'axios';

import { CountriesProps } from '../interfaces/countriesProps'

const mainUrl = `https://restcountries.com/v3.1/all`;

// Get all countries
export const getAllCountries = async () => {
    const { data } = await axios.get(mainUrl);
    return data;
};

// Get Countrie by params
export const getCountrieByParams = async (name:string) => {
    const { data } = await axios.get(`https://restcountries.com/v2/name/${name}`);
    return data;
};

// Get some countries
export const getSomeCountries = (data: any = []) => {
    const resp = data.slice(0,3);
    return resp;
};

// Get countries filtered
export const getFilteredCountries = (data: any= [], inputValue = '') => {
    if(inputValue.length <= 0){
        return data;
    }
    const resp = data.filter((res:CountriesProps) => res.name.common.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase()));
    return resp;
};


