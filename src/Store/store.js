import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import searchSlice from "../Features/searchresponse";
const introPersistConfig = {
  key: "intro",
  storage: sessionStorage,
  whitelist: ["searchData"],
};

const persistedSearchReducer = persistReducer(introPersistConfig, searchSlice);
const store = configureStore({
  reducer: {
    searchData: persistedSearchReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
