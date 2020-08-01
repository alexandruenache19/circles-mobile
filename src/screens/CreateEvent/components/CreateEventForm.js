
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

class CreateEventForm extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      index: 0,
      title: '',
      goLiveButton: false,
      currency: '$',
      data: [
        {
          question: 'What is the title of the event?',
          key: 0
        },
        {
          question: 'Do you have a description?',
          key: 1
        },
        {
          question: 'Can people join your event for free?',
          key: 2
        },
        {
          question: 'Set up the ticket price per person',
          key: 3
        },
        {
          question: 'Add a cover',
          key: 4
        }
      ]
    }

    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleChangeTitle = this.handleChangeTitle.bind(this)
    this.handleChangeDescription = this.handleChangeDescription.bind(this)
    this.rowRenderer = this.rowRenderer.bind(this)
  }

  handleOnChange (text) {
    this.setState({ answer: text })
  }

  handleChangeTitle (text) {
    this.setState({ title: text })
  }

  handleChangeDescription (text) {
    this.setState({ description: text })
  }

  rowRenderer ({ item, index }) {
    const { data, goLiveButton } = this.state
    const lastQuestion = index === data.length - 1

    if (item.key === 0) {
      return (
        <View style={{ paddingLeft: 30, paddingRight: 30 }}>
          <Text style={{ color: '#FFF', fontSize: 33 }}>
            {item.question}
          </Text>

          <TextInput
            style={{ color: '#FFF', height: 50, width: '100%' }}
            selectionColor='#FFF'
            placeholderTextColor='#FFF'
            placeholder='Your title here'
            value={this.state.title}
            onChange={this.handleChangeTitle}
          />

          <ButtonWithTextIcon
            iconType='EvilIcons'
            iconName='chevron-right'
            iconColor='#000'
            iconBeforeText={false}
            iconSize={22}
            text='Continue'
            onPress={() => this._carousel.snapToNext()}
            style={{ backgroundColor: '#FFF', width: 150, height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}
            containerStyle={{ width: '100%', justifyContent: 'space-around' }}
          />
        </View>
      )
    } else if (item.key === 1) {
      return (
        <View style={{ paddingLeft: 30, paddingRight: 30 }}>
          <Text style={{ color: '#FFF', fontSize: 33 }}>
            {item.question}
          </Text>

          <TextInput
            style={{ color: '#FFF', height: 50, width: '100%' }}
            keyboardType='numeric'
            selectionColor='#FFF'
            placeholderTextColor='#FFF'
            placeholder='Your description here'
            value={this.state.description}
            onChange={this.handleChangeDescription}
          />

          <ButtonWithTextIcon
            iconType='EvilIcons'
            iconName='chevron-right'
            iconColor='#000'
            iconBeforeText={false}
            iconSize={22}
            text='Continue'
            onPress={() => this._carousel.snapToNext()}
            style={{ backgroundColor: '#FFF', width: 150, height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}
            containerStyle={{ width: '100%', justifyContent: 'space-around' }}
          />
        </View>
      )
    } else if (item.key === 2) {
      return (
        <View style={{ paddingLeft: 30, paddingRight: 30 }}>
          <Text style={{ color: '#FFF', fontSize: 33 }}>{item.question}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
            <ButtonWithText
              text='Yes'
              onPress={() => null}
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
    } else if (item.key === 3) {
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
            iconType='EvilIcons'
            iconName='chevron-right'
            iconColor='#000'
            iconBeforeText={false}
            iconSize={22}
            text='Continue'
            onPress={() => this._carousel.snapToNext()}
            style={{ backgroundColor: '#FFF', width: 150, height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}
            containerStyle={{ width: '100%', justifyContent: 'space-around' }}
          />
        </View>
      )
    } else if (item.key === 4) {
      return (
        <View style={{ paddingLeft: 30, paddingRight: 30 }}>
          <Text style={{ color: '#FFF', fontSize: 33 }}>
            {item.question}
          </Text>

          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
            <ButtonWithText
              text='Image'
              onPress={() => null}
              style={{ backgroundColor: '#FFF', width: 150, height: 50, alignItems: 'center', justifyContent: 'center', borderBottomLeftRadius: 10, borderTopLeftRadius: 10 }}
            />

            <ButtonWithText
              text='Video'
              onPress={() => null}
              style={{ backgroundColor: '#FFF', width: 150, height: 50, alignItems: 'center', justifyContent: 'center', borderBottomRightRadius: 10, borderTopRightRadius: 10 }}
            />
          </View>

          <ButtonWithText
            text='Create'
            onPress={() => null}
            style={{ backgroundColor: '#FFF', width: 80, height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginTop: 10 }}
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
)(CreateEventForm)
