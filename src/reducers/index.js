import * as types from '../constants/ActionTypes'
import { AsyncStorage } from 'react-native';


const saveAllData = async (state) => {
  try {
    await AsyncStorage.setItem('FOODS', JSON.stringify(state));
  } catch (error) {
    console.log('AsyncStorage save error: ' + error.message);
  }
}

const food = (state, action) => {
  switch (action.type) {
    case types.ADD_FOOD:
      return {
        id: action.id,
        title: action.title,
        desc: action.desc,
        datepick: action.datepick,
        expdatepick: action.expdatepick,
        days: action.days,
        createdAt: new Date(),
        completed: false
      };
    default:
      return state;
  }
}

const FoodReducer = (state = [], action) => {
  switch (action.type) {
    case types.ADD_FOOD:
      const foods = [...state, food(undefined, action)];
      saveAllData(foods);
      return foods;
    case types.RECEIVE_DATA:
      return action.foods;
    default:
      return state;
  }
}
export default FoodReducer;
