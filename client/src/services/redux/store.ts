import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import queryHistoryReducer from "../../features/StoreFinder/StoreFinderForm/queryHistorySlice";

export const store = configureStore({
  reducer: {
    queryHistory: queryHistoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
