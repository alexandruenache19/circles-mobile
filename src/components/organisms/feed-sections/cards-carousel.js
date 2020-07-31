import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { View, RefreshControl } from 'react-native'

import { LargeEventCard, LargeLiveCard } from '_organisms'
import { Colors, Spacing } from '_styles'
import Carousel from 'react-native-snap-carousel';


class PopularStreams extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {

    }

    this.rowRenderer = this.rowRenderer.bind(this)
    this.onSnapToItem = this.onSnapToItem.bind(this)
  }

  componentDidMount() {

  }

  rowRenderer({item}) {
    const { type } = this.props
    if (type === 'live') {
      return (
        <LargeLiveCard
          item={item}
        />
      )
    } else if (type === ' event') {
      return (
        <LargeEventCard
          item={item}
        />
      )
    }

    return (
      <LargeEventCard
        item={item}
      />
    )
  }

  onSnapToItem() {

  }

  render () {
    const { index, routes } = this.state
    const { data } = this.props
    return (
      <Carousel
        ref={(c) => { this._carousel = c }}
        data={data}
        vertical={true}
        enableSnap
        sliderWidth={500}
        sliderHeight={500}
        itemWidth={500}
        itemHeight={500}
        renderItem={this.rowRenderer}
        onSnapToItem={this.onSnapToItem}
        style={{backgroundColor: Colors.MAIN_BG_COLOR}}
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
