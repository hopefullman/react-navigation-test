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
export default class NavigatorUtil{
  static GoHome(navigation){
    navigation.navigate('Main');
  }
  static GoBack(navigation){
    navigation.goBack();
  }
  static GoPage(page,params){
    const navigation =NavigatorUtil.navigation;
    navigation.navigate(page,{...params});
  }
}