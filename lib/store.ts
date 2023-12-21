import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import {persistReducer } from 'redux-persist'
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
  return {
    getItem(_key:string) {
      return Promise.resolve(null);
    },
    setItem(_key:string, value:{}) {
      return Promise.resolve(value);
    },
    removeItem(_key:string) {
      return Promise.resolve();
    },
  };
};

const storage = typeof window !== "undefined" ? createWebStorage("session") : createNoopStorage();


const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, authReducer)


export const makeStore = () => {

  return configureStore({
    reducer: {
      auth: persistedReducer,
    },
    // devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

