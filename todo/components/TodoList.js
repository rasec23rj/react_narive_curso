import React, { Component } from 'react'
import { View, Text, FlatList, Button } from 'react-native'

export default class TodoList extends Component {
  static defaultProps = {
    lista: [],
    onRemove: () => {},
  }
  handleRow = ({ item, index }) => {
    return (
      <View style={{ flexDirection: 'row', margin: 5 }}>
        <Text style={{ flex: 1 }}>
          {this.formartListNumber(index)} - {item.text}
        </Text>
        <Button
          style={{ width: 30 }}
          title="x"
          color="#731919"
          onPress={() => this.props.onRemove(item)}
        />
      </View>
    )
  }
  formartListNumber(number) {
    const digits = 2
    return ('0'.repeat(digits) + (number + 1)).slice(-digits)
  }
  render() {
    const { props } = this
    const keyExtractor = (item) => item.id
    return (
      <View>
        <FlatList
          data={props.lista}
          keyExtractor={keyExtractor}
          renderItem={this.handleRow}
        />
      </View>
    )
  }
}
