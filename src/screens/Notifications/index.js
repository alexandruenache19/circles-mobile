// external modules
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { View, Text, BackHandler, FlatList, SafeAreaView } from 'react-native'
import { Navigation } from 'react-native-navigation'

import styles from './_style.js'
import { Spacing, Colors, Typography } from '_styles'
import { Icon } from '_atoms'
import { NotificationCard } from '_organisms'

class NotificationsScreen extends PureComponent {
  constructor (props) {
    super(props)
    this.index = 0
    this.state = {
      data: []
    }

    this.renderItem = this.renderItem.bind(this)
    Navigation.events().bindComponent(this)
  }

  async componentDidMount () {
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress', () => Navigation.dismissAllModals()
    )
  }

  componentWillUnmount () {
    if (this.backHandler) {
      this.backHandler.remove()
    }
  }

  navigationButtonPressed ({ buttonId }) {
    if (buttonId === 'backButton') {

    }
  }

  renderItem ({ item, index }) {
    if (item) {
      return (
        <NotificationCard
          item={item}
        />
      )
    }

    return null
  }

  render () {
    const { data } = this.state

    if (!data) {
      return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.MAIN_BG_COLOR, display: 'flex', alignItems: 'center' }}>
          <Text style={{ textAlign: 'center' }}>
            Notifications could not be fetched now.
          </Text>
          <Text style={{ textAlign: 'center' }}>
            Please try again later.
          </Text>
        </SafeAreaView>
      )
    }

    if (data && data.length === 0) {
      return (
        <SafeAreaView style={{ flex: 1, display: 'flex', alignItems: 'center', backgroundColor: Colors.MAIN_BG_COLOR }}>
          <View style={{ display: 'flex', height: 60, width: 60, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Icon
              iconType='MaterialIndicator'
              iconColor={Colors.MAIN_CONTRAST_COLOR}
              iconSize={23}
            />
          </View>
          <Text style={{ color: '#FFF' }}>
            Fetching the latest notifications
          </Text>
        </SafeAreaView>
      )
    }

    return (
      <View style={styles.container}>
        <FlatList
          style={{ flex: 1, minHeigh: Spacing.DEVICE_HEIGHT, backgroundColor: Colors.MAIN_BG_COLOR }}
          maxToRenderPerBatch={7}
          initialNumToRender={7}
          contentContainerStyle={{ paddingTop: 10 }}
          showsVerticalScrollIndicator
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => {
            return item && item.id ? item.id : 'sa'
          }}
        />
      </View>

    )
  }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = {

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationsScreen)
