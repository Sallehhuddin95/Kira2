import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import retirementFundService from "./retirementFundService";
import {
  retirementFund,
  retirementFundInput,
} from "../../assets/data/DataTypes";

const initialState: retirementFund = {
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: null,
  initialCapital: 0,
  monthlySalary: 0,
  annualSalaryRaise: 0,
  employeeContribution: 0,
  employerContribution: 0,
  annualReturn: 0,
  yearsUntilRetire: 0,
  finalCapital: 0,
  // Add retirement table here or leave it empty initially
  retirementTable: [],
};

export const calculateRetirementFund = createAsyncThunk(
  "retirementFund/calculateRetirementFund",
  async (data: retirementFundInput, thunkAPI) => {
    try {
      // const retirementTable =
      //   retirementFundService.calculateRetirementFund(data);
      // dispatch(setRetirementTable(retirementTable));
      // return { success: true };
      //save data in local storage
      localStorage.setItem("retirementValueInput", JSON.stringify(data));
      return await retirementFundService.calculateRetirementFund(data);
    } catch (error: Error | any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const fundSlice = createSlice({
  name: "retirementFund",
  initialState,
  reducers: {
    resetFund: (state) => {
      Object.assign(state, initialState);
    },
    setRetirementTable: (state, action) => {
      state.retirementTable = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(calculateRetirementFund.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
      state.message = null;
    });
    builder.addCase(calculateRetirementFund.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.message = "Retirement fund calculated successfully.";
      state.retirementTable = action.payload;
      state.finalCapital =
        action.payload[action.payload.length - 1].finalCapital;
    });
    builder.addCase(calculateRetirementFund.rejected, (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = "There was an error calculating retirement fund.";
    });
  },
});

export const selectRetirementFund = (state: RootState) => state.fund;
export const { setRetirementTable, resetFund } = fundSlice.actions;
export default fundSlice.reducer;
