import { StyleSheet, Dimensions, Platform } from 'react-native'
import { Constants, Colors } from './index'

export const CommonStyles = StyleSheet.create({
  feedStyle: {
    flex: 1,
    minHeight: Constants.DEVICE_HEIGHT,
    backgroundColor: Colors.FEED_BG_COLOR
  },
  footerSpace: {
    backgroundColor: Colors.MAIN_BG_COLOR,
    height: 200,
    width: '100%'
  }
})
