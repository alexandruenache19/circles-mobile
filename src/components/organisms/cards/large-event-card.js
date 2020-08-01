// external modules
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text } from 'react-native'
import FastImage from 'react-native-fast-image'
import Touchable from 'react-native-platform-touchable'

import { ButtonWithTextIcon, ButtonWithIcon, LabelHighlight} from '_atoms'
import { Constants, Colors } from '_styles'

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
    // if (!reserved) {
    //
    // }
    this.setState({reserved: !reserved})

  }

  render () {
    const { item } = this.props
    const { reserved } = this.state
    const price = item.price && item.price.type === 'free' ?
      'FREE' : item.price.amount + ' ' + item.price.currency

    return (
      <View style={{flex:1}}>
        <View style={{ flex:1, overflow: 'hidden', borderRadius: 10, backgroundColor: Colors.MAIN_CONTRAST_COLOR }}>
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
                  <FastImage
                   style={styles.reactangularImage}
                   source={{ uri: item.imageURL }}
                   resizeMode={FastImage.resizeMode.cover}
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
                alignItems: 'flex-start',
                justifyContent: 'space-between'
              }}>
                <View style={{width: '100%'}}>
                  <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text
                      style={styles.title}
                      ellipsizeMode='tail'
                      numberOfLines={3}
                    >
                      {item.date}
                    </Text>

                    <LabelHighlight
                      text={price}
                    />
                  </View>

                  <Text
                    style={styles.title}
                    ellipsizeMode='tail'
                    numberOfLines={3}
                  >
                    {item.title}
                  </Text>

                  <Text
                    style={styles.title}
                    ellipsizeMode='tail'
                    numberOfLines={3}
                  >
                    {item.description}
                  </Text>
                </View>

                <View style={{flexDirection: 'row', width:'100%', justifyContent:'space-between'}}>
                  <ButtonWithTextIcon
                    iconType={reserved ? 'FontAwesome' : 'Ionicons'}
                    iconName={reserved ? 'check' : 'md-notifications'}
                    iconColor={'#FFF'}
                    iconSize={22}
                    text={reserved ? 'Reserved' : 'Reserve spot'}
                    style={{
                      backgroundColor: Colors.MAIN_BG_COLOR,
                      width: 300,
                      borderRadius: 5,
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                    textStyle={{
                      paddingLeft: 10,
                      fontSize: 22,
                      color:'#FFF'
                    }}
                    onPress={this.handleReserveSpot}
                  />

                  <ButtonWithIcon
                    iconType={'FontAwesome5'}
                    iconName={'share'}
                    iconColor={'#FFF'}
                    iconSize={22}
                    style={{
                      backgroundColor: Colors.MAIN_BG_COLOR,
                      width: 70,
                      height: 50,
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
    flex:1,
    borderRadius: 10
  },

  rectangularCard: {
    borderRadius: 10,
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  reactangularImage: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: '50%',
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
