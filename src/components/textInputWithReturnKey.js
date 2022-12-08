// react native textinput with a function that is called when the user presses the return key on the keyboard
import React, { Component } from 'react';
import { TextInput } from 'react-native';

class TextInputWithReturnKey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInputValue: ''
    };
  }

  _onSubmitHandler = text => {
    // Do something with the text here
    console.log("Text input function when return key is pressed")
    this.setState({ textInputValue: '' });
  };

  render() {
    return (
      <TextInput
        value={this.state.textInputValue}
        onChangeText={text => this.setState({ textInputValue: text })}
        onSubmitEditing={() => this._onSubmitHandler(this.state.textInputValue)}
      />
    );
  }
}

export default TextInputWithReturnKey;