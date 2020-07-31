import React from 'react'
import { View } from 'react-native'
import { LoaderView } from '_atoms'
import { CommonStyles, Colors, Constants } from '_styles'

const FeedFootter = ({ feedIsComplete }) => {
  if (!feedIsComplete) {
    return (
      <View>
        <LoaderView
          style={{
            height: 200,
            width: Constants.DEVICE_WIDTH,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        />
        <View style={CommonStyles.footerSpace} />
      </View>
    )
  }

  return (
    <View style={CommonStyles.footerSpace} />
  )
}

export default FeedFootter
