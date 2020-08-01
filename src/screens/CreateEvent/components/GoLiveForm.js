
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { View, SafeAreaView, Text, TextInput } from 'react-native'
import Swiper from 'react-native-swiper'
import FastImage from 'react-native-fast-image'
import Touchable from 'react-native-platform-touchable'

import { Label, LabelWithIcon, ButtonWithText, ButtonWithTextIcon, Icon } from '_atoms'
import { Colors, Spacing, Constants } from '_styles'
import Carousel from 'react-native-snap-carousel'
import DropDownPicker from 'react-native-dropdown-picker'

class GoLiveForm extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      index: 0,
      answer: '',
      goLiveButton: false,
      currency: '$',
      data: [
        {
          question: 'Can people join your live for free?',
          key: 0
        },
        {
          question: 'Set up the ticket price per person',
          key: 1
        }
      ]
    }

    this.handleOnChange = this.handleOnChange.bind(this)
    this.rowRenderer = this.rowRenderer.bind(this)
  }

  handleOnChange (text) {
    this.setState({ answer: text })
  }

  rowRenderer ({ item, index }) {
    const { data, goLiveButton } = this.state
    const lastQuestion = index === data.length - 1

    if (item.key === 0) {
      return (
        <View style={{ paddingLeft: 30, paddingRight: 30 }}>
          <Text style={{ color: '#FFF', fontSize: 33 }}>{item.question}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
            <ButtonWithText
              text='Yes'
              onPress={() => this.setState({
                goLiveButton: true
              })}
              style={{ backgroundColor: '#FFF', width: 150, height: 50, alignItems: 'center', justifyContent: 'center', borderBottomLeftRadius: 10, borderTopLeftRadius: 10, backgroundColor: '#333' }}
            />

            <ButtonWithText
              text='No'
              onPress={() => this._carousel.snapToNext()}
              style={{ backgroundColor: '#FFF', width: 150, height: 50, alignItems: 'center', justifyContent: 'center', borderBottomRightRadius: 10, borderTopRightRadius: 10 }}
            />
          </View>
        </View>
      )
    } else if (item.key === 1) {
      return (
        <View style={{ paddingLeft: 30, paddingRight: 30 }}>
          <Text style={{ color: '#FFF', fontSize: 33 }}>
            {item.question}
          </Text>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TextInput
              style={{ color: '#FFF', height: 50, width: '70%' }}
              keyboardType='numeric'
              selectionColor='#FFF'
              placeholderTextColor='#FFF'
              placeholder='Your answers here'
              value={this.state.answer}
              onChange={this.handleOnChange}
            />

            <DropDownPicker
              items={[
                { label: '$', value: '$' },
                { label: '€', value: '€' }
              ]}
              containerStyle={{ height: 50, width: 70 }}
              defaultValue={this.state.currency}
              style={{ width: 70 }}
              itemStyle={{ justifyContent: 'flex-start' }}
              dropDownStyle={{ backgroundColor: '#fafafa' }}
              onChangeItem={item => this.setState({
                currency: item.value
              })}
            />
          </View>

          <ButtonWithTextIcon
            iconType={lastQuestion ? 'Feather' : 'EvilIcons'}
            iconName={lastQuestion ? 'video' : 'chevron-right'}
            iconColor='#000'
            iconBeforeText={false}
            iconSize={22}
            text={lastQuestion ? 'Go Live' : 'Continue'}
            onPress={() => null}
            style={{ backgroundColor: '#FFF', width: 150, height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}
            containerStyle={{ width: '100%', justifyContent: 'space-around' }}
          />
        </View>
      )
    }
  }

  render () {
    const { data } = this.state
    return (
      <View style={{ backgroundColor: Colors.MAIN_BG_COLOR, alignItems: 'center', justifyContent: 'center' }}>
        <Carousel
          ref={(c) => { this._carousel = c }}
          activeSlideAlignment='center'
          data={data}
          containerCustomStyle={{ marginTop: 300, marginBottom: 10 }}
          inactiveSlideOpacity={0}
          scrollEnabled={false}
          vertical
          enableSnap
          sliderWidth={400}
          sliderHeight={200}
          itemWidth={400}
          itemHeight={200}
          renderItem={this.rowRenderer}
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
)(GoLiveForm)
