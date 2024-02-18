import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import compoundingFundService from "./compoudingFundService";
import {
  compoundingFund,
  compoundingFundInput,
} from "../../assets/data/DataTypes";
import { AxiosError } from "axios";

const initialState: compoundingFund = {
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: null,
  initialCapital: 0,
  annualReturn: 0,
  yearsToGrow: 0,
  finalCapital: 0,
  compoundingTable: [],
};

export const calculateCompoundingFund = createAsyncThunk(
  "compoundingFund/calculateCompoundingFund",
  async (data: compoundingFundInput, thunkAPI) => {
    try {
      localStorage.setItem("compoundingValueInput", JSON.stringify(data));
      return await compoundingFundService.calculateCompoundingFund(data);
    } catch (error) {
      const err = error as AxiosError;
      const message = err.message || "An error occurred";
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const fundSlice = createSlice({
  name: "compoundingFund",
  initialState,
  reducers: {
    resetFund: (state) => {
      Object.assign(state, initialState);
    },
    setCompoundingTable: (state, action) => {
      state.compoundingTable = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(calculateCompoundingFund.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
      state.message = null;
    });
    builder.addCase(calculateCompoundingFund.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.message = "Compounding fund calculated successfully.";
      state.compoundingTable = action.payload;
      console.log("action.payload", action.payload);

      state.finalCapital =
        action.payload[action.payload.length - 1].finalCapital;
    });
    builder.addCase(calculateCompoundingFund.rejected, (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = "There was an error calculating compounding fund.";
    });
  },
});

export const selectCompoudingFund = (state: RootState) => state.compoundingFund;
export const { setCompoundingTable, resetFund } = fundSlice.actions;
export default fundSlice.reducer;
