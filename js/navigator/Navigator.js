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
import My from '../page/My';
import Detail from '../page/Detail';
import PageOne from '../page/PageOne';
import PageTwo from '../page/PageTwo';
import PageThree from '../page/PageThree';
import PageFor from '../page/PageFor';
import {createSwitchNavigator,createStackNavigator,createMaterialTopTabNavigator,createBottomTabNavigator,StackActions } from 'react-navigation';
import {connect} from 'react-redux';
import {createReactNavigationReduxMiddleware, createReduxContainer} from 'react-navigation-redux-helpers';
export const rootCom = 'Init';    //设置根路由
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
  },
  My:{
    screen:My,
    navigationOptions:(props)=>{
      return{
        header:null,
        gesturesEnabled:true
      }
    }
  },
},{}) ;
export const RootNavigator=createSwitchNavigator({
  Init:Init,
  Main:Main
},
{
  navigationOptions:{
    header:null
  }
})
export const middleware = createReactNavigationReduxMiddleware(
    state => state.nav,
    'root'
);
const mapStateToProps = state => ({
    state: state.nav,    //v2
});
const AppWithNavigationState = createReduxContainer(RootNavigator, 'root');

export default connect(mapStateToProps)(AppWithNavigationState);