import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { View, SafeAreaView, Button, PermissionsAndroid, Platform, Dimensions, Text } from 'react-native'
import awsvideoconfig from '../../../aws-video-exports'
import Video from 'react-native-video'
import { Colors, Spacing } from '_styles'
import { Label } from '_atoms'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Navigation } from 'react-native-navigation'
import {CardsCarouselSection} from '_organisms'

// import InstagramLogin from 'react-native-instagram-login';
// import { NodeCameraView, NodePlayerView, NodeMediaClient } from 'react-native-nodemediaclient'

import { LiveEventsSection } from '_organisms'

const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.requestMultiple([PermissionsAndroid.PERMISSIONS.CAMERA,PermissionsAndroid.PERMISSIONS.RECORD_AUDIO],
      {
        title: "Cool Photo App Camera And Microphone Permission",
        message:
          "Cool Photo App needs access to your camera " +
          "so you can take awesome pictures.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the camera");
    } else {
      console.log("Camera permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};

class Home extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      index: 0,
      statusBarHeight: 0,
      topBarHeight: 0,
      bottomTabsHeight: 0,
      routes: [
        { key: 'first', title: 'For you' },
        { key: 'second', title: 'Popular' },
        { key: 'third', title: 'Latest' },
        { key: 'fourth', title: 'Happening Now' },
        { key: 'fifth', title: 'Friends' }
      ]
    }
    this.handleSetIndex = this.handleSetIndex.bind(this)
  }

  async componentDidMount() {
    const {
      statusBarHeight,
      topBarHeight,
      bottomTabsHeight
    } = await Navigation.constants();

    this.setState({
      statusBarHeight,
      topBarHeight,
      bottomTabsHeight
    })
  }

  handleSetIndex (index) {
    this.setState({ index })
  }

  render () {
    const { index, routes, statusBarHeight, topBarHeight, bottomTabsHeight } = this.state

    const itemHeight = Platform.OS === 'ios' ? (
      (Spacing.DEVICE_HEIGHT - statusBarHeight - topBarHeight - bottomTabsHeight) * 0.8
    ) : (
      (Spacing.DEVICE_HEIGHT - topBarHeight - bottomTabsHeight) * 0.8
    )

    return (
      <SafeAreaView style={{flex:1, backgroundColor: Colors.MAIN_BG_COLOR, alignItems: 'center', justifyContent: 'center' }}>
        <TabView
          style={{ flex: 1, display: 'flex', width:'100%', backgroundColor: Colors.MAIN_BG_COLOR, justifyContent: 'center' }}
          renderTabBar={props => ( <TabBar
              {...props}
              scrollEnabled
              pressOpacity={0.85}
              renderLabel={({ route, focused, color }) => (
                <View style={{ height:100, width:150, alignItems: 'center', justifyContent:'center'}}>
                  <Text style={{ color: focused ? color : '#323A4F', fontSize: focused ? 34 : 26}}>
                    {route.title}
                  </Text>
                </View>
              )}
              indicatorStyle={{ height: 0 }}
              style={{ backgroundColor: Colors.MAIN_BG_COLOR }}
            /> )}
          navigationState={{ index, routes }}
          renderScene={SceneMap({
           first: () => <CardsCarouselSection
            type='event'
            itemHeight={itemHeight}
            data={[
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
             },{
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
             },{
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
             },{
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
             },{
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
           ]} />,
           second: () => <CardsCarouselSection
            type='event'
            itemHeight={itemHeight}
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
           }, {
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
           }, {
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
           />,
           third: () => <CardsCarouselSection
             type='event'
             itemHeight={itemHeight}
             data={[]}
            />,
           fourth: () => <CardsCarouselSection
             type='event'
             itemHeight={itemHeight}
             data={[]}
            />,
           fifth: () => <CardsCarouselSection
             type='event'
             itemHeight={itemHeight}
             data={[]}
            />,
          })}
          onIndexChange={this.handleSetIndex}
          initialLayout={{height: Spacing.DEVICE_HEIGHT, width: Spacing.DEVICE_WIDTH}}
        />

      </SafeAreaView>
    )
  }
}

// <NodeCameraView
//   style={{ height: 400, width:400 }}
//   ref={(vb) => { this.vb = vb }}
//   outputUrl={'rtmps://6a2b6161d67d.global-contribute.live-video.net/app/sk_us-east-1_pKzwCkBcCprb_APBfpUIXEouYXAGSc5EjAFFRKsCQ0t'}
//   camera={{ cameraId: 1, cameraFrontMirror: true }}
//   audio={{ bitrate: 32000, profile: 1, samplerate: 44100 }}
//   video={{
//     preset: 5,
//     bitrate: 36000000,
//     profile: 2,
//     fps: 30,
//     videoFrontMirror: true
//   }}
//   autopreview={true}
//   onStatus={(code, msg) => {
//     console.log('code',msg);
//     this.setState({msg: code + ' ' + msg})
//   }}
// />
//
// <View style={{position:'absolute', zIndex: 2, bottom:0}}>
// <Button
//   title={this.state.msg}
//   onPress={()=>{
//     this.vb.flashEnable(true)
//     this.vb.start()}}
// />
// </View>
//
// <InstagramLogin
//   ref={ref => (this.instagramLogin = ref)}
//   appId='1034997463582886'
//   appSecret='072127802648f622d481bdc661760453'
//   redirectUrl='listle.io'
//   scopes={['user_profile', 'user_media']}
//   onLoginSuccess={this.setIgToken}
//   onLoginFailure={(data) => console.log('problem',data)}
// />
// <Button
//   title={'Press here'}
//   onPress={()=>this.instagramLogin.show()}
// />
//
// <Video
//   source={{uri: 'https://6a2b6161d67d.us-east-1.playback.live-video.net/api/video/v1/us-east-1.855360957117.channel.dMwoIq7a0sPz.m3u8'}}
//   style={{height: 300, width:400, borderWidth: 10, borderColor:'#222'}}
//   ref={(ref) => { this.videoRef = ref }}
// />

const mapStateToProps = state => ({

})

const mapDispatchToProps = {

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
