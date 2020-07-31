import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import Touchable from 'react-native-platform-touchable'
import { Constants, Typography } from '_styles'

const ButtonWithText = ({
  accessibilityLabel,
  text,
  textStyle,
  style,
  onPress,
  numberOfLines,
  ellipsizeMode,
  disabled
}) => {
  return (
    <TouchableOpacity
      accessible
      accessibilityLabel={accessibilityLabel}
      hitSlop={Constants.HIT_SLOP}
      activeOpacity={0.8}
      disabled={disabled || false}
      // background={Constants.NORMAL_BUTTON_RIPPLE}
      style={style}
      onPress={onPress}
    >
      <Text
        numberOfLines={numberOfLines || 1}
        ellipsizeMode={ellipsizeMode || 'tail'}
        style={textStyle}
      >
        {text}
      </Text>
    </TouchableOpacity>
  )
}

export default ButtonWithText
