import { configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import loginReducer from './slices/loginSlice';
import categoryReducer from './slices/categorySlice';
import areaReducer from './slices/areaSlice';
import  registrationReducer  from './slices/registrationSlice';
import marchantReducer from './slices/marchantSlice';
import profileReducer from './slices/profileSlice';
import orderReducer from './slices/orderSlice';
import paymentReducer from './slices/paymentSlice';


import { persistReducer } from 'redux-persist';
// import { combineReducers } from '@reduxjs/toolkit';
import { combineReducers } from "redux";



const persistConfig ={
    key : "root",
    storage :AsyncStorage
}

const reducer = combineReducers({
    loginReducer: loginReducer,
    categoryReducer : categoryReducer,
    areaReducer : areaReducer,
    registrationReducer : registrationReducer,
    marchantReducer : marchantReducer,
    profileReducer : profileReducer,
    orderReducer : orderReducer,
    paymentReducer :  paymentReducer

});

const persistedReducer = persistReducer(persistConfig,reducer)

export const store = configureStore({
    reducer : persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});