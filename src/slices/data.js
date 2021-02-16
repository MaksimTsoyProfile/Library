import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { endLoading } from '../loading';

export const initialState = {
  books: [
    {
      name: 'Гарри поттер',
      id: 1,
    },
    {
      name: 'Гарри поттер',
      id: 2,
    },
    {
      name: 'Гарри поттер',
      id: 3,
    },
    {
      name: 'Гарри поттер',
      id: 4,
    },
    {
      name: 'Гарри поттер',
      id: 5,
    },
  ],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    getPostRequest: (state) => {
      state.loading = true;
    },
    getPostSuccess: (state, { payload: books }) => {
      state.books = books;
      state.hasErrors = false;
    },
    getPostFailure: (state) => {
      state.hasErrors = true;
    },
  },
});

export const {
  getPostRequest, getPostFailure, getPostSuccess,
} = dataSlice.actions;
export default dataSlice.reducer;

export const getPosts = () => async (dispatch) => {
  dispatch(getPostRequest());
  try {
    const response = await axios.get('https://api.covid19api.com/total/country/afghanistan');
    dispatch(getPostSuccess(response.data));
    endLoading();
  } catch (e) {
    dispatch(getPostFailure());
    endLoading();
  }
};
