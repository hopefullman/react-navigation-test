/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment,Component} from 'react';
import {
  FlatList,
  ActivityIndicator,
  RefreshControl,
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
import {connect} from 'react-redux';
import NavigatorUtil from '../navigator/NavigatorUtil';
class PageTab extends Component{
  constructor(props){
    super(props);
    this.state={
      list:[],
      showtext:'',
      isRefresh:false
    }
  }
  componentDidMount(){
    const {labeltext}=this.props;
    let url=`https://api.github.com/search/repositories?q=${labeltext}&sort=stars`
    fetch(url)
    .then(response=>{
      if (response.ok) {
          return response.json();
      }else{
          throw new Error('请求失败')
      }
    })
    .then(responsejson=>{
      this.setState({list:responsejson.items},()=>{this.props.getDataAction(this.props.labeltext,this.state.list)});

    })
    .catch((err)=>{
      this.setState({
        showtext:err.toString()
      })
    })
  }
  ListEmptyComponent(){
    return (
      <View style={{flexDirection:'column',justifyContent:'flex-start',alignItems:'center'}}>
      <ActivityIndicator color='black'/>
      <Text style={{color:'black'}}>正在加载更多</Text>
      </View>
    )
  }
   _onRefresh_(labeltext){
      alert('触发刷新')
   }
   onEndReached(){
    alert('触发刷新2');
   }
  render(){
    return (
    <View style={{height: '100%'}}>
     <Text onPress={()=>{NavigatorUtil.GoPage('Detail',{labeltext:this.props.labeltext})}}>{this.props.labeltext}</Text>
     <FlatList
          extraData={this.state}
          data={this.props.list[`${this.props.labeltext}`]}
          keyExtractor={(item) => item.id.toString()}
          ListEmptyComponent={this.ListEmptyComponent()}
          refreshing={this.state.isRefresh}
          onRefresh={() => this._onRefresh_(this.props.labeltext) }
          onEndReached={() => {this.onEndReached(this.props.labeltext)}}
          onEndReachedThreshold={0.4}
          renderItem={({ item }) => <View style={{height:50}}><Text onPress={ ()=>{ NavigatorUtil.GoPage('Detail',{DetailPageTitle:`${item.id}`}) }}>{item.id}</Text></View>}/>
    </View>
  );
  }
   
}
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
 
});
const mapStateToProps=(state)=>{
  return {
    list:state.pagetab
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    getDataAction(labeltext,list){
      alert('zx');
      const action={
        type:'getdataAction',
        name:labeltext,
        list:list
      }
      dispatch(action);
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(PageTab);
