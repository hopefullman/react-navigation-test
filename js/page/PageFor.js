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
class PageFor extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
    <View>
      <Text>PageFor</Text>
    </View>
  );
  }
   
}
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
 
});

export default PageFor;
