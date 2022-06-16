import React, { Component,useState } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  Text,
} from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { enablePromise, openDatabase, SQLiteDatabase } from 'react-native-sqlite-storage';
import * as RootNavigation from '../RootNavigation';

const db = openDatabase({name :'UserDatabase.db'});


class RegisterUser extends Component {
 state = {
      userName: '',
      userContact: '',
      userAddress: '',
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
  register_user = (userName, userContact, userAddress) => {
    console.log(userName, userContact, userAddress);

    if (!userName) {
      alert('Please fill name');
      return;
    }
    if (!userContact) {
      alert('Please fill Contact Number');
      return;
    }
    if (!userAddress) {
      alert('Please fill Address');
      return;
    }

db.transaction(
   tx => {
                      tx.executeSql('CREATE TABLE IF NOT EXISTS UserDatabase(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255))'
);
    tx.executeSql( 'INSERT INTO UserDatabase (user_name, user_contact, user_address) VALUES (?,?,?)', [userName, userContact, userAddress]);
    tx.executeSql('select * from UserDatabase', [], (_, { rows }) =>{
     console.log('the number of rows are',JSON.stringify(rows))
     if(rows.length > 0) {
      RootNavigation.navigateGoBack()
     }else{
     alert('Adding User Data Failed')
     }
}

    );

    tx.executeSql(
            'SELECT * FROM UserDatabase',
            [],
             (_, { rows }) =>{
              var temp = [];
              for (let i = 0; i <rows.length; ++i)
                temp.push(rows.item(i));
                 console.log('temp',temp)
            });

   },
   null,
   this.update
  );

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
                placeholder="Enter Name"
                onChangeText={this.userName}
                style={{ padding: 10 }}
              />
              <Mytextinput
                placeholder="Enter Contact No"
                onChangeText={this.userContact}
                maxLength={10}
                keyboardType="numeric"
                style={{ padding: 10 }}
              />
              <Mytextinput
                placeholder="Enter Address"
                onChangeText={this.userAddress}
                maxLength={225}
                numberOfLines={5}
                multiline={true}
                style={{ textAlignVertical: 'top', padding: 10 }}
              />
              <Mybutton title="Submit"
              customClick={() =>this.register_user(this.state.userName,
                                                   this.state.userContact,
                                                 this.state.userAddress)} />
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

}
export default RegisterUser;