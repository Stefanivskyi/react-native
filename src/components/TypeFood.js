import React, { Component } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  PanResponder,
  Text,
  TouchableHighlight,
  Button
} from 'react-native';
import { GetPhotoScreen, MainScreen } from '../screenNames';


class TypeFood extends Component {

  constructor() {
    super();

    this.state = {
      status: true
    }
  }

  ShowHideTextComponentView = () => {

    if (this.state.status === true) {
      this.setState({ status: false })
    }
    else {
      this.setState({ status: true })
    }
  };


  render() {

    return (
        <View style={styles.input}>

          <TouchableHighlight
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#ffffff',
                borderWidth: 1,
                borderColor: '#000000',
                borderRadius: 5,
                height: 40,
                width: '20%',
                marginLeft: '40%'

              }}
              onPress={this.ShowHideTextComponentView}
          >
            <Text style={{ color: '#33adff' }}>
              ADVANCED
            </Text>
          </TouchableHighlight>
          {
            this.state.status ?
                <View>

                  <TouchableHighlight
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#ffff0f',
                        borderWidth: 1,
                        borderColor: '#ffffff',
                        borderRadius: 5,
                        height: 40,
                        width: '20%',
                        marginLeft: '40%'

                      }}
                      onPress={() => this.props.navigation.navigate(MainScreen)}
                  >
                    <Text style={{ color: '#33adff' }}>
                      milky
                    </Text>
                  </TouchableHighlight>

                  <TouchableHighlight
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#ffff0f',
                        borderWidth: 1,
                        borderColor: '#ffffff',
                        borderRadius: 5,
                        height: 40,
                        width: '20%',
                        marginLeft: '40%'

                      }}
                      onPress={() => this.props.navigation.navigate(MainScreen)}
                  >
                    <Text style={{ color: '#33adff' }}>
                      bread
                    </Text>
                  </TouchableHighlight>

                  <TouchableHighlight
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#ffff0f',
                        borderWidth: 1,
                        borderColor: '#ffffff',
                        borderRadius: 5,
                        height: 40,
                        width: '20%',
                        marginLeft: '40%'

                      }}
                      onPress={() => this.props.navigation.navigate(MainScreen)}
                  >
                    <Text style={{ color: '#33adff' }}>
                      vagetables
                    </Text>
                  </TouchableHighlight>

                  <TouchableHighlight
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#ffff0f',
                        borderWidth: 1,
                        borderColor: '#ffffff',
                        borderRadius: 5,
                        height: 40,
                        width: '20%',
                        marginLeft: '40%'

                      }}
                      onPress={() => this.props.navigation.navigate(MainScreen)}
                  >
                    <Text style={{ color: '#33adff' }}>
                      fruits
                    </Text>
                  </TouchableHighlight>

                  <TouchableHighlight
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#ffff0f',
                        borderWidth: 1,
                        borderColor: '#ffffff',
                        borderRadius: 5,
                        height: 40,
                        width: '20%',
                        marginLeft: '40%'

                      }}
                      onPress={() => this.props.navigation.navigate(MainScreen)}
                  >
                    <Text style={{ color: '#33adff' }}>
                      healthy
                    </Text>
                  </TouchableHighlight>
                </View> : null
          }
        </View>
    );
  }
}


const styles = StyleSheet.create({
  input: {
    backgroundColor: '#6e6e6e',
    position: 'relative',
    width: '70%',
    marginLeft: '15%',
    height: 200
  }
});


export default TypeFood;
