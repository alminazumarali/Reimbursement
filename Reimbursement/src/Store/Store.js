import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import UserSlice from '../Slices/UserSlice';
import ExpenseSlice from '../Slices/ExpenseSilce'

const persistConfig = {
    key: 'root',
    storage,
};

    const rootReducer = combineReducers({
    auth: UserSlice,ExpenseSlice
    
    });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const Store = configureStore({
reducer: persistedReducer,
});

export const persistor = persistStore(Store);