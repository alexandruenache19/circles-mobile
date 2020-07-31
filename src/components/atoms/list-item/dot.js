import React from 'react'
import { Text } from 'react-native'
import { Typography } from '_styles'

const Dot = ({ style }) => (
  <Text style={{
    ...Typography.default.audioInfoTextDark,
    fontWeight: 'normal',
    fontSize: 13,
    ...style
  }}
  >
    {' • '}
  </Text>
)

export default Dot
