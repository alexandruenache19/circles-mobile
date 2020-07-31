
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { View, SafeAreaView } from 'react-native'

import { Colors, Spacing } from '_styles'

class Home extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.MAIN_BG_COLOR, alignItems: 'center', justifyContent: 'center' }}>


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
)(Home)
