
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { View, SafeAreaView, Text } from 'react-native'
import Swiper from 'react-native-swiper'
import { Colors, Spacing } from '_styles'
import { Icon, Label } from '_atoms'
import FastImage from 'react-native-fast-image'
import styles from './_style'

class Onboarding extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      index: 0
    }

    this.handleIndexChange = this.handleIndexChange.bind(this)
  }

  handleIndexChange (index) {
    this.setState({
      index: index
    })
  }

  render () {
    const { index } = this.state
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.MAIN_BG_COLOR, alignItems: 'center', justifyContent: 'center' }}>
        <Swiper
          onIndexChanged={this.handleIndexChange}
          showsButtons
          loop={false}
          buttonWrapperStyle={{ backgroundColor: 'transparent', flexDirection: 'row', position: 'absolute', bottom: 0, right: 0, flex: 1, paddingHorizontal: 10, paddingVertical: 10, justifyContent: 'space-between', alignItems: 'flex-end' }}
          prevButton={<View />}
          nextButton={index !== 3 ? (
            <View style={{ backgroundColor: '#F5DD7B', height: 50, width: 50, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
              <Icon
                iconType='Entypo'
                iconName='chevron-thin-right'
                iconColor='#153533'
                iconSize={26}
              />
            </View>
          ) : (
            <View style={{ backgroundColor: '#F5DD7B', height: 50, width: 120, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
              <Label
                text='GET STARTED'
                style={{}}
              />
            </View>
          )}
          paginationStyle={{ alignItems: 'flex-start', justifyContent: 'flex-start', paddingLeft: 14 }}
          dot={<View style={{ backgroundColor: '#545D5D', width: 6, height: 6, borderRadius: 4, marginLeft: 5, marginRight: 5, marginTop: 3, marginBottom: 3 }} />}
          activeDot={<View style={{ backgroundColor: '#F5DD7B', width: 14, height: 6, borderRadius: 3, marginLeft: 5, marginRight: 5, marginTop: 3, marginBottom: 3 }} />}
        >

          <View style={{ alignItems: 'center' }}>
            <FastImage
              style={{ width: 400, height: 500 }}
              source={require('../../../assets/061.png')}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
          <View style={styles.slide2}>
            <FastImage
              style={{ width: 400, height: 500 }}
              source={require('../../../assets/061.png')}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
          <View style={styles.slide3}>
            <FastImage
              style={{ width: 400, height: 500 }}
              source={require('../../../assets/061.png')}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
          <View style={styles.slide3}>
            <FastImage
              style={{ width: 400, height: 500 }}
              source={require('../../../assets/061.png')}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
        </Swiper>
      </SafeAreaView>
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
)(Onboarding)
