import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MainScreen from './src/Screens/MainScreen';
import GetPhotoScreen from './src/Screens/GetPhotoScreen';
import NewProductScreen from './src/Screens/NewProductScreen';
import AllProductsScreen from './src/Screens/AllProductsScreen';
import AddProduct from './src/components/AddProduct';


const App = StackNavigator({
  MainScreen: {
    screen: MainScreen,
    navigationOptions: {
      headerTitle: 'MAIN SCREEN',
    },
  },
  GetPhotoScreen: {
    screen: GetPhotoScreen,
    navigationOptions: {
      headerTitle: 'GET PHOTO',
    },
  },
  NewProductScreen: {
    screen: NewProductScreen,
    navigationOptions: {
      headerTitle: 'NEW PRODUCT',
    },
  },
  AllProductsScreen: {
    screen: AllProductsScreen,
    navigationOptions: {
      headerTitle: 'ALL PRODUCTS'
    },
  },

});
export default App;

AppRegistry.registerComponent('BestBefore', () => App);
