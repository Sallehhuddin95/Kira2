import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import retirementFundReducer from "../features/retirementfund/retirementFundSlice";
import compoundingFundReducer from "../features/compoundingfund/compoundingFundSlice";

const store = configureStore({
  reducer: {
    // reducer
    fund: retirementFundReducer,
    compoundingFund: compoundingFundReducer,
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

export default store;
