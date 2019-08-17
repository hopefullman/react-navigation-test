/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment,Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  KeyboardAvoidingView,
  Button,
  Platform,
  BackHandler
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';
import {createBottomTabNavigator } from 'react-navigation';
import NavigatorUtil from '../navigator/NavigatorUtil';
import DynamicNavigator from '../navigator/DynamicNavigator';
class Home extends Component{
  constructor(props){
    super(props)
  }
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }
  handleBackPress = () => {
    BackHandler.exitApp();
    return true;
  }
  render(){
    NavigatorUtil.navigation=this.props.navigation;
    return (
      <DynamicNavigator/>
  );
  }
   
}
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
 
});

export default Home;
