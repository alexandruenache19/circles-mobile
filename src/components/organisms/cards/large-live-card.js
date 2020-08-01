// external modules
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text } from 'react-native'
import FastImage from 'react-native-fast-image'
import Video from 'react-native-video';
import Touchable from 'react-native-platform-touchable'

import {ButtonWithImage,  ButtonWithTextIcon, ButtonWithIcon, LabelHighlight, Label} from '_atoms'
import { Constants, Colors, Spacing } from '_styles'

import { Transitions } from '_navigation'
// const { openModal } = Transitions

class LargeEventCard extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      reserved: false
    }

    this.handleOnPress = this.handleOnPress.bind(this)
    this.handleReserveSpot = this.handleReserveSpot.bind(this)
  }

  handleOnPress () {

  }

  handleReserveSpot () {
    const {reserved} = this.state

    this.setState({reserved: !reserved})
  }

  render () {
    const { item } = this.props
    const { reserved } = this.state
    const price = item.price && item.price.type === 'free' ?
      'FREE' : item.price.amount + ' ' + item.price.currency

    return (
      <View style={{ flex: 1, width: Spacing.DEVICE_WIDTH}}>
        <View style={{ flex: 1, overflow: 'hidden', borderRadius: 10, backgroundColor: Colors.MAIN_CONTRAST_COLOR }}>
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
              { item.hasOwnProperty('previewVideoURL') ? (
                  <Video
                    muted
                    source={{uri: item.previewVideoURL}}
                    style={styles.reactangularImage}
                    resizeMode={'cover'}
                    ref={(ref) => { this.videoRef = ref }}
                   />
                  ) : (
                   <FastImage
                    style={styles.reactangularImage}
                    source={{ uri: item.imageURL }}
                    resizeMode={FastImage.resizeMode.cover}
                  />
                )
              }

              <View style={{
                display: 'flex',
                flex: 1,
                width: '100%',
                padding: 12,
                alignItems: 'center',
                justifyContent: 'flex-end',
                ...StyleSheet.absoluteFillObject
              }}>


                <View style={{flexDirection: 'row', width:'100%', justifyContent: 'space-between'}}>
                  {
                    item.hasOwnProperty('author') &&
                    item.author.hasOwnProperty('name') &&
                    item.author.hasOwnProperty('imageURL') && (
                      <ButtonWithImage
                        accessibilityLabel='Go to your Profile button'
                        accessibilityHint='Double tap to go to the profile screen'
                        style={{
                          height: 60,
                          width: '80%',
                          borderRadius: 10,
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor: '#FFF',
                        }}
                        containerStyle={{
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          padding:6
                        }}
                        textStyle={{marginLeft: 20, fontSize: 24}}
                        onPress={this.handleNavigateToProfile}
                        width={40}
                        height={40}
                        text={item.author.name}
                        imageURL={item.author.imageURL}
                        round
                      />
                    )
                  }
                  <ButtonWithIcon
                    iconType={'FontAwesome5'}
                    iconName={'share'}
                    iconColor={'#000'}
                    iconSize={22}
                    style={{
                      backgroundColor: "#FFF",
                      width: '18%',
                      height: 60,
                      borderRadius: 5,
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  />
                </View>



              </View>
            </View>
          </Touchable>
        </View>
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
    ...StyleSheet.absoluteFill,
    flex: 1,
    borderRadius: 10
  },

  rectangularCard: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  reactangularImage: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: '100%',
    width: '100%',
  },
  title: {
    letterSpacing: -0.3,
    fontWeight: 'bold',
    color: '#000',
    fontSize: 15,
    textAlign: 'left',
    lineHeight: 22
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LargeEventCard)
