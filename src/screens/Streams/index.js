
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { View, SafeAreaView, Platform } from 'react-native'
import { Navigation } from 'react-native-navigation'

import { Colors, Spacing } from '_styles'
import { CardsCarouselSection } from '_organisms'

class Home extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      statusBarHeight: 0,
      topBarHeight: 0,
      bottomTabsHeight: 0
    }
  }

  async componentDidMount () {
    const {
      statusBarHeight,
      topBarHeight,
      bottomTabsHeight
    } = await Navigation.constants()

    this.setState({
      statusBarHeight,
      topBarHeight,
      bottomTabsHeight
    })
  }

  render () {
    const { statusBarHeight, topBarHeight, bottomTabsHeight } = this.state

    const itemHeight = Platform.OS === 'ios' ? (
      Spacing.DEVICE_HEIGHT - statusBarHeight - topBarHeight - bottomTabsHeight
    ) : (
      Spacing.DEVICE_HEIGHT - topBarHeight - bottomTabsHeight
    )

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.MAIN_BG_COLOR, alignItems: 'center', justifyContent: 'center' }}>
        <CardsCarouselSection
          type='live'
          itemHeight={itemHeight}
          data={[{
            imageURL: 'https://www.rollingstone.com/wp-content/uploads/2019/01/R1324_FEA_Tekashi69_B3.jpg?resize=1800,1200&w=1800',
            title: '69 New Album premier',
            date: 'TODAY AT 3 PM',
            friends: '',
            previewVideoURL: 'https://dyy4gt5vfz7x.cloudfront.net/out/v1/46279cf7a4f542e6b74e2489eb91c9c1/8f37a36348724949a79f8b36f0667aea/a1303b3d66c949a3b9abbafcd497c009/index.m3u8',
            description: 'Daniel Hernandez, known professionally as Tekashi 6ix9ine or just 6ix9ine, is an American rapper, songwriter, and convicted felon.',
            tags: '',
            price: {
              currency: '$',
              amount: '22',
              type: 'free'
            },
            author: {
              name: 'Andrew Albatros',
              imageURL: 'https://www.rollingstone.com/wp-content/uploads/2019/01/R1324_FEA_Tekashi69_B3.jpg?resize=1800,1200&w=1800'
            }
          },
          {
            imageURL: 'https://www.rollingstone.com/wp-content/uploads/2019/01/R1324_FEA_Tekashi69_B3.jpg?resize=1800,1200&w=1800',
            title: '69 New Album premier',
            date: 'TODAY AT 3 PM',
            friends: '',
            description: 'Daniel Hernandez, known professionally as Tekashi 6ix9ine or just 6ix9ine, is an American rapper, songwriter, and convicted felon.',
            tags: '',
            price: {
              currency: '$',
              amount: '22',
              type: 'free'
            },
            author: {
              name: '',
              imageURL: ''
            }
          },
          {
            imageURL: 'https://www.rollingstone.com/wp-content/uploads/2019/01/R1324_FEA_Tekashi69_B3.jpg?resize=1800,1200&w=1800',
            title: '69 New Album premier',
            date: 'TODAY AT 3 PM',
            friends: '',
            description: 'Daniel Hernandez, known professionally as Tekashi 6ix9ine or just 6ix9ine, is an American rapper, songwriter, and convicted felon.',
            tags: '',
            price: {
              currency: '$',
              amount: '22',
              type: 'free'
            },
            author: {
              name: '',
              imageURL: ''
            }
          },
          {
            imageURL: 'https://www.rollingstone.com/wp-content/uploads/2019/01/R1324_FEA_Tekashi69_B3.jpg?resize=1800,1200&w=1800',
            title: 'Title Title Tile',
            date: 'Date Date',
            friends: '',
            description: 'Description Description Description Description Description Description Description',
            tags: '',
            price: {
              currency: '$',
              amount: '22',
              type: 'free'
            },
            author: {
              name: '',
              imageURL: ''
            }
          },
          {
            imageURL: 'https://www.rollingstone.com/wp-content/uploads/2019/01/R1324_FEA_Tekashi69_B3.jpg?resize=1800,1200&w=1800',
            title: 'Live concert',
            date: '',
            friends: '',
            description: '',
            tags: '',
            price: {
              currency: '$',
              amount: '22',
              type: 'free'
            },
            author: {
              name: '',
              imageURL: ''
            }
          }]}
        />

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
