import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
// Async
const rocketThunk = createAsyncThunk('rocket', async () => {
  try {
    const respons = await axios.get('https://api.spacexdata.com/v3/rockets');
    return respons.data;
  } catch (error) {
    return error;
  }
});
const initialState = {
  rockets: [],
  rocketloading: 'idel',
};
const rocketReducer = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const newState = state.rockets.map((rocket) => {
        if (rocket.id === action.payload) {
          const newState = { ...rocket, reserved: true };
          return newState;
        }
        return rocket;
      });
      state.rockets = newState;
    },
    cancleRocket: (state, action) => {
      const newState = state.rockets.map((rocket) => {
        if (rocket.id !== action.payload) {
          return rocket;
        }
        const newState = { ...rocket, reserved: false };
        return newState;
      });
      state.rockets = newState;
    },
  },
  extraReducers: {
    // rocket/fulfilled
    [rocketThunk.fulfilled]: (state, { payload }) => {
      state.rockets = payload;
    },
    [rocketThunk.pending]: (state) => {
      state.rocketloading = 'pending';
    },
    [rocketThunk.rejected]: (state) => {
      state.rocketloading = 'rejected';
    },
  },
});
const getRocketState = (state) => state.rockets.rockets;
const getRocketLoading = (state) => state.rockets.rocketloading;
export const { reserveRocket, cancleRocket } = rocketReducer.actions;
export {
  rocketThunk,
  getRocketState,
  getRocketLoading,
};
export default rocketReducer.reducer;
