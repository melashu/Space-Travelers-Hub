import { configureStore } from "@reduxjs/toolkit";
import rocketReducer from './rocketReducer';


const store = configureStore({
    reducer: {
        mission: {},
        rockets: rocketReducer
    }
});

export default store;

