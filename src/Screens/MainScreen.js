import React, { Component } from 'react';
import { GetPhotoScreen } from '../screenNames';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

class MainScreen extends Component {
  render() {
    const { navigation } = this.props;

    return (

        <View style={styles.MainScreenContainer}>

          <TouchableHighlight
              onPress={() => {
                navigation.navigate(GetPhotoScreen);
              }}
          >
            <Image
                source={require('./main.png')}
                style={styles.MainScreenImage}
            />
          </TouchableHighlight>

        </View>
    );
  }
}

const styles = StyleSheet.create({

  MainScreenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  MainScreenImage: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 99
  }

});

export default MainScreen;
