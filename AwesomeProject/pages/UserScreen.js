import React, { Component,useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import * as RootNavigation from '../RootNavigation';
import Mybutton from './components/Mybutton';
import Mytext from './components/Mytext';
import { enablePromise, openDatabase, SQLiteDatabase } from 'react-native-sqlite-storage';

const db = openDatabase({name :'UserDatabase.db'});

class UserScreen extends Component {
render() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
          <Mytext text="Choose Your Option" />
          <Mybutton
            title="Add User"
            customClick={() => RootNavigation.navigateNoParam('Register')}
          />
          <Mybutton
            title="Update User"
            customClick={() => RootNavigation.navigateNoParam('Update')}
          />
          <Mybutton
            title="View User"
            customClick={() => RootNavigation.navigateNoParam('View')}
          />
          <Mybutton
            title="View All Users"
            customClick={() => RootNavigation.navigateNoParam('ViewAll')}
          />
          <Mybutton
            title="Delete User"
            customClick={() => RootNavigation.navigateNoParam('Delete')}
          />
        </View>

      </View>
    </SafeAreaView>
  );
}
}
export default UserScreen;