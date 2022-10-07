import { configureStore } from '@reduxjs/toolkit';

import missionReducer from './reducers';
import rocketReducer from './rocketReducer';

const store = configureStore({
  reducer: {
    mission: missionReducer,
    // dragon: dragonreducer,
    rockets: rocketReducer,
  },
});

export default store;
