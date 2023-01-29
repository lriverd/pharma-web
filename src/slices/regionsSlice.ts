import { RootState } from "../store/store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Region } from "../models/region/region.model";
import { getRegions } from "../services/region.api";

export interface RegionListState {
  regionList: Region[];
  loading: boolean;
}

const initialState: RegionListState = {
  regionList: [],
  loading: false,
};

export const findRegions = createAsyncThunk(
  "regionSlice/getRegions",
  async () => {
    return getRegions();
  }
);

export const regionList = createSlice({
  name: "regionList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(findRegions.pending, (state) => {
        state.loading = true;
      })
      .addCase(findRegions.fulfilled, (state, action) => {
        state.loading = false;
        state.regionList = action.payload;
      })
      .addCase(findRegions.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const selectRegionList = (state: RootState) => state.regionList;

export default regionList.reducer;
