import React from 'react'
import { Text } from 'react-native'
import { Typography } from '_styles'

const SectionTitle = ({ text, color, style }) => (
  <Text style={{ ...Typography.default.sectionTitle, color: color || '#D36582', ...style }}>
    {text}
  </Text>
)

export default SectionTitle
