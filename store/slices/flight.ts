import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IAirportsSlice, IFlightsSlice } from "store/models/common";
import { getAirports } from "store/services/airports";
const initialState: IAirportsSlice = {
  airports: [],
  status: {
    fetchAirports: "idle",
  },
  error: "",
};

export const fetchAirports = createAsyncThunk("get-airports", async () => {
  return await getAirports()
    .then((res) => res.data)
    .catch((err) => Promise.reject(err.data));
});
const flightReducer = createSlice({
  name: "flight",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAirports.pending, (state) => {
      state.status.fetchAirports = "loading";
    });
    builder.addCase(fetchAirports.fulfilled, (state, action) => {
      state.status.fetchAirports = "success";
      state.airports = action.payload;
      state.error = "";
    });
    builder.addCase(fetchAirports.rejected, (state, action) => {
      state.status.fetchAirports = "error";
      state.error = "Hata oluştu";
    });
  },
});

export const {} = flightReducer.actions;
export default flightReducer.reducer;
