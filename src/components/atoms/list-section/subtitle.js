import React from 'react'
import { Text } from 'react-native'
import { Typography } from '_styles'

const SectionSubtitle = ({ text, color }) => (
  <Text style={{ ...Typography.default.subTitle, color: color || '#9D9DA0' }}>
    {text}
  </Text>
)

export default SectionSubtitle
