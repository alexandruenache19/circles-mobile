import React from 'react'
import { Text } from 'react-native'
import Touchable from 'react-native-platform-touchable'
import { Constants } from '_styles'
import { Icon } from '_atoms'

const ButtonWithIcon = ({
  accessibilityLabel,
  iconType,
  iconName,
  iconColor,
  iconSize,
  style,
  onPress,
  onLongPress
}) => {
  return (
    <Touchable
      accessible
      accessibilityLabel={accessibilityLabel}
      hitSlop={Constants.HIT_SLOP}
      activeOpacity={0.7}
      style={style}
      foreground={Touchable.Ripple('rgba(255,255,255,0.2)', true)}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Icon
        iconType={iconType}
        iconName={iconName}
        iconColor={iconColor}
        iconSize={iconSize}
      />
    </Touchable>
  )
}

export default ButtonWithIcon
