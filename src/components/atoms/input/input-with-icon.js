import React from 'react'
import { TextInput, View } from 'react-native'
import { Icon } from '_atoms'
import { Colors } from '_styles'
const InputField = ({
  accessibilityLabel,
  accessibilityHint,
  iconType,
  iconName,
  iconColor,
  iconSize,
  iconStyle,
  placeholder,
  onFocus,
  onBlur,
  value,
  type,
  onChangeField
}) => (
  <View
    accessible
    accessibilityLabel={accessibilityLabel}
    accessibilityHint={accessibilityHint}
    style={{
      width: '100%',
      height: 40,
      paddingLeft: 10,
      paddingRight: 10,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      backgroundColor: Colors.MAIN_BG_COLOR,
      borderBottomColor: '#D6D9DB',
      borderBottomWidth: 0.4
    }}
  >
    <View style={iconStyle}>
      <Icon
        iconType={iconType}
        iconName={iconName}
        iconColor={iconColor}
        iconSize={iconSize}
      />
    </View>

    <TextInput
      placeholder={placeholder}
      placeholderTextColor={Colors.SECONDARY_CONTRAST_COLOR}
      style={{ width: '97%', color: Colors.SECONDARY_CONTRAST_COLOR, fontSize: 16 }}
      returnKeyType='done'
      selectionColor='#5566EE'
      clearButtonMode='while-editing'
      onFocus={onFocus}
      onBlur={onBlur}
      onChangeText={value => onChangeField(type.toLowerCase(), value)}
      value={value}
      underlineColorAndroid='transparent'
      autoCorrect={false}
      autoCapitalize='none'
      secureTextEntry={type === 'Password'}
    />
  </View>
)

export default InputField
