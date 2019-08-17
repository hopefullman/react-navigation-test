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
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import PageTab from './PageTab';
import {createMaterialTopTabNavigator } from 'react-navigation';
import NavigatorUtil from '../navigator/NavigatorUtil';
class PageOne extends Component{
  constructor(props){
    super(props)
    this.tops=['java','php','css','javascript','node','python']
  }
  createMaterialTopTab(){
    const Tops={};
    this.tops.map((item,index)=>{
        Tops[`${item}`]={
          screen:(props)=><PageTab labeltext={item}/>,
          navigationOptions:{
            title:item
          }
        }
    })
    return Tops;
  }
  render(){
    const TopsBar=createMaterialTopTabNavigator(this.createMaterialTopTab(),{tabBarOptions:{
        tabStyle:{width:150},
        indicatorStyle:{backgroundColor:'#fee',height:2},
        scrollEnabled :true,
        upperCaseLabel :false

      }})
    return (
      <TopsBar/>
  );
  }
   
}
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
 
});

export default PageOne;
