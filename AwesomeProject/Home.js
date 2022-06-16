import React, { Component } from 'react'
import { Text,View, StyleSheet, Animated, TouchableOpacity,StatusBar,ScrollView  } from 'react-native'
import * as RootNavigation from './RootNavigation';
import { NavigationContainer } from '@react-navigation/native';
import ImageSlider from './ImageSlider';
import ViewAllUser from './pages/ViewAllUser';
import ListGrid from './ListGrid';
import { getAuth } from "firebase/auth";
import FirebaseDb from './FirebaseDb';

class Home extends Component {
 constructor(props) {
    super(props);
  const auth = getAuth();
  const user = auth.currentUser;
  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;
    console.log(" FirebaseDb Email: " +  user.email);

    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    const uid = user.uid;
  }
  }
   render() {
      return (
       <View>
       <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "darkslateblue" translucent = {true}/>
              <View  style = {styles.container}>
                                    <ImageSlider />
<Text style = {styles.text}> Welcome {RootNavigation.getParams().emailid}
                           </Text>
                               <ListGrid />
                             </View>


                             </View>
      );
   }
}
export default Home
const styles = StyleSheet.create ({
 container: {
      flexDirection: 'column',
   },
   text: {
    paddingTop: 25,
    textAlign: 'center', // <-- the magic
       fontWeight: 'bold',
       fontSize: 18,
       justifyContent: 'center',
       color: 'royalblue',
      alignItems: 'center',
   },
})