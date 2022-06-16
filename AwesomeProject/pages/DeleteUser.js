import React, { Component,useState } from 'react';
import { TouchableOpacity,StyleSheet,Text, View, Alert, SafeAreaView } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { enablePromise, openDatabase, SQLiteDatabase } from 'react-native-sqlite-storage';
import * as RootNavigation from '../RootNavigation';

const db = openDatabase({name :'UserDatabase.db'});

class DeleteUser extends Component {
state = {
      inputUserId: '',
   }
 inputUserId = (text) => {
         this.setState({ inputUserId: text })
      }
  deleteUser = (inputUserId) => {
   if (inputUserId!='') {
    db.transaction(
         tx => {
          tx.executeSql(
            'DELETE FROM UserDatabase where user_id=?',
            [inputUserId],
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
          <Mytextinput
            placeholder="Enter User Id"
               onChangeText={this.inputUserId}
            style={{ padding: 10 }}
          />

          <TouchableOpacity
                         style = {styles.submitButton}
                     onPress = {
           () =>this.deleteUser(this.state.inputUserId)
                                    }>
                         <Text style = {styles.submitButtonText}> Delete User </Text>
                      </TouchableOpacity>

        </View>
      </View>
    </SafeAreaView>
  );
}

}
export default DeleteUser;
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