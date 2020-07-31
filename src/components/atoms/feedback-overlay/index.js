// external modules
import React from 'react'
import { View, Text } from 'react-native'
import { Overlay } from 'react-native-elements'
import IconMaterial from 'react-native-vector-icons/MaterialIcons'
import styles from './_style.Overlays'
import { Colors } from '_styles'

const ActionFeedbackOverlay = ({ visible, message }) => {
  return (
    <Overlay
      fullScreen={false}
      overlayStyle={styles.notificationOverlay}
      isVisible={visible}
    >
      <View style={styles.overlayView}>
        <IconMaterial name='check' color={Colors.MAIN_CONTRAST_COLOR} size={19} />
        <Text style={styles.overlayText}>
          {message}
        </Text>
      </View>
    </Overlay>
  )
}

export default ActionFeedbackOverlay
