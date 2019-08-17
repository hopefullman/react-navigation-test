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
import PageOne from '../page/PageOne';
import PageTwo from '../page/PageTwo';
import PageThree from '../page/PageThree';
import {createBottomTabNavigator } from 'react-navigation';
class DynamicNavigator extends Component{
  constructor(props){
    super(props);
    this.defaultbottom={
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
    }
  }
  _DynamicNavigator(){
    const {PageOne,PageTwo,PageThree}=this.defaultbottom;
    const bottomtabs={PageOne,PageTwo,PageThree};
    return createBottomTabNavigator(
      bottomtabs
    ,{tabBarOptions: {
          activeTintColor:'#e91e63',
      }})
  }
  render(){
    const BottomTabs=this._DynamicNavigator();
    return <BottomTabs/>;
  }
}
export default DynamicNavigator;