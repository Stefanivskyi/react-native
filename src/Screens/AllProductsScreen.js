import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native';
import AllProductsComponent from '../components/AllProductComponent';
import AddProduct from '../components/AddProductContainer';
import { addProduct, fetchAllData } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Provider } from 'react-redux';
import configureStore from '../configureStore'

const store = configureStore();

class AllProductsScreen extends Component {
  componentDidMount() {
    this._initialData();
  }

  _initialData() {
    this.props.fetchAllData();
  }


  render() {
    const { foods } = this.props;

    return (
        <View>
          <Provider store={store}>
            <AllProductsComponent foods={foods}/>
          </Provider>
        </View>
    );
  }
}

const styles = StyleSheet.create({});

const mapStateToProps = state => ({
  foods: state
});

const matchDispatchToProps = dispatch => bindActionCreators({
  fetchAllData
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(AllProductsScreen);
