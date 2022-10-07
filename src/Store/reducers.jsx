import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const missionThunk = createAsyncThunk('mission', async () => {
  try {
    const respons = await axios.get('https://api.spacexdata.com/v3/missions');
    return respons.data;
  } catch (error) {
    return error;
  }
});

const initialState = {
  mission: [],
  loading: 'idel',
};
const missionReducer = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const newState = state.mission.map((eachMission) => {
        if (eachMission.mission_id === action.payload) {
          const newState = { ...eachMission, reserved: true };
          return newState;
        }
        return eachMission;
      });
      state.mission = newState;
    },
    leaveMission: (state, action) => {
      const newState = state.mission.map((eachMission) => {
        if (eachMission.mission_id !== action.payload) {
          return eachMission;
        }
        const newState = { ...eachMission, reserved: false };
        return newState;
      });
      state.mission = newState;
    },
  },
  extraReducers: {
    [missionThunk.fulfilled]: (state, { payload }) => {
      state.loading = 'fulfilled';
      state.mission = payload;
    },
    [missionThunk.pending]: (state) => {
      state.loading = 'pending';
    },
    [missionThunk.rejected]: (state) => {
      state.loading = 'rejected';
    },

  },
});

const getMissionState = (state) => state.mission.mission;
const getLoadingState = (state) => state.mission.loading;

export const { joinMission, leaveMission } = missionReducer.actions;
export {
  missionThunk,
  getMissionState,
  getLoadingState,

};
export default missionReducer.reducer;
