
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { View, SafeAreaView } from 'react-native'

import { Colors, Spacing } from '_styles'
import { CardsCarouselSection } from '_organisms'
class Home extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.MAIN_BG_COLOR, alignItems: 'center', justifyContent: 'center' }}>
        <CardsCarouselSection
          type='live'
          data={[{
            imageURL:'https://www.rollingstone.com/wp-content/uploads/2019/01/R1324_FEA_Tekashi69_B3.jpg?resize=1800,1200&w=1800',
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
            imageURL:'https://www.rollingstone.com/wp-content/uploads/2019/01/R1324_FEA_Tekashi69_B3.jpg?resize=1800,1200&w=1800',
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
            imageURL:'https://www.rollingstone.com/wp-content/uploads/2019/01/R1324_FEA_Tekashi69_B3.jpg?resize=1800,1200&w=1800',
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
            imageURL:'https://www.rollingstone.com/wp-content/uploads/2019/01/R1324_FEA_Tekashi69_B3.jpg?resize=1800,1200&w=1800',
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
            imageURL:'https://www.rollingstone.com/wp-content/uploads/2019/01/R1324_FEA_Tekashi69_B3.jpg?resize=1800,1200&w=1800',
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
