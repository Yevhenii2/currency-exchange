import { createReducer } from "@reduxjs/toolkit";
import { ExhangeRate } from "../../interfaces/Rates";

export const defaultRatesState: ExhangeRate = {
    base: "UAH",
    date: "0000-00-00",
    rates: {
        EUR: 0,
        PLN: 0,
        USD: 0
    },
    success: false
}

export enum ACTION_TYPES {
    UPDATE_RATES = "UPDATE_RATES"
}

const ratesReducer = createReducer(defaultRatesState, {
    [ACTION_TYPES.UPDATE_RATES] : (state, action) => action.payload
})
export default ratesReducer;