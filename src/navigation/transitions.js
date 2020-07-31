import React from 'react'
import { Platform } from 'react-native'
import { Navigation } from 'react-native-navigation'

import auth from '@react-native-firebase/auth'

import IconOcticons from 'react-native-vector-icons/Octicons'
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons'
import IconEntypo from 'react-native-vector-icons/Entypo'
import IconFeather from 'react-native-vector-icons/Feather'

import { FetchingActions } from '_actions'

import { Constants, Colors } from '_styles'
import { store } from '../redux/store'
const { fetchUser } = FetchingActions

const selectedColor = Colors.isDarkMode ? '#FFFFFF' : '#3E4BAE'
const unSelectedColor = Colors.isDarkMode ? Colors.LOW_EMPHASIS_WHITE : '#95979A'

Navigation.events().registerBottomTabPressedListener(({ tabIndex, componentId }) => {
  if (tabIndex === 2) {
    openModal('CreateEvent')
  }
})

export const goToOnboarding = (user) => Navigation.setRoot({
  root: {
    component: {
      id: 'onboarding',
      name: 'Onboarding',
      passProps: {
        user: user
      },
      options: {
        layout: {
          orientation: ['portrait']
        }
      }
    }
  }
})

export const goToApp = async () => {
  // const user = auth().currentUser
  //
  // if (user) {
  //   await store.dispatch(fetchUser(user))
  // }
  return Promise.all([
      IconMaterialCommunity.getImageSource('home', 26, unSelectedColor),
      IconMaterialCommunity.getImageSource('home', 26, selectedColor),
      IconFeather.getImageSource('tv', 21, unSelectedColor),
      IconFeather.getImageSource('tv', 21, selectedColor),
      IconEntypo.getImageSource('fingerprint', 24, unSelectedColor),
      IconEntypo.getImageSource('fingerprint', 24, selectedColor),
      IconEntypo.getImageSource('notification', 24, unSelectedColor),
      IconEntypo.getImageSource('notification', 24, selectedColor),
      IconFeather.getImageSource('video', 26, unSelectedColor),
      IconFeather.getImageSource('video', 26, selectedColor)
    ]).then(([
      homeIcon,
      homeIconSelected,
      streamsIcon,
      streamsIconSelected,
      userIcon,
      userIconSelected,
      notificationIcon,
      notificationIconSelected,
      videoIcon,
      videoIconSelected
    ]) => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: 'BottomTabsId',

        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    id: 'home',
                    name: 'Home'
                  }
                }
              ],
              options: {
                topBar: {
                  visible: false
                },
                bottomTab: {
                  animate: false,
                  text: 'Home',
                  fontSize: Platform.OS === 'ios' ? 11 : 9,
                  selectedFontSize: Platform.OS === 'ios' ? 11 : 9,
                  fontFamily: Platform.OS === 'ios' ? 'SFProText-Medium' : 'SF-Pro-Text-Medium',
                  textColor: unSelectedColor,
                  selectedTextColor: selectedColor,
                  icon: homeIcon,
                  selectedIcon: homeIconSelected,
                  titleDisplayMode: 'alwaysShow'
                },
                bottomTabs:{
                  backgroundColor: Colors.MAIN_BG_COLOR
                },
                layout: {
                  orientation: ['portrait']
                }
              }
            }
          },
          {
            stack: {
              children: [
                {
                  component: {
                    id: 'streams',
                    name: 'Streams'
                  }
                }
              ],
              options: {
                topBar: {
                  visible: false
                },
                bottomTab: {
                  animate: false,
                  text: 'Streams',
                  fontSize: Platform.OS === 'ios' ? 11 : 9,
                  selectedFontSize: Platform.OS === 'ios' ? 11 : 9,
                  fontFamily: Platform.OS === 'ios' ? 'SFProText-Medium' : 'SF-Pro-Text-Medium',
                  textColor: unSelectedColor,
                  selectedTextColor: selectedColor,
                  icon: streamsIcon,
                  selectedIcon: streamsIconSelected,
                  titleDisplayMode: 'alwaysShow'
                },
                bottomTabs:{
                  backgroundColor: Colors.MAIN_BG_COLOR
                },
                layout: {
                  orientation: ['portrait']
                }
              }
            }
          },
          {
            stack: {
              children: [
                {
                  component: {
                    id: 'createEvent',
                    name: 'CreateEvent'
                  }
                }
              ],
              options: {
                topBar: {
                  visible: false
                },
                bottomTab: {
                  animate: false,
                  textColor: unSelectedColor,
                  selectedTextColor: selectedColor,
                  icon: videoIcon,
                  selectedIcon: videoIconSelected,
                  selectTabOnPress: false,
                  iconInsets: { top: 6, left: 0, bottom: -6, right: 0 }
                },
                bottomTabs:{
                  backgroundColor: Colors.MAIN_BG_COLOR
                },
                layout: {
                  orientation: ['portrait']
                }
              }
            }
          },
          {
            stack: {
              children: [
                {
                  component: {
                    id: 'notifications',
                    name: 'Notifications'
                  }
                }
              ],
              options: {
                topBar: {
                  visible: false
                },
                bottomTab: {
                  animate: false,
                  text: 'Notifications',
                  fontSize: Platform.OS === 'ios' ? 11 : 9,
                  selectedFontSize: Platform.OS === 'ios' ? 11 : 9,
                  fontFamily: Platform.OS === 'ios' ? 'SFProText-Medium' : 'SF-Pro-Text-Medium',
                  textColor: unSelectedColor,
                  selectedTextColor: selectedColor,
                  icon: notificationIcon,
                  selectedIcon: notificationIconSelected,
                  titleDisplayMode: 'alwaysShow'
                },
                bottomTabs:{
                  backgroundColor: Colors.MAIN_BG_COLOR
                },
                layout: {
                  orientation: ['portrait']
                }
              }
            }
          },
          {
            stack: {
              children: [
                {
                  component: {
                    id: 'profile',
                    name: 'Profile'
                  }
                }
              ],
              options: {
                topBar: {
                  visible: false
                },
                bottomTab: {
                  animate: false,
                  text: 'Profile',
                  fontSize: Platform.OS === 'ios' ? 11 : 9,
                  selectedFontSize: Platform.OS === 'ios' ? 11 : 9,
                  fontFamily: Platform.OS === 'ios' ? 'SFProText-Medium' : 'SF-Pro-Text-Medium',
                  textColor: unSelectedColor,
                  selectedTextColor: selectedColor,
                  icon: userIcon,
                  selectedIcon: userIconSelected,
                  titleDisplayMode: 'alwaysShow'
                },
                bottomTabs:{
                  backgroundColor: Colors.MAIN_BG_COLOR
                },
                layout: {
                  orientation: ['portrait']
                }
              }
            }
          }
        ]
      }
    }
  })
})
}

export const openModal = (screenName, passProps, modalHeaderTitle) => {
  requestAnimationFrame(() => {
    if (Platform.OS === 'android') {
      Navigation.showOverlay({
        component: {
          name: screenName,
          id: screenName,
          passProps: passProps,
          options: {
            animations: {
              dismissModal: {
                enabled: Platform.OS === 'ios'
              },
              showModal: {
                enabled: Platform.OS === 'ios'
              },
              push: {
                enabled: Platform.OS === 'ios'
              },
              pop: {
                enabled: Platform.OS === 'ios'
              }
            },
            statusBar: {
              visible: true,
              style: Platform.OS === 'android' ? 'light' : Constants.isDarkMode ? 'light' : 'dark',
              backgroundColor: Colors.MAIN_BG_COLOR
            },
            layout: {
              backgroundColor: Colors.MAIN_BG_COLOR,
              componentBackgroundColor: Colors.MAIN_BG_COLOR
            }
          }
        }
      })
    } else {
      Navigation.showModal({
        component: {
          name: screenName,
          passProps: passProps,
          options: {
            animations: {
              dismissModal: {
                enabled: Platform.OS === 'ios'
              },
              showModal: {
                enabled: Platform.OS === 'ios'
              },
              push: {
                enabled: Platform.OS === 'ios'
              },
              pop: {
                enabled: Platform.OS === 'ios'
              }
            },
            statusBar: {
              visible: true,
              style: Platform.OS === 'android' ? 'light' : Constants.isDarkMode ? 'light' : 'dark',
              backgroundColor: Colors.MAIN_BG_COLOR
            },
            layout: {
              backgroundColor: Colors.MAIN_BG_COLOR,
              componentBackgroundColor: Colors.MAIN_BG_COLOR
            }
          }
        }
      })
    }
  })
}
