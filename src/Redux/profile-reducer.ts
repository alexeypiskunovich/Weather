import { AnyAction } from 'redux';
import { BaseThunkType, InferActionsTypes } from './redux-store';
import { mainAPI } from '../API/api';

export type Weather = {
    id: number;
    weatherMain: string; 
    description: string;
    icon: string;
    coord: {
        lon: number;
        lat: number;
    };
    base: string;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
        sea_level: number;
        grnd_level: number;
    };
    visibility: number;
    wind: {
        speed: number;
        deg: number;
        gust: number;
    };
    rain?: {
        '1h': number;
    };
    clouds: {
        all: number;
    };
    dt: number;
    sys: {
        type: number;
        id: number;
        country: string;
        sunrise: number;
        sunset: number;
    };
    timezone: number;
    name: string;
    cod: number;
};

let initialState = {
  weather: null as Weather | null,
};
 


const profileReducer = (state = initialState, action: ActionsType | AnyAction):InitialStateType => {
    switch (action.type) {
      case 'W/PROFILE/ADD_INFORMATION_WEATHER': {
        return {
            ...state,
            weather: action.weather, 
        };
      }
      default:
          return state;
    }
};

export const actions = {
    addInfoAboutWeather: (weather: Weather) => ({
        type: 'W/PROFILE/ADD_INFORMATION_WEATHER',
        weather,
    } as const),
};

export const fetchWeatherData = (city: string |null):ThunkType => {
    return async (dispatch) => {
      try {
        const data = await mainAPI(city);
        
        const weather: Weather = {
          id: data.weather[0].id,
          weatherMain: data.weather[0].main,
          description: data.weather[0].description,
          icon: data.weather[0].icon,
          coord: data.coord,
          base: data.base,
          main: data.main,
          visibility: data.visibility,
          wind: data.wind,
          rain: data.rain,
          clouds: data.clouds,
          dt: data.dt,
          sys: data.sys,
          timezone: data.timezone,
          name: data.name,
          cod: data.cod,
        };
        dispatch(actions.addInfoAboutWeather(weather));
      } catch (error) {
        console.error('Error in dispatching weather data: ', error);
      }
    };
  };
  

export default profileReducer;
export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType >
