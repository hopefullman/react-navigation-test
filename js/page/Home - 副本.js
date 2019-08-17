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
  Platform
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
  createBottomTab(){
    return createBottomTabNavigator({
      PageOne:{
        screen:PageOne,
        navigationOptions:{
          header:null,
          tabBarLabel:'PageOne',
          tabBarIcon:({tintColor,focused})=>{
            return focused?<Text style={{color:tintColor}}>123</Text>:<Text>456</Text>
          }
        }
      },
      PageTwo:{
        screen:PageTwo,
        navigationOptions:{
          header:null,
          tabBarLabel:'PageTwo',
          tabBarIcon:({tintColor,focused})=>{
            return focused?<Text style={{color:tintColor}}>123</Text>:<Text>456</Text>
          }
        }
      },
      PageThree:{
        screen:PageThree,
        navigationOptions:{
          header:null,
          tabBarLabel:'PageThree',
          tabBarIcon:({tintColor,focused})=>{
            return focused?<Text style={{color:tintColor}}>123</Text>:<Text>456</Text>
          }
        }
      }
    },{tabBarOptions: {
        activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#e91e63'
      }
    })
  }
  render(){
    const Tabs=this.createBottomTab();
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
