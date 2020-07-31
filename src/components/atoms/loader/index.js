import React from 'react'
import { View } from 'react-native'
import { Colors } from '_styles'
import Icon from '../icon'

const LoaderView = ({
  style,
  iconColor,
  iconSize
}) => (
  <View style={{ color: Colors.MAIN_BG_COLOR, ...style }}>
    <Icon
      iconType='MaterialIndicator'
      iconColor={iconColor || Colors.MAIN_CONTRAST_COLOR}
      iconSize={iconSize || 30}
    />
  </View>
)

export default LoaderView
