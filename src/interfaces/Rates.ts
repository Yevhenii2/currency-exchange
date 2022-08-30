import { ROUTES }  from "../constants";

type Rate = Record<typeof ROUTES[number], number>

export interface ExhangeRate {
    base: string,
    date: string,
    rates: Rate,
    success: boolean
}
