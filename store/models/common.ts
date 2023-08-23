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
  status: {
    fetchAirports: IStatus;
  };
  error: string;
};
