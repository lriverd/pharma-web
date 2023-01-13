import { RootState } from "../store/store";
import { Pharmacy } from "../models/pharmacy.model";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getOpenPharmacy } from "../services/pharmacy.api";
import { CoordinatesSearch } from "../models/coordinates.model";

export interface PharmacyListState {
  pharmacyList: Pharmacy[];
  loading: boolean;
}

const initialState: PharmacyListState = {
  pharmacyList: [],
  loading: false,
};

export const findPharmacyByGeolocation = createAsyncThunk(
  "pharmacyModule/getOpenPharmacy",
  async (coordinates: CoordinatesSearch) => {
    return getOpenPharmacy(
      coordinates.latitude,
      coordinates.longitude,
      coordinates.radius
    );
  }
);

export const pharmacyModule = createSlice({
  name: "pharmacyList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(findPharmacyByGeolocation.pending, (state) => {
        state.loading = true;
      })
      .addCase(findPharmacyByGeolocation.fulfilled, (state, action) => {
        state.loading = false;
        state.pharmacyList = action.payload;
      })
      .addCase(findPharmacyByGeolocation.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const selectPharmacyList = (state: RootState) => state.pharmacyList;

export default pharmacyModule.reducer;
