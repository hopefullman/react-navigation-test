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
import NavigatorUtil from '../navigator/NavigatorUtil';
class Welcome extends Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    this.timer=setTimeout(()=>{NavigatorUtil.GoHome(this.props.navigation)},2000)
  }
  componentWillUnMount(){
    this.timer&&clearTimeout(this.timer)
  }
  render(){
    return (
    <View>
      <Text>Welcome</Text>
    </View>
  );
  }
   
}
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
 
});

export default Welcome;
