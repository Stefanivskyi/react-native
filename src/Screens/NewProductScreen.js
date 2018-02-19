import React, { Component } from 'react';
import { GetPhotoScreen, MainScreen } from '../screenNames';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  StyleSheet,
  ScrollView
} from 'react-native';
import AddProduct from '../components/AddProduct';
import TypeFood from '../components/TypeFood';


class NewProductScreen extends Component {
  render() {

    return (

        <View>
          <View>
            <AddProduct navigation={this.props.navigation}/>
            <TypeFood/>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({});


export default NewProductScreen;
