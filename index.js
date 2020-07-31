/**
 * @format
 */

import Amplify from 'aws-amplify'
import config from './aws-exports'


import { Navigation } from 'react-native-navigation'
import { registerScreens } from './src/navigation/screen-registry'
import {Transitions} from '_navigation'
const { goToApp, goToOnboarding } = Transitions
Amplify.configure(config)
registerScreens()


Navigation.events().registerAppLaunchedListener(() => {
  // goToOnboarding()
  goToApp()
})
