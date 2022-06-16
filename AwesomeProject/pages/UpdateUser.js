import React, {Component, useState } from 'react';
import {StyleSheet,TouchableOpacity,View,ScrollView, KeyboardAvoidingView,  Alert,SafeAreaView,Text} from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { enablePromise, openDatabase, SQLiteDatabase } from 'react-native-sqlite-storage';
import * as RootNavigation from '../RootNavigation';

const db = openDatabase({name :'UserDatabase.db'});

class UpdateUser extends Component {

state = {
      inputUserId: '',
      userName: '',
      userContact: '',
      userAddress: '',
   }
   inputUserId = (text) => {
         this.setState({ inputUserId: text })
      }
    userName = (text) => {
                this.setState({ userName: text })
             }

         userContact = (text) => {
                             this.setState({ userContact: text })
                          }

                   userAddress = (text) => {
                             this.setState({ userAddress: text })
                          }

   searchUser = (inputUserId) => {
    if (inputUserId!='') {
    db.transaction(
                       tx => {
                        tx.executeSql(
        'SELECT * FROM UserDatabase where user_id = ?',
       [inputUserId],
              (_, { rows }) =>{
        var len = rows.length;
                 if (len > 0) {
           this.userName(rows.item(0).user_name);
             this.userContact(rows.item(0).user_contact);
            this.userAddress(rows.item(0).user_address);
          } else {
            alert('No user found');
          }
       }
             );
            },
              null,
              this.state
             );
             }
       }

   updateUser = (inputUserId,userName, userContact, userAddress) => {

      if (inputUserId!='' && userName!='' && userContact!='' && userAddress!='') {
      db.transaction(
         tx => {
          tx.executeSql(
          'UPDATE UserDatabase set user_name=?, user_contact=?, user_address=? where user_id=?',
            [userName, userContact, userAddress, inputUserId],
            (_, { rows }) =>{
              var rowsAffected = rows.rowsAffected ;
                             RootNavigation.navigateGoBack()
            }
          );
         },
           null,
           this.state
          );
          }
}


render() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{ flex: 1, justifyContent: 'space-between' }}>
              <Mytextinput
                placeholder="Enter User Id"
                style={{ padding: 10 }}
                onChangeText={this.inputUserId}
              />
               <TouchableOpacity
                             style = {styles.submitButton}
                         onPress = {
                                           () => this.searchUser(this.state.inputUserId)
                                        }>
                             <Text style = {styles.submitButtonText}> Search User </Text>
                          </TouchableOpacity>

              <Mytextinput
                placeholder="Enter Name"
                value={this.state.userName}
                style={{ padding: 10 }}
                 onChangeText={this.userName}
              />
              <Mytextinput
                placeholder="Enter Contact No"
                value={'' + this.state.userContact}
                 onChangeText={this.userContact}
                maxLength={10}
                style={{ padding: 10 }}
                keyboardType="numeric"
              />
              <Mytextinput
                value={this.state.userAddress}
                placeholder="Enter Address"
                onChangeText={this.userAddress}
                maxLength={225}
                numberOfLines={5}
                multiline={true}
                style={{ textAlignVertical: 'top', padding: 10 }}
              />

            <TouchableOpacity
               style = {styles.submitButton}
           onPress = {
 () => this.updateUser(this.state.inputUserId,this.state.userName,this.state.userContact,this.state.userAddress)
                          }>
               <Text style = {styles.submitButtonText}> Update User </Text>
            </TouchableOpacity>


            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}
}
export default UpdateUser;
const styles = StyleSheet.create({
   submitButton: {
     alignItems: 'center',
         backgroundColor: 'darkslateblue',
        padding: 10,
        marginTop: 16,
        marginLeft: 35,
        marginRight: 35,
   },
   submitButtonText:{
      color: '#ffffff',
   }
})