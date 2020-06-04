import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TextCounter from './TextCounter'
import TodoList from './components/TodoList'
import Constants from 'expo-constants'
export default class App extends Component {
  state = {
    lista: [
      { id: '1', text: 'abc' },
      { id: '2', text: 'def' },
    ],
  }

  render() {
    const { state } = this
    return (
      <View style={styles.container}>
        <TodoList lista={state.lista} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 15,
    paddingLeft: 15,
    paddingRight: 15,
  },
})
