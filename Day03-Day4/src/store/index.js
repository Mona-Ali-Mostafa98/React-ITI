// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import { bookReducer } from './bookSlice'; // Import your book slice reducer

const store = configureStore({
    reducer: {
        books: bookReducer,
    },
});

export default store;
