
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { View, SafeAreaView, Text, TextInput } from 'react-native'
import Swiper from 'react-native-swiper'
import FastImage from 'react-native-fast-image'
import Touchable from 'react-native-platform-touchable'

import { Label, LabelWithIcon, ButtonWithText, ButtonWithTextIcon, Icon} from '_atoms'
import { Colors, Spacing, Constants } from '_styles'
import Carousel from 'react-native-snap-carousel';
import DropDownPicker from 'react-native-dropdown-picker';

import styles from './_style'

import GoLiveForm from './components/GoLiveForm'
import CreateEventForm from './components/CreateEventForm'

class CreateEvent extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      goLive: false,
      createEvent: false
    }

    this.handleGoLive = this.handleGoLive.bind(this)
    this.handleCreateEvent = this.handleCreateEvent.bind(this)
  }

  handleGoLive () {
    this.setState({goLive: true})
  }

  handleCreateEvent () {
    this.setState({createEvent: true})
  }

  render () {
    const { data, goLive, createEvent} = this.state
    if (goLive) {
      return (<GoLiveForm/>)
    } else if (createEvent) {
      return (<CreateEventForm/>)

    }

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.MAIN_BG_COLOR, alignItems: 'center', justifyContent: 'space-between'}}>
        <Touchable
          accessible
          accessibilityLabel={'Go Live'}
          hitSlop={Constants.HIT_SLOP}
          activeOpacity={0.7}
          style={{flex: 1, justifyContent: 'center', alignItems:'center', width:'100%'}}
          foreground={Touchable.Ripple('rgba(255,255,255,0.2)', true)}
          onPress={this.handleGoLive}
        >
          <LabelWithIcon
            iconType={'Feather'}
            iconName={'video'}
            iconColor={'#FFF'}
            iconSize={33}
            text={'Go live'}
            style={{flexDirection:'row', justifyContent: 'center', alignItems:'center'}}
            textStyle={{paddingLeft: 10, color:'#FFF', fontSize:23}}
          />
        </Touchable>

        <View style={{borderWidth:1, borderColor:'#FFF', width: '100%'}}/>

        <Touchable
          accessible
          accessibilityLabel={'Go Live'}
          hitSlop={Constants.HIT_SLOP}
          activeOpacity={0.7}
          style={{flex: 1, justifyContent: 'center', alignItems:'center', width:'100%'}}
          foreground={Touchable.Ripple('rgba(255,255,255,0.2)', true)}
          onPress={this.handleCreateEvent}
        >
          <View>
            <LabelWithIcon
              iconType={'Feather'}
              iconName={'tv'}
              iconColor={'#FFF'}
              iconSize={33}
              text={'Create a premier'}
              style={{flexDirection:'row', justifyContent: 'center', alignItems:'center'}}
              textStyle={{ paddingLeft: 10, color:'#FFF', fontSize:23}}
            />
          </View>
        </Touchable>
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
)(CreateEvent)
