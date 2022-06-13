import { createAsyncThunk, createSlice }  from '@reduxjs/toolkit';

import { getAllCountries, getCountrieByParams } from '../utils/countries-fetch';


export const getAllCountriesAction = createAsyncThunk(
    'Countries/AllCuntries',
    async () => {
        const resp = await getAllCountries();
        return resp;
    }
);
export const getOneCountrieByParamsAction = createAsyncThunk(
    'Countries/GetOneCountrieByParams',
    async (name: any) => {
        const resp = await getCountrieByParams(name);
        return resp;
    }
);
export const addFavoritieCountrie = createAsyncThunk(
    'Favoritie Countrie',
    (body: any) => {
        const resp = localStorage.setItem('countries_favorities', JSON.stringify(body));
        return resp;
    }
)

const countriesSlice = createSlice({
    name: 'countries',
    initialState: {
        allCountries: [],
        allCountriesLoading: true,
        threeCountriesLoading: true,
        getOneCountrie: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllCountriesAction.pending, (state, action) => {
            state.allCountriesLoading = true
            state.threeCountriesLoading = true
        })
        .addCase(getAllCountriesAction.fulfilled, (state, action) => {
            state.allCountriesLoading = false;
            state.threeCountriesLoading = false;
            state.allCountries = action.payload;
        })
        .addCase(getOneCountrieByParamsAction.fulfilled, (state, action) => {
            state.getOneCountrie = action.payload;
        })
    }
});

export default countriesSlice.reducer;

