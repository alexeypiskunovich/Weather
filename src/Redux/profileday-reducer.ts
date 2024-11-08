import { AnyAction } from "@reduxjs/toolkit";
import { weatherDayAPI } from "../API/api";
import { BaseThunkType, InferActionsTypes } from "./redux-store";

export type WeatherItem = {
    id: number;
    main: string;
    description: string;
    icon: string;
};

export type DayWeather = {
    dt: number;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
    };
    weather: WeatherItem[];
    clouds: {
        all: number;
    };
    wind: {
        speed: number;
        deg: number;
        gust: number;
    };
    visibility: number;
    pop: number;
    dt_txt: string;
};

export type InitialStateType = {
    dayWeather: DayWeather[];
};

const initialState: InitialStateType = {
    dayWeather: []
};

const profileDay = (state = initialState, action: ActionsType | AnyAction): InitialStateType => {
    switch (action.type) {
        case 'WD/PROFILE/ADD_INFORMATION_DAY_WEATHER': {
            return {
                ...state,
                dayWeather: action.weather,
            };
        }
        default:
            return state;
    }
};

export const actions = {
    addInfoAboutDayWeather: (weather: DayWeather[]) => ({
        type: 'WD/PROFILE/ADD_INFORMATION_DAY_WEATHER',
        weather,
    } as const),
};

export const fetchDayWeatherData = (city: string | null): ThunkType => {
    return async (dispatch) => {
        try {
            const data = await weatherDayAPI(city);
            const weather: DayWeather[] = data.list.map((item: any) => ({
                dt: item.dt,
                main: {
                    temp: item.main.temp,
                    feels_like: item.main.feels_like,
                    temp_min: item.main.temp_min,
                    temp_max: item.main.temp_max,
                    pressure: item.main.pressure,
                    humidity: item.main.humidity,
                },
                weather: item.weather.map((w: any) => ({
                    id: w.id,
                    main: w.main,
                    description: w.description,
                    icon: w.icon,
                })),
                clouds: {
                    all: item.clouds.all,
                },
                wind: {
                    speed: item.wind.speed,
                    deg: item.wind.deg,
                    gust: item.wind.gust,
                },
                visibility: item.visibility,
                pop: item.pop,
                dt_txt: item.dt_txt,
            }));
            dispatch(actions.addInfoAboutDayWeather(weather));
        } catch (error) {
            console.error('Error in dispatching weather data: ', error);
        }
    };
};

export default profileDay;

type ActionsType = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsType>;
