export type IModal = {
  show: boolean;
  title: string;
  description: string;
  bg?: "success" | "error";
};
export type IStatus = "idle" | "loading" | "success" | "error";

export type IFlightsSlice = {
  flights: any[];
  flight: any;
  status: string;
  error: string;
};
export type IAirportsSlice = {
  airports: any[];
  flights: any[];
  status: {
    fetchAirports: IStatus;
    fetchFlights: IStatus;
  };
  error: string;
};
export type IFlightsPayload = {
  from: string;
  to: string;
  startDate: string;
  endDate: string | undefined;
  passenger: number;
};
