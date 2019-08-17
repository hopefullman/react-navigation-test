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
    this.tops={
      java:{
        screen:(props)=><PageTab labeltext='java'/>,
        navigationOptions:{
            title:'java'
          }
      },
      php:{
        screen:(props)=><PageTab labeltext='php'/>,
        navigationOptions:{
            title:'php'
          }
      },
      css:{
        screen:(props)=><PageTab labeltext='css'/>,
        navigationOptions:{
            title:'css'
          }
      },
      python:{
        screen:(props)=><PageTab labeltext='python'/>,
        navigationOptions:{
            title:'python'
          }
      },
      node:{
        screen:(props)=><PageTab labeltext='node'/>,
        navigationOptions:{
            title:'node'
          }
      },
      javascript:{
        screen:(props)=><PageTab labeltext='javascript'/>,
        navigationOptions:{
            title:'javascript'
          }
      },
    }
  }
  
  createMaterialTopTab(){
    const {javascript,node,python,php,css,java}=this.tops;
    const Tops={java,javascript,python,php};
    return createMaterialTopTabNavigator(Tops,{tabBarOptions:{
        tabStyle:{width:150},
        indicatorStyle:{backgroundColor:'#fee',height:1},
        scrollEnabled :true,
        upperCaseLabel :false

      }})
  }
  render(){
    const TopsBar=this.createMaterialTopTab()
    return (
      <TopsBar/>
  );
  }
   
}
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
 
});

export default PageOne;
