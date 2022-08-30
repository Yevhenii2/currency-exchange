import { configureStore } from '@reduxjs/toolkit';

import ratesReducer from './reducers/ratesReducer';
import UAHValueReducer from './reducers/UAHValueReducer';
import isMobileReducer from './reducers/isMobileReducer';

const store = configureStore({
    reducer: {
        rates: ratesReducer,
        UAHValue: UAHValueReducer,
        isMobile: isMobileReducer
    }
});


export default store;

export type RootState = ReturnType<typeof store.getState>;
export type RateDispatch = typeof store.dispatch;