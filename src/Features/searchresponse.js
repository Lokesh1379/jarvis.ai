import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSearching: false,
  response: "",
  searchQuery: "",
  searchResponse: [],
};

const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    setIsSearching: (state, { payload }) => {
      state.isSearching = payload;
    },
    setSearchQuery: (state, { payload }) => {
      state.searchQuery = payload;
    },
    setSearchResponse: (state, { payload }) => {
      state.searchResponse = payload;
    },
  },
});

export const { setIsSearching, setSearchQuery, setSearchResponse } =
  searchSlice.actions;
export default searchSlice.reducer;
