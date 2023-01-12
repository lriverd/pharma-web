import { RootState } from "./../store/store";
import { Pharmacy } from "./../models/pharmacy.model";
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

// export const INITIAL_STATE = initializer();

// export const initializer = () => ({
//   pharmacyList: [],
//   loading: false,
// });

// export const actions = {
//   START_SEARCH: "START",
//   FINISH_SEARCH: "FINISH",
// };

// export const personListThunk = (dispatch, latitude, longitude, radiusKm) => {
//   dispatch({ type: actions.START_SEARCH });

//   const success = ({ data }) => {
//     dispatch({ type: actions.FINISH_SEARCH, pharmacyList: data });
//   };
//   return getOpenPharmacy(latitude, longitude, radiusKm).then(success);
// };

// export const reducer = (state = INITIAL_STATE, action = {}) => {
//   switch (action.type) {
//     case actions.START_SEARCH:
//       return {
//         ...state,
//         loading: true,
//       };
//     case actions.FINISH_SEARCH:
//       return {
//         ...state,
//         loading: false,
//         pharmacyList: action.pharmacyList,
//       };
//     default:
//       return state;
//   }
// };

// export const pharmacyList = (state) => state.pharmacyModule.pharmacyList;
// export const loading = (state) => state.pharmacyModule.loading;
