import profileReducer from "./profile-reducer";
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import profileDay from "./profileday-reducer";
import mapReducer from "./map-reducer";

const store = configureStore({
  reducer: {
    profilePage: profileReducer,
    profileDayPage:profileDay,
    mapPage:mapReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export type AppDispatch = typeof store.dispatch; 

export type InferActionsTypes<T>=T extends {[key:string]: (...args:any[])=>infer U}? U:never
type StoreType = typeof store;
export type AppStateType = ReturnType<StoreType['getState']>;

export type BaseThunkType<A extends Action, R=Promise<void>>=ThunkAction<R, AppStateType, unknown, A>


export default store;
