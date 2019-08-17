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
  KeyboardAvoidingView
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Welcome from '../page/Welcome';
import Home from '../page/Home';
import Detail from '../page/Detail';
import PageOne from '../page/PageOne';
import PageTwo from '../page/PageTwo';
import PageThree from '../page/PageThree';
import PageFor from '../page/PageFor';
import {createSwitchNavigator,createStackNavigator,createMaterialTopTabNavigator,createBottomTabNavigator,StackActions } from 'react-navigation';
import {connect} from 'react-redux';
import {createReactNavigationReduxMiddleware, createReduxContainer} from 'react-navigation-redux-helpers';

const Init=createStackNavigator({
  Welcome:{
    screen:Welcome,
    navigationOptions:{
      header:null
    }
  }
},{}) ;
const Main=createStackNavigator({
  Home:{
    screen:Home,
    navigationOptions:{
      header:null
    }
  },
  Detail:{
    screen:Detail,
    navigationOptions:(props)=>{
      return{
        header:null,
        gesturesEnabled:true
      }
    }
  }
},{}) ;
const SwitchNavigator=createSwitchNavigator({
  Init:Init,
  Main:Main
},{navigationOptions:{
      header:null
    }})

export default SwitchNavigator;