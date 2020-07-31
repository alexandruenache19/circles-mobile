import React, { PureComponent } from 'react'
import {
  KeyboardAvoidingView,
  StyleSheet,
  TextInput
} from 'react-native'
import { ButtonWithText } from '_atoms'
import { Colors, Constants, Spacing } from '_styles'

export default class InputWithButton extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      text: undefined
    }

    this.onChangeText = this.onChangeText.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  onChangeText (text) {
    this.setState({ text })
  }

  handleSubmit () {
    const { text } = this.state
    const { onPress } = this.props
    if (text) {
      this.setState({ text: undefined }, () => onPress(text))
    } else {
      alert('Please enter your comment first')
    }
  }

  render () {
    const { buttonText } = this.props

    return (
      <KeyboardAvoidingView
        behavior='padding'
        style={styles.container}
      >
        <TextInput
          placeholder='Add a comment...'
          placeholderTextColor={Colors.SECONDARY_CONTRAST_COLOR}
          returnKeyType='send'
          style={styles.input}
          value={this.state.text}
          onChangeText={this.onChangeText}
          underlineColorAndroid='transparent'
          autoCorrect={false}
        />

        <ButtonWithText
          style={styles.button}
          textStyle={!this.state.text ? { ...styles.text, ...styles.inactive } : styles.text}
          text={buttonText}
          onPress={this.handleSubmit}
        />
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Constants.isDarkMode ? Colors.DARK_FEED_BG : '#EBF0F4',
    borderRadius: 8,
    paddingLeft: 8,
    paddingRight: 8,
    height: 40
  },
  input: {
    flex: 1,
    color: Colors.MAIN_CONTRAST_COLOR,
    fontSize: 15
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  inactive: {
    color: Colors.THIRD_CONTRAST_COLOR
  },
  text: {
    color: Colors.MAIN_CONTRAST_COLOR,
    fontWeight: 'bold',
    fontFamily: 'Avenir',
    textAlign: 'center',
    fontSize: 15
  }
})
