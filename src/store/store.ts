import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import pharmacyListReducer from "../slices/pharmacyListSlice";
// ...

export const store = configureStore({
  reducer: {
    pharmacyList: pharmacyListReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
