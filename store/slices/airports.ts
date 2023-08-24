import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  IAirportsSlice,
  IFlightsPayload,
  IFlightsSlice,
} from "store/models/common";
import { getAirports, getFlights } from "store/services/airports";
const initialState: IAirportsSlice = {
  airports: [],
  flights: [],
  status: {
    fetchAirports: "idle",
    fetchFlights: "idle",
  },
  error: "",
};

export const fetchAirports = createAsyncThunk("get-airports", async () => {
  return await getAirports()
    .then((res) => res.data)
    .catch((err) => Promise.reject(err.data));
});

export const fetchFlights = createAsyncThunk(
  "get-flights",
  async (filter?: IFlightsPayload) => {
    return await getFlights(filter)
      .then((res) => res.data)
      .catch((err) => Promise.reject(err.data));
  }
);
const airportsReducer = createSlice({
  name: "airports",
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
      state.error = "Error";
    });
    builder.addCase(fetchFlights.pending, (state) => {
      state.status.fetchFlights = "loading";
    });
    builder.addCase(fetchFlights.fulfilled, (state, action) => {
      state.status.fetchFlights = "success";
      state.flights = action.payload;
      state.error = "";
    });
    builder.addCase(fetchFlights.rejected, (state, action) => {
      state.status.fetchFlights = "error";
      state.error = "Error";
    });
  },
});

export const {} = airportsReducer.actions;
export default airportsReducer.reducer;
