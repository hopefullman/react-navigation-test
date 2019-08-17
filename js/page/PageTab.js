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
import NavigatorUtil from '../navigator/NavigatorUtil'
class PageTab extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
    <ScrollView style={{flex:1}}>
     <Text onPress={()=>{NavigatorUtil.GoPage('Detail',{labeltext:this.props.labeltext})}}>{this.props.labeltext}</Text>
    </ScrollView>
  );
  }
   
}
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
 
});

export default PageTab;
