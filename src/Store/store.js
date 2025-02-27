import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import searchreducer from "../Features/searchresponse";
import sessionStorage from "redux-persist/es/storage/session";
const introPersistConfig = {
  key: "searchSlice", // ✅ Ensure this matches your reducer name
  storage: sessionStorage,
  whitelist: ["searchResponse"], // Only persist the necessary field
};

const persistedSearchReducer = persistReducer(
  introPersistConfig,
  searchreducer
);
const store = configureStore({
  reducer: {
    searchResponse: persistedSearchReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
