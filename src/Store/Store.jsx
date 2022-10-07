import { configureStore } from "@reduxjs/toolkit";
// import dragonreducer from "./dragonreducer";
import missionReducer from "./reducers";

const store = configureStore({
  reducer: {
    mission: missionReducer,
    // dragon:dragonreducer,
    rokets: {},
  },
});

export default store;
