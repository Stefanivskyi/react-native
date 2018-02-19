import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import GetPhotoComponent from '../components/GetPhotoComponent';

class GetPhotoScreen extends Component {
  render() {
    return (
        <GetPhotoComponent navigation={this.props.navigation}/>
    );
  }
}

const styles = StyleSheet.create({}
);

export default GetPhotoScreen;
