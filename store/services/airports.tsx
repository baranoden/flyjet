import { axiosService } from "@/libs/axios";
import axios, { AxiosResponse } from "axios";
import { IFlightsPayload } from "store/models/common";

export const getAirports = async () => {
  try {
    const response: AxiosResponse = await axiosService.get(`/get-airports`);
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const getFlights = async (filter?: IFlightsPayload) => {
  try {
    const response: AxiosResponse = await axiosService.get(
      `/get-flights?from=${filter?.from}&to=${filter?.to}&startDate=${filter?.startDate}&endDate=${filter?.endDate}&passenger=${filter?.passenger}`
    );
    return response;
  } catch (error: any) {
    return error.response;
  }
};
