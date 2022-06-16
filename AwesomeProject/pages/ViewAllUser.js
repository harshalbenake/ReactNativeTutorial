import React, { Component,useState } from 'react';
import {ScrollView,StyleSheet,TouchableOpacity, Text, View, SafeAreaView } from 'react-native';
import { enablePromise, openDatabase, SQLiteDatabase } from 'react-native-sqlite-storage';
import Mybutton from './components/Mybutton';

const db = openDatabase({name :'UserDatabase.db'});

class ViewAllUser extends Component {
 constructor(props) {
    super(props);
    this.getUsers();
  }

state = {
      flatListItems: [],
   }

  getUsers = () => {
     db.transaction(
         tx => {
          tx.executeSql(
            'SELECT * FROM UserDatabase',
            [],
            (_, { rows }) =>{
             var arr = [];
              var len = rows.length;
                for (let i = 0; i < rows.length; ++i){
                          arr.push(rows.item(i));
                    }
             console.log('User Array Found: ',arr);
              this.setState({ flatListItems:arr})

            }
          );
         },
           null,
           this.state
          );

  }
 alertItemName = (item) => {
      alert(item.user_name)
   }
render() {
  return (
    <SafeAreaView style={{ flex: 1 }}>

     <ScrollView>

       <View>
                   {
                      this.state.flatListItems.map((item, index) => (
                         <TouchableOpacity
                            key = {item.user_id}
                            onPress = {() => this.alertItemName(item)}>
                             <View style = {styles.container}>
                                <Text style = {styles.text}>{item.user_id} ] Name : {item.user_name}</Text>
                                <Text style = {styles.text}>Contact : {item.user_contact}</Text>
                                <Text style = {styles.text}>Address : {item.user_address}</Text>
                                 </View>
                         </TouchableOpacity>
                      ))
                   }
                </View>
                                                  </ScrollView>

    </SafeAreaView>
  );
}
}

export default ViewAllUser;
const styles = StyleSheet.create({
 container: {
     backgroundColor: 'lavender',
      margin: 5,
             padding: 5,
   },
      text: {
              fontSize: 16,
          },
})