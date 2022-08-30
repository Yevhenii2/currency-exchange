import { createReducer } from "@reduxjs/toolkit";

export const defaultUAHValueState = 0;

export enum ACTION_TYPES {
    UPDATE_UAH_VALUE = "UPDATE_UAH_VALUE"
}

const UAHValueReducer = createReducer(defaultUAHValueState, {
    [ACTION_TYPES.UPDATE_UAH_VALUE] : (state, action) => action.payload
})
export default UAHValueReducer;