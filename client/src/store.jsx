import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import symptomSlice from "./features/symptomSlice.jsx";
import thunk from 'redux-thunk'; // Import Redux Thunk middleware

const store = configureStore({
    reducer: {
        symptomsData: symptomSlice,
        // other reducers if you have them
    },
    middleware: [thunk, ...getDefaultMiddleware()],
});

export default store;
