import { createReducer } from "@reduxjs/toolkit";

export const defaultIsMobileState = false;

export enum ACTION_TYPES {
    UPDATE_IS_MOBILE = "UPDATE_IS_MOBILE"
}

const isMobileReducer = createReducer(defaultIsMobileState, {
    [ACTION_TYPES.UPDATE_IS_MOBILE] : (state, action) => action.payload
})
export default isMobileReducer;