import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { View, RefreshControl } from 'react-native'

import { LargeEventCard } from '_organisms'
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
