import React, { Component,useState } from 'react';
import { StyleSheet,Text, View, SafeAreaView } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { enablePromise, openDatabase, SQLiteDatabase } from 'react-native-sqlite-storage';

const db = openDatabase({name :'UserDatabase.db'});

class ViewUser extends Component {

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
   // console.log(inputUserId);
    //this.userData({});
    if (inputUserId!='') {
  db.transaction(
     tx => {
      tx.executeSql(
        'SELECT * FROM UserDatabase where user_id = ?',
        [inputUserId],
        (_, { rows }) =>{
          var len = rows.length;
          if (len > 0) {
//          if(this.state.inputUserId!=''){
//           this.updateUserData(rows.item(0))
  this.userName(rows.item(0).user_name);
   this.userContact(rows.item(0).user_contact);
  this.userAddress(rows.item(0).user_address);

//            }
          } else {
             console.log('No user found');
          }
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
          <Mytextinput
            placeholder="Enter User Id"
            onChangeText={this.inputUserId}
            style={{ padding: 10 }}
          />
          <Mybutton title="Search User" customClick={this.searchUser(this.state.inputUserId)} />
          <View
            style={{
              marginLeft: 35,
              marginRight: 35,
              marginTop: 10
            }}>
          </View>
                        <Text style = {styles.text}>Id: {this.state.inputUserId}</Text>
                                  <Text style = {styles.text}>Name: {this.state.userName}</Text>
                                  <Text style = {styles.text}>Contact: {this.state.userContact}</Text>
                                  <Text style = {styles.text}>Address: {this.state.userAddress}</Text>

        </View>

      </View>
    </SafeAreaView>
  );
};
}
export default ViewUser;

const styles = StyleSheet.create ({
   text: {
      margin: 5,
      color: 'royalblue',
      fontSize: 20
   }
})