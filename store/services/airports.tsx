import { axiosService } from "@/libs/axios";
import axios, { AxiosResponse } from "axios";

export const getAirports = async () => {
  try {
    const response: AxiosResponse = await axiosService.get(`/get-airports`);
    return response;
  } catch (error: any) {
    return error.response;
  }
};
