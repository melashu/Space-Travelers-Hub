import { configureStore } from "@reduxjs/toolkit";

import missionReducer from "./reducers";
import rocketReducer from "./rocketReducer";

const store = configureStore({
  reducer: {
    mission: missionReducer,
    rockets: rocketReducer,
  },
});

export default store;
