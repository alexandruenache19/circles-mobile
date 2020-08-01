import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Touchable from 'react-native-platform-touchable'
import { Icon } from '_atoms'
import { Constants, Typography, Colors } from '_styles'

const ButtonWithTextIcon = ({
  text,
  accessibilityHint,
  accessibilityLabel,
  onPress,
  iconType,
  iconName,
  iconColor,
  iconSize,
  style,
  containerStyle,
  textStyle,
  iconBeforeText = true
}) => (
  <TouchableOpacity
    accessible
    accessibilityHint={accessibilityHint}
    accessibilityLabel={accessibilityLabel}
    hitSlop={Constants.HIT_SLOP}
    activeOpacity={0.7}
    // background={Constants.NORMAL_BUTTON_RIPPLE}
    onPress={onPress}
    style={style}
  >
    {iconBeforeText
      ? <View style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', ...containerStyle }}>
        <Icon
          iconType={iconType}
          iconName={iconName}
          iconColor={iconColor}
          iconSize={iconSize}
        />
        <Text style={textStyle}>
          {text}
        </Text>
        </View>
      : <View style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', ...containerStyle }}>
        <Text style={textStyle}>
          {text}
        </Text>
        <Icon
          iconType={iconType}
          iconName={iconName}
          iconColor={iconColor}
          iconSize={iconSize}
        />
        </View>}

  </TouchableOpacity>
)

export default ButtonWithTextIcon
