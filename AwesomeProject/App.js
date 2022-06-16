import React,{Component } from 'react';
import {Button,StatusBar, ActivityIndicator, StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import PresentationalComponent from './PresentationalComponent'
import Inputs from './Inputs.js'

const backgroundImage = require('G:\\HBWorkspace\\DemoWorkspace\\React Native\\MyReactNative\\AwesomeProject\\logo.png')

class App extends React.Component {
   state = {
      myState: 'Welcome To React Native',
       animating: true,
   }

   updateState = () => {
      this.setState({ myState: 'This is a demo application' })
  }

 //Animated
closeActivityIndicator = () => setTimeout(() => this.setState({
   animating: false }), 5000)
      componentDidMount = () => this.closeActivityIndicator()
 //Animated

   render() {
    const animating = this.state.animating
      return (

         <View>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "darkslateblue" translucent = {true}/>

           <ScrollView>
<View style = {styles.spaceView}/>
              <View style = {styles.container}>

                              <View style = {styles.redbox} />
                              <View style = {styles.bluebox}>
                               <Image source = {backgroundImage}
                                                       style = {styles.bluebox}/>
                                                        </View>
                              <View style = {styles.blackbox} />

                           </View>
                      <PresentationalComponent myState = {this.state.myState} updateState = {this.updateState}/>

                            <Inputs />


                                <ActivityIndicator
                                                                  animating = {animating}
                                                                  color = '#bc2b78'
                                                                  size = "large"
                                                                  style = {styles.activityIndicator}/>
                                        </ScrollView>
         </View>
      );
   }
}
export default App

const styles = StyleSheet.create ({
   container: {
     paddingTop: 16,
      flexDirection: 'row',
       justifyContent: 'space-around',
      alignItems: 'center',
      height: 100
   },
   redbox: {
      width: 50,
      height: 50,
      backgroundColor: 'powderblue'
   },
   bluebox: {
      width: 75,
           height: 75,
   },
   blackbox: {
      width: 50,
      height: 50,
      backgroundColor: 'powderblue'
   },
   activityIndicator: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
         height: 80
      },
   spaceView: {
   marginTop: 20,
   padding: 20,
  backgroundColor: 'powderblue',
         },
})
