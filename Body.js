//@flow
import React, {Component} from 'react';
import {View, Text, StyleSheet,FlatList} from 'react-native';
import Tarea from './Tarea';

type BodyProps = {}
type BodyState = {}

class Body extends Component<BodyProps, BodyState> {

  state = {};

  componentWillMount() {
  }

  componentDidMount() {
  }

  render() {
    const {container} = styles;
    return (
      <View style={container}>
<Text>perrus</Text>
        <FlatList data={this.props.tareas}
        renderItem={ ({item}) =>  <Text>{<Tarea item={item}/>} </Text> }
        />
      </View>
    );
  }
};
const styles = StyleSheet.create({
  container:{
    flex:8,
    backgroundColor:'#98fb98'
  }
});


export default Body;