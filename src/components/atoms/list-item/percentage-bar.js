import React from 'react'
import { View } from 'react-native'
import { Colors } from '_styles'

const PercentageBar = ({ percentageListened }) => (
  <View>
    <View style={{
      position: 'absolute',
      bottom: 0,
      width: '100%',
      backgroundColor: 'rgba(255,255,255,0.5)',
      height: 3
    }}
    />
    <View style={{
      position: 'absolute',
      bottom: 0,
      width: percentageListened < 10 ? '10%' : (percentageListened).toString() + '%',
      backgroundColor: Colors.PRIMARY_BLUE,
      height: 3
    }}
    />
  </View>
)

export default PercentageBar
