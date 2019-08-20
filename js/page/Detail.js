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
  BackHandler,
  TextInput,
  Modal,
  AsyncStorage,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import NavigatorBar from '../navigator/NavigatorBar';
import Toast, {DURATION} from 'react-native-easy-toast';
class Detail extends Component{
  constructor(props){
    super(props);
    this.state={
      showHide:false
    }
  }
  componentDidMount() {
    AsyncStorage.getItem('text',function(err,res){
      if (err) {
        alert('没有创建');
      }else{
        alert(res)
      }
    })
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPressDetail);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPressDetail);
  }
  handleBackPressDetail = () => {
    // this.props.navigation.goBack();
    if (this.text) {
      this.setState({showHide:true})
      return true;
    }else{
      this.props.navigation.goBack();
      return true;
    }
  }
  baocun(){
    let that=this;
    AsyncStorage.setItem('text',this.text,function(err){
      if (err) {
        alert('失败');
      }else{
        // that.props.navigation.goBack();
      }
    })
  }
  quxiao(){
    this.setState({showHide:false})
    this.refs.toast.show('网络加载中...');
    this.props.navigation.goBack();
  }
  render(){
    const {navigation}=this.props;
    const {state}=navigation;
    const {params}=state;
    let statusBar={
      hidden:false,
      barStyle:'light-content'
    }
    let leftButton=(<View><Text onPress={()=>{alert('返回')}}>123</Text></View>)
    return (
      <Fragment>
    
      <NavigatorBar style={{backgroundColor:'red'}} hide={false} statusBar={statusBar} title={params.DetailPageTitle} leftButton={leftButton}/>
      <ScrollView
        style={{flex:1}}>
      <Text>Detail</Text>
      <Text>{params.labeltext}</Text>
      
      
      <KeyboardAvoidingView style={{marginTop:300}} behavior='padding' keyboardVerticalOffset={5}>
      <TextInput style={{height:100,width:300,borderWidth:1,borderColor:'#666',textAlign:'left',textAlignVertical:'top'}} multiline={true} onChangeText={ text => this.text=text}/>
      </KeyboardAvoidingView>
      <Text>Detail</Text>
      <Text>{params.labeltext}</Text>
      <Modal
        
        animationType='fade'
        transparent={true}
        visible={this.state.showHide}
        onRequestClose={()=>{console.log('Modal has been closed')}}
      >
      <View style={{width:width,height:height,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
      <View style={{backgroundColor:'rgba(0,0,0,0.5)'}}>
        <View>
          <Text style={{fontSize:16,color:"#000",paddingTop:15,paddingBottom:15,paddingLeft:100,paddingRight:100,textAlign:'center'}}>内容正在编辑，是否保存后退出</Text>
        </View>
        <View>
          <Text style={{fontSize:16,color:"#000",paddingTop:15,paddingBottom:15,paddingLeft:15,paddingRight:15,textAlign:'center'}} onPress={()=>{this.quxiao()}}>取消</Text>
          <Text style={{fontSize:16,color:"#000",paddingTop:15,paddingBottom:15,paddingLeft:15,paddingRight:15,textAlign:'center'}} onPress={()=>{this.baocun()}}>保存</Text>
        </View>
      </View>
      </View>
      </Modal>
      <Toast ref="toast"
                    style={{backgroundColor:'#000'}}
                    position='top'
                    positionValue={400}
                    fadeInDuration={750}
                    fadeOutDuration={3000}
                    opacity={0.8}
                    textStyle={{color:'red'}}/>
    </ScrollView>
    <Button title='go my' onPress={()=>{this.props.navigation.navigate('My')}}/>
    </Fragment>
  );
  }
   
}
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
 
});

export default Detail;
