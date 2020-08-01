import { Platform } from 'react-native'

import {
  HEADER_BG_COLOR,
  MAIN_BG_COLOR,
  ANDROID_STATUS_BAR_COLOR
} from './colors'

export const HIT_SLOP = { top: 10, right: 10, bottom: 10, left: 10 }
export const HAPTIC_FEEDBACK_OPTIONS = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false
}

export const ONE_SIGNAL_KEY = 'c717796e-d555-49de-94c9-4d85fcd47626'
export const SEGMENT_WRITE_KEY = '4DvZYBPs2jxkeuWyRQYARXDMrEGWuzvC'

export const STANDARD_PAGE_OPTIONS = {
  layout: {
    orientation: ['portrait'],
    backgroundColor: MAIN_BG_COLOR,
    componentBackgroundColor: MAIN_BG_COLOR
  },
  statusBar: {
    visible: true,
    style: Platform.OS === 'android' ? 'light' : 'light',
    backgroundColor: ANDROID_STATUS_BAR_COLOR
  }
}
