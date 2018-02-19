import React, { Component } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  PanResponder,
  Text,
  TouchableHighlight
} from 'react-native';
import { GetPhotoScreen, MainScreen } from '../screenNames';


import { addProduct } from '../actions/index';

/*
import * as AsyncStorage from 'react-native';
import DatePicker from './calendar/DatepickerLogic';
*/


class AddProduct extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: ''
    };

    this.addDescription = this.addDescription.bind(this)
  }


  addDescription(c) {
    let { addProduct } = this.props;

    addProduct({
      title: this.refs.tes._lastNativeText,
      desc: this.refs.test._lastNativeText,
      datepick: this.refs.datepicker.state.date.toDateString(),
      expdatepick: this.refs.expdatepicker.state.date.toDateString(),
      days: c
    });
  };

  /*
      //calendar
      componentWillMount() {
        this._panResponder = PanResponder.create({
          onStartShouldSetPanResponder: (e) => {
            console.log('onStartShouldSetPanResponder');
            return true;
          },
          onMoveShouldSetPanResponder: (e) => {
            console.log('onMoveShouldSetPanResponder');
            return true;
          },
          onPanResponderGrant: (e) => console.log('onPanResponderGrant'),
          onPanResponderMove: (e) => console.log('onPanResponderMove'),
          onPanResponderRelease: (e) => console.log('onPanResponderRelease'),
          onPanResponderTerminate: (e) => console.log('onPanResponderTerminate')
        });
      }
    */
  render() {

    const a = new Date(this.state.date).toDateString();
    const b = new Date(this.state.date1).toDateString();
    let c = (new Date(b).getTime() - new Date(a).getTime()) / 3600000;

    return (
        <View style={styles.input}>
          <Text style={{
            width: '100%',
            height: 180,
            backgroundColor: '#e6e6e6'
          }}
          >
            place for photo
          </Text>
          <TextInput
              style={{ marginTop: 10, marginLeft: 15, marginRight: 15 }}
              placeholder="Name / description"
              ref="tes"
          />
          <TextInput
              style={{ marginTop: 10, marginLeft: 15, marginRight: 15, width: '50%' }}
              placeholder="Production date"
          />
          <TextInput
              style={{ marginTop: 10, marginLeft: 15, marginRight: 15, width: '50%' }}
              placeholder="Expiration date"
          />
          {/*
          <DatePicker
              style={{ width: 200, marginTop: 20, marginLeft: 15,}}
              date={this.state.date}
              mode="date"
              ref="datepicker"
              placeholder="Production date"
              format="YYYY-MM-DD"
              minDate="2018-01-01"
              maxDate="2056-06-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              iconSource={require('./calendar/google_calendar.png')}
              onDateChange={(date) => {
                this.setState({ date: date });
              }}
          />*/}
          {/*<Text style={styles.instructions}>Production date: {this.state.date}</Text>*/}
          {/*
          <DatePicker
              style={{ width: 200, marginTop: 20, marginLeft: 15,}}
              date={this.state.date1}
              mode="date"
              ref="expdatepicker"
              placeholder="Expiration date"
              format="YYYY-MM-DD"
              minDate="2018-01-01"
              maxDate="2056-06-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              iconSource={require('./calendar/google_calendar.png')}
              onDateChange={(date1) => {
                this.setState({ date1: date1 });
              }}
          />
          */}
          {/* <Text style={styles.instructions}>Expiration date: {this.state.date1}</Text>*/}
          {/*<Text>{c}</Text>*/}
          < TextInput
              style={{ marginTop: 10, marginLeft: 15, marginRight: 15, width: '40%' }}
              placeholder="Quantity"
              ref="test"
          />

          <TouchableHighlight
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#33adff',
                borderWidth: 1,
                borderColor: '#33adff',
                borderRadius: 5,
                height: 40,
                width: '80%',
                marginLeft: '10%',
                marginTop: 40
              }}
              /*onPress={() => this.addDescription(c)}*/
              onPress={() => this.props.navigation.navigate(GetPhotoScreen)}
          >
            <Text style={{ color: '#ffffff' }}>
              SAVE
            </Text>
          </TouchableHighlight>

          <TouchableHighlight
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#ffffff',
                borderWidth: 1,
                borderColor: '#ffffff',
                borderRadius: 5,
                height: 40,
                width: '80%',
                marginLeft: '10%'

              }}
              onPress={() => this.props.navigation.navigate(MainScreen)}
          >
            <Text style={{ color: '#33adff' }}>
              Cancel
            </Text>
          </TouchableHighlight>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  input: {
    backgroundColor: '#ffffff'
  }
});


export default AddProduct;
