import * as types from '../constants/ActionTypes';
import { AsyncStorage } from 'react-native';

export const addProduct = (payload) => {
  return {
    type: types.ADD_FOOD,
    id: Date.now(),
    title: payload.title,
    desc: payload.desc,
    datepick: payload.datepick,
    expdatepick: payload.expdatepick,
    days: payload.days,
  };
};

export const receiveData = (foods) => {
  return {
    type: types.RECEIVE_DATA,
    foods: foods || [],
  }
};

export const fetchAllData = () => {
  return dispatch => {
    return AsyncStorage.getItem('FOODS')
        .then((foods) => {
          dispatch(receiveData(JSON.parse(foods)))
        })
  }
};
