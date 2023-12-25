import { combineReducers } from 'redux';
import letters from 'redux/modules/letterSlice';
import member from 'redux/modules/memberSlice';
import auth from 'redux/modules/authSlice';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  letters,
  member,
  auth,
});

const store = configureStore({
  reducer: rootReducer,
});

const getStore = () => store;
export default getStore;
