import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { View, RefreshControl, Platform } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { Navigation } from 'react-native-navigation'

import { LargeEventCard, LargeLiveCard } from '_organisms'
import { Colors, Spacing } from '_styles'

class PopularStreams extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {

    }

    this.rowRenderer = this.rowRenderer.bind(this)
    this.onSnapToItem = this.onSnapToItem.bind(this)
  }

  async componentDidMount () {

  }

  rowRenderer ({ item }) {
    const { type } = this.props
    if (type === 'live') {
      return (
        <View style={{ flex: 1 }}>
          <LargeLiveCard
            item={item}
          />
        </View>

      )
    } else if (type === ' event') {
      return (
        <View style={{ flex: 1 }}>
          <LargeEventCard
            item={item}
          />
        </View>
      )
    }

    return (
      <LargeEventCard
        item={item}
      />
    )
  }

  onSnapToItem () {

  }

  render () {
    const { index, routes } = this.state

    const { data, itemHeight } = this.props
    return (
      <Carousel
        ref={(c) => { this._carousel = c }}
        data={data}
        vertical
        enableSnap
        sliderWidth={Spacing.DEVICE_WIDTH}
        itemWidth={Spacing.DEVICE_WIDTH}
        itemHeight={itemHeight}
        sliderHeight={itemHeight}
        renderItem={this.rowRenderer}
        onSnapToItem={this.onSnapToItem}
        style={{ backgroundColor: Colors.MAIN_BG_COLOR }}
        refreshControl={
          <RefreshControl
            progressBackgroundColor={Colors.FLOATING_BG}
            colors={[Colors.MAIN_CONTRAST_COLOR]}
            tintColor={Colors.MAIN_CONTRAST_COLOR}
            refreshing={this.state.refreshing}
            onRefresh={this.handleRefresh}
          />
        }
      />
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
)(PopularStreams)
