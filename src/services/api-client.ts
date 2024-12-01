import axios, { AxiosRequestConfig } from "axios";


export interface FetchResponse<T> {
  count: number;
  results: T[];
  next?: string | undefined;
}

const axiosInstance =  axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3d84fb20e34a4440be83fbec41c1a188",
  },
});


export class APIClient<T> {
  constructor(private endpoint: string){}


  getAll = (config: AxiosRequestConfig = {}) => {
    return axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then(res => res.data)
  }

}


export default APIClient;




