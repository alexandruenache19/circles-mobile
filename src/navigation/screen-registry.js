import React from 'react'
import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
import { ReduxNetworkProvider } from 'react-native-offline'
import { store, persistor } from '../redux/store'
// import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
import { View } from 'react-native'
import { PersistGate } from 'redux-persist/integration/react'

import App from '../../App'
import Home from '../screens/Home'
import Streams from '../screens/Streams'
import Notifications from '../screens/Notifications'
import Profile from '../screens/Profile'
import Onboarding from '../screens/Onboarding'
import CreateEvent from '../screens/CreateEvent'
import { Colors } from '_styles'

const ReduxProvider = (Component) => {
  return (props) => (
    <Provider store={store}>
      <PersistGate
        // loading={(
        //   <View style={{ backgroundColor: Colors.MAIN_BG_COLOR, flex: 1, width: '100%' }} />
        // )}
        persistor={persistor}
      >
        <ReduxNetworkProvider>
          <Component {...props} />
        </ReduxNetworkProvider>
      </PersistGate>
    </Provider>
  )
}

export const registerScreens = () => {
  Navigation.registerComponent('AppContainer', () => ReduxProvider(App), () => App)

  // Main Screens
  Navigation.registerComponent('Home', () => ReduxProvider(Home), () => Home)
  Navigation.registerComponent('Streams', () => ReduxProvider(Streams), () => Streams)
  Navigation.registerComponent('Notifications', () => ReduxProvider(Notifications), () => Notifications)
  Navigation.registerComponent('Profile', () => ReduxProvider(Profile), () => Profile)
  Navigation.registerComponent('Onboarding', () => ReduxProvider(Onboarding), () => Onboarding)

  //
  Navigation.registerComponent('CreateEvent', () => ReduxProvider(CreateEvent), () => CreateEvent)
}
