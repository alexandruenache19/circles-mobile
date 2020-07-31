import { StyleSheet } from 'react-native'
import { Colors, Constants } from '_styles'
export default StyleSheet.create({
  notificationOverlay: {
    backgroundColor: Colors.IMAGE_PLACEHOLDER_COLOR,
    height: 'auto',
    padding: 20,
    width: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: 6,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 3
  },
  overlayView: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  overlayText: {
    marginLeft: 5,
    textAlign: 'center',
    color: Colors.MAIN_CONTRAST_COLOR
  }
})
