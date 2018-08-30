import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Header from "./Header";
import Body from "./Body";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  state = {
    tareas: [],
    texto: '',
  };
  /**
   *    ****** Funcion establecer Texto *******
   * se creo una funcion para imprimir un valor de el padre en el hijo, la funcion recibe un
   * valor y lo imprime, esta funcion es ejecutada en el hijo, y es mandada por props, al hijo.
   * */
  establecerTexto = (value) => {
    console.log(value);
    this.setState({texto: value});
  };

  /***
   *
   * --------------------Funcion Agregar Tarea-----------------
   *
   * para agregar los textos a un arreglo, utilizando la funcion tareas, la funcion es ejecutada
   * desde el hijo se manda por props al hijo desde el padre...
   */

  agregarTarea = () => {
    this.setState({
      tareas: [...this.state.tareas, this.state.texto],
      texto: ''
    });
    //console.log(this.state.tareas.length)

  };

  render() {
    return (
      <View style={styles.container}>

        <Header
          cambiarTexto={this.establecerTexto}
          agregar={this.agregarTarea}
          texto={this.state.texto}
        />
        <Text>{this.state.texto}</Text>
        <Body tareas={this.state.tareas}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});
