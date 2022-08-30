import axiosInstance from "../axios";
import { ROUTES } from "../constants";
import { ExhangeRate } from "../interfaces/Rates"

class ExchangeService {
    async getExhangeRate(base: string, symbols: string){
        const res = await axiosInstance.get("/latest", {params: {base, symbols}});

        return res;
    }
    async getAllExhangeRates(): Promise<ExhangeRate | { success: false }> {
        const res = await axiosInstance.get<ExhangeRate>("/latest", {params: {base: "UAH", symbols: ROUTES.join(",")}});

        if(res.data){
            return res.data;
        }
        return { success: false };
    }
}

export default ExchangeService;