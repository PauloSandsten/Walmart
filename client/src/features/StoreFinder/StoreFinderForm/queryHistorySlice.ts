import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../services/redux/store";

interface QueryHistoryState {
  history: Array<string>;
}

const initialState: QueryHistoryState = {
  history: [],
};

export const queryHistorySlice = createSlice({
  name: "queryHistory",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.history = [action.payload, ...state.history.slice(0, 4)];
    },
  },
});

export const { add } = queryHistorySlice.actions;

export const selectQueryHistory = (state: RootState) =>
  state.queryHistory.history;

export default queryHistorySlice.reducer;
