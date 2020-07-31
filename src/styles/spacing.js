import { Dimensions } from 'react-native'
import { scaleSize } from './mixins'

export const SCALE_18 = scaleSize(18)
export const SCALE_16 = scaleSize(16)
export const SCALE_14 = scaleSize(14)
export const SCALE_12 = scaleSize(12)
export const SCALE_10 = scaleSize(10)
export const SCALE_8 = scaleSize(8)

export const DEVICE_WIDTH = Dimensions.get('window').width
export const DEVICE_HEIGHT = Dimensions.get('window').height
