import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Dimensions
} from 'react-native';
import AddProduct from './AddProduct';


let { width } = Dimensions.get('window');
let available_width = width - 80 ;


class ProgressPage extends Component {

  constructor(props) {
    super(props);
    this.progress = new Animated.Value(0);
    this.state = {
      progress: 0
    };
  }

  componentDidMount() {
    let d = this.props.progress / 24;
    this.progress.setValue(0);
    this.progress.addListener((progress) => {
      this.setState({
        progress: parseInt(progress.value) + '%'
      });
    });

    Animated.timing(this.progress, {
      duration: 3000,
      toValue: (d / 10) * 100
    }).start(() => {
      this.setState({
        progress: "done"
      })
    });
  }

  getProgressStyles() {
    let animated_width = this.progress.interpolate({
      inputRange: [0, 40, 100],
      outputRange: [0, available_width / 2, available_width]
    });
    //green -> orange -> red
    const color_animation = this.progress.interpolate({
      inputRange: [0, 40, 100],
      outputRange: ['rgb(199, 45, 50)', 'rgb(224, 150, 39)', 'rgb(101, 203, 25)']
    });

    return {
      width: animated_width,
      height: 12,
      backgroundColor: color_animation,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: '#ffffff',
    }
  }


  render() {
    return (
        <View style={styles.container}>
          <View style={styles.progress_container}>
            <Animated.View
                style={[this.getProgressStyles.call(this)]}
            >
            </Animated.View>
          </View>
          {/*<Text style={styles.progress_status}>
            {this.state.progress}
          </Text>*/}
        </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 40,
    paddingRight: 40,
    justifyContent: 'center',
  },
  progress_container: {
    transform: [{ rotate: '180deg'}],
    backgroundColor: '#e6e6e6',
    borderRadius: 20,
    borderWidth:1,
    borderColor: '#ffffff',
  },
  progress_status: {
    color: '#333',
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'center',
  }
});

export default ProgressPage;
