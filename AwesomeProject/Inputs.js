import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import * as RootNavigation from './RootNavigation';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import FirebaseDb from './FirebaseDb';

class Inputs extends Component {
   state = {
      email: '',
      password: ''
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }

     login = (email, pass) => {
      if(email != '' && pass !='')  {
const auth = getAuth();
createUserWithEmailAndPassword(auth, email, pass)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
  console.log('User registered successfully!')
   RootNavigation.navigate('Home', { emailid: email,password: pass })
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   console.log(errorMessage)
            alert(errorMessage)

  });

        }else{
         alert('Fill the credential \n'+' Email: ' + email + '\n Password: ' + pass )
        }
        }


   render() {
      return (
         <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "red"
               placeholder = "Email"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>

            <TextInput style = {styles.input}
               underlineColorAndroid = "red"
               placeholder = "Password"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>

            <TouchableOpacity
               style = {styles.submitButton}
           onPress = {
                             () => this.login(this.state.email, this.state.password)
                          }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>

         </View>
      );
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: 'darkslateblue',
      padding: 10,
      margin: 15,
      height: 40,
       alignItems: 'center',
   },
   submitButtonText:{
      color: 'white'
   }
})