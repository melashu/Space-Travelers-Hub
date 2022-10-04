import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer: {
        mission: {},
        rokets: {}
    }
});

export default store;

