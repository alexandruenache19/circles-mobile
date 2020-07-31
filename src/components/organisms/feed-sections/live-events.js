// external modules
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import FastImage from 'react-native-fast-image'
import Touchable from 'react-native-platform-touchable'

// constants
import { Label, ButtonWithIcon } from '_atoms'
import { Constants, Spacing } from '_styles'

import SmallLiveCard from '../cards/small-live-card'

class LiveEventsSection extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {

    }

    this.handlePressViewAll = this.handlePressViewAll.bind(this)
  }

  handlePressViewAll() {

  }

  render () {
    const { style } = this.props

    return (
      <View style={style}>
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between' }}>
          <Label
            text={'Live'}
            style={{ color: '#FFF', fontSize: 34 }}
          />

          <ButtonWithIcon
            iconType={'Feather'}
            iconName={'arrow-right'}
            iconColor={'#FFF'}
            iconSize={30}
            onPress={this.handlePressViewAll}
          />
        </View>

        <ScrollView horizontal contentContainerStyle={{ justifyContent: 'space-between', width: 500 }} style={{ paddingTop: 20 }}>
          <SmallLiveCard
            item={{
              videoURL: 'https://listle-video-snippets.s3.us-east-2.amazonaws.com/RjtVyTPE2z',
              imageURL:'https://www.rollingstone.com/wp-content/uploads/2019/01/R1324_FEA_Tekashi69_B3.jpg?resize=1800,1200&w=1800',
              title: 'Live concert'
            }}
          />

          <SmallLiveCard
            item={{
              videoURL: 'https://listle-video-snippets.s3.us-east-2.amazonaws.com/RjtVyTPE2z',
              imageURL:'https://www.rollingstone.com/wp-content/uploads/2019/01/R1324_FEA_Tekashi69_B3.jpg?resize=1800,1200&w=1800',
              title: 'Live concert'
            }}
          />

          <SmallLiveCard
            item={{
              videoURL: 'https://listle-video-snippets.s3.us-east-2.amazonaws.com/RjtVyTPE2z',
              imageURL:'https://www.rollingstone.com/wp-content/uploads/2019/01/R1324_FEA_Tekashi69_B3.jpg?resize=1800,1200&w=1800',
              title: 'Live concert'
            }}
          />
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = {

}

const styles = StyleSheet.create({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LiveEventsSection)
