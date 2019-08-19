/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment,Component} from 'react';
import {
  Platform,
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  KeyboardAvoidingView,
  BackHandler,
  TextInput,
  Modal,
  AsyncStorage
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import NavigatorBar from '../navigator/NavigatorBar';
import Toast, {DURATION} from 'react-native-easy-toast';
class My extends Component{
  constructor(props){
    super(props);
    this.state={
      
    }
  }
  render(){
    const {navigation}=this.props;
    const {state}=navigation;
    const {params}=state;    
    return (
      <ParallaxScrollView
        backgroundColor="#333"
        contentBackgroundColor="pink"
        parallaxHeaderHeight={300}
        stickyHeaderHeight={ 70 }
        backgroundSpeed={10}
        outputScaleValue={10}
         renderStickyHeader={() => (
              <View key="sticky-header" style={{alignItems:'center',justifyContent:'center',height:70}}>
                <Text style={{color:'#fff'}}>renderStickyHeader</Text>
              </View>
            )}
         renderFixedHeader={() => (
              <View key="sticky-header" style={{position: 'absolute',width:width,flexDirection:'row',alignItems:'center',justifyContent:'space-between',height:70}}>
                <Text style={{color:'#fff'}} onPress={()=>{this.props.navigation.goBack()}}>left</Text>
                <Text style={{color:'#fff'}}>right</Text>
              </View>
            )}
        renderBackground={() => (
              <View key="background">
                <Image source={require('../img/bgf.jpg')} style={{width:width,height:300}}/>
              </View>
            )}
        renderForeground={() => (
         <View style={{height: 300, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Hello World!</Text>
            <Image source={require('../img/bg.jpg')} style={{width:60,height:60,borderRadius:30}}/>
          </View>
        )}>
        <ScrollView style={{paddingTop:Platform.OS=== 'ios'?0:20}}>
          <Text style={{color:"white"}}>zhelishi1content</Text>
        </ScrollView>
      </ParallaxScrollView>
  );
  }
   
}
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
 
});

export default My;
