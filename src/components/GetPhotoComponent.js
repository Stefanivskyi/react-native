import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import { MainScreen, NewProductScreen, AllProductsScreen } from '../screenNames';

class GetPhotoComponent extends Component {
  render() {
    return (
        <View style={{
          flex: 1,
          backgroundColor: '#FFFFFF',
          alignItems: 'center',
          justifyContent: 'center'
        }}>

          <Text style={styles.topp}>
            place for photo
          </Text>

          <View style={{ flexDirection: 'row', flexWrap: 'wrap', margin: 35, alignItems: 'center', width: '100%' }}>
            <TouchableHighlight style={styles.btnPhoto}
                                onPress={() => {
                                  this.props.navigation.navigate(NewProductScreen);
                                }}>
              <Text style={styles.btnPhotoText}>Photo</Text>
            </TouchableHighlight>

            <TouchableHighlight style={styles.btnSkip}
                                onPress={() => {
                                  this.props.navigation.navigate(AllProductsScreen);
                                }}>
              <Text style={styles.btnSkipText}>SKIP</Text>

            </TouchableHighlight>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({

      topp: {
        backgroundColor: '#333333',
        flex: 1,
        width: '100%',
        textAlign: 'center',
        justifyContent: 'center',
        color: '#FFFFFF',
        fontSize: 18
      },

      btnPhoto: {
        position: 'absolute',
        width: 84,
        height: 84,
        backgroundColor: '#E6E6E6',
        borderWidth: 2,
        borderColor: '#4D4D4D',
        borderRadius: 48,
        marginRight: 15,
        justifyContent: 'center',
        left: '50%',
        marginLeft: -43,

      },

      btnPhotoText: {
        color: '#000000',
        textAlign: 'center',
        alignItems: 'center',
        fontSize: 18
      },

      btnSkip: {
        width: 110,
        height: 50,
        borderColor: '#1A53FF',
        borderRadius: 8,
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        position: 'relative',
        marginLeft:'65%',



      },
      btnSkipText: {
        textAlign: 'center',
        color: '#1A53FF',
        alignItems: 'center',


      }
    }
);

export default GetPhotoComponent;
