import { createAsyncThunk, createSlice }  from '@reduxjs/toolkit';

import { getAllCountries, getCountrieByParams } from '../helpers/countries-fetch';


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
        allFavoritiesCountries: JSON.parse(localStorage.getItem('countries_favorities') || "{}")
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
        .addCase(addFavoritieCountrie.fulfilled, (state, action) => {
            state.allFavoritiesCountries = action.payload
        });
    }
});

export default countriesSlice.reducer;

