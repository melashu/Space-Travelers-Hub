/* eslint-disable */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const dragonThunk = createAsyncThunk("dragon", async () => {
  try {
    try {
      const respons = await axios.get("https://api.spacexdata.com/v3/dragons");
      return respons.data;
    } catch (error) {
      return error;
    }
  } catch (error) {}
});

const initialState = {
  dragons: [],
  dragonloading: "idel",
};
const dragonReducer = createSlice({
  name: "dragon",
  initialState,
  reducers: {
    reserveDragon: (state, action) => {
      const newState = state.dragons.map((dragon) => {
        if (dragon.id === action.payload) {
          const newState = { ...dragon, reserved: true };
          return newState;
        }
        return dragon;
      });
      state.dragons = newState;
    },
    cancleDragon: (state, action) => {
      const newState = state.dragons.map((dragon) => {
        if (dragon.id !== action.payload) {
          return dragon;
        }
        const newState = { ...dragon, reserved: false };
        return newState;
      });
      state.dragons = newState;
    },
  },
  extraReducers: {
    // dragon/fulfilled
    [dragonThunk.fulfilled]: (state, { payload }) => {
      state.dragons = payload;
    },
    [dragonThunk.pending]: (state) => {
      state.dragonloading = "pending";
    },
    [dragonThunk.rejected]: (state) => {
      state.dragonloading = "rejected";
    },
  },
});

const getDragonState = (state) => state.dragon.dragons;
const getDragonLoading = (state) => state.dragon.dragonloading;
export const { reserveDragon, cancleDragon } = dragonReducer.actions;
export { dragonThunk, getDragonState, getDragonLoading };
export default dragonReducer.reducer;
