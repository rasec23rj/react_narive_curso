import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'

class TextCounter extends Component {
  static defaultProps = {
    limite: '',
  }
  state = {
    texto: '',
  }
  handleChangle = (texto) => {
    if (texto.length <= this.props.limite) {
      this.setState({ texto: texto })
    }
  }
  render() {
    const { state, props } = this
    return (
      <View>
        <Text>Digite o valor </Text>
        <TextInput
          multiline={true}
          numberOfLines={5}
          value={state.texto}
          onChangeText={this.handleChangle}
          style={{ borderColor: 'gray', borderWidth: 1 }}
        />
        <Text>
          Total: {state.texto.length}/{props.limite}
        </Text>
      </View>
    )
  }
}

export default TextCounter
