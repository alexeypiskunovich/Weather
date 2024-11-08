import { AnyAction } from '@reduxjs/toolkit';
import { BaseThunkType, InferActionsTypes } from './redux-store';
import { reverseGeocode } from '../API/api';

export type CityState= {
    city: string;
}

const initialState= {
    city: null as CityState | null,
};


const mapReducer = (state = initialState, action: ActionsType | AnyAction): InitialStateType => {
    switch (action.type) {
        case 'CITY/SET_CITY': {
            return {
                ...state,
                city: action.payload,
            };
        }
        default:
            return state;
    }
};


export const actions = {
    setCity: (city: string | null) => ({
        type: 'CITY/SET_CITY',
        payload: city,
    } as const),
};

// Асинхронное действие для получения города по координатам
export const fetchCityByCoordinates = (lat: number, lng: number): ThunkType => {
    return async (dispatch) => {
        try {
            const cityName = await reverseGeocode(lat, lng); 
            dispatch(actions.setCity(cityName));
        } catch (error) {
            console.error('Error fetching city by coordinates:', error);
        }
    };
};

export default mapReducer;



export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType >