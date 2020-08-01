import React from 'react'
import { Text, View } from 'react-native'
import Touchable from 'react-native-platform-touchable'
import { Constants, Colors } from '_styles'

import FastImage from 'react-native-fast-image'

const ButtonWithImage = ({
  accessibilityLabel,
  accessibilityHint,
  imageURL,
  height,
  width,
  round,
  style,
  onPress,
  text,
  textStyle,
  containerStyle,
  hideImageBorder
}) => (
  <Touchable
    accessible
    accessibilityLabel={accessibilityLabel}
    accessibilityHint={accessibilityHint}
    hitSlop={Constants.HIT_SLOP}
    activeOpacity={0.7}
    foreground={Constants.NORMAL_BUTTON_RIPPLE}
    onPress={onPress}
    style={style}
  >
    <View style={{ flexDirection: 'row', ...containerStyle }}>
      {imageURL ? (
        <FastImage
          style={{
            height: height,
            width: width,
            borderRadius: round ? height / 2 : height,
            borderWidth: hideImageBorder || Constants.isDarkMode ? 0 : 0.4,
            borderColor: '#D6D9DB',
            backgroundColor: Colors.IMAGE_PLACEHOLDER_COLOR
          }}
          source={{ uri: imageURL }}
        />
      ) : null}

      <Text style={textStyle}>
        {text}
      </Text>
    </View>

  </Touchable>
)

export default ButtonWithImage
