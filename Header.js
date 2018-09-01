//@flow
import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

type HeaderProps = {}
type HeaderState = {}

class Header extends Component<HeaderProps, HeaderState> {

  state = {};

  componentWillMount() {
  }

  componentDidMount() {
  }

  render() {
    const {container} = styles;
    return (
      <View style={container}>
        <Text>HEADER</Text>
        <TextInput
          style={{
              paddingHorizontal: 16,
                  fontSize:24}}
          placeholder={"Escribe Tu Texto"}
          onChangeText={this.props.cambiarTexto}
          onSubmitEditing={this.props.agregar}
          value={this.props.texto}
        />
      </View>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    backgroundColor: '#00ff00'
  }
});

export default Header;