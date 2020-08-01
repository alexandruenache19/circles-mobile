// external modules
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text } from 'react-native'
import FastImage from 'react-native-fast-image'
import Touchable from 'react-native-platform-touchable'
import Video from 'react-native-video'
// constants
import { Constants } from '_styles'

class SmallLiveCard extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {

    }

    this.handleOnPress = this.handleOnPress.bind(this)
  }

  handleOnPress () {

  }

  render () {
    const { item } = this.props

    return (
      <View style={{ overflow: 'hidden', borderRadius: 10 }}>
        <Touchable
          foreground={Touchable.Ripple('rgba(255,255,255,0.2)', true)}
          onPress={this.handleOnPress}
          accessible
          accessibilityLabel={item.title}
          accessibilityHint='Double tap to view this live'
          style={styles.container}
          activeOpacity={0.8}
        >
          <View style={styles.rectangularCard}>
            <Video
              muted
              source={{ uri: item.videoURL }}
              style={styles.reactangularImage}
              resizeMode='cover'
              ref={(ref) => { this.videoRef = ref }}
            />

            <View style={[StyleSheet.absoluteFillObject, { padding: 12, justifyContent: 'flex-end' }]}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                <FastImage
                  style={styles.authorImage}
                  source={{ uri: item.imageURL }}
                  resizeMode={FastImage.resizeMode.cover}
                />
                <Text
                  style={styles.rectangularCardText}
                  ellipsizeMode='tail'
                  numberOfLines={3}
                >
                  {item.title}
                </Text>
              </View>
            </View>
          </View>
        </Touchable>
      </View>
    )
  }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = {
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    width: 150,
    height: 200
    // margin: 20
  },
  rectangularCardOverlay: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 10,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)'
  },
  rectangularCard: {
    borderRadius: 10,
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0,0,0,0.4)',
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.4,
    shadowRadius: 1,
    elevation: 2
  },
  reactangularImage: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 10,
    height: '100%',
    width: '100%'
  },
  rectangularCardText: {
    letterSpacing: -0.3,
    // fontFamily: 'SFProText-Regular',
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontSize: 15,
    textAlign: 'left',
    lineHeight: 22
  },
  authorImage: {
    width: 34,
    height: 34,
    borderRadius: 17
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SmallLiveCard)
