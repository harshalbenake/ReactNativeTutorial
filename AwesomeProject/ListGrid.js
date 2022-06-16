import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Alert,
  Text,
  StatusBar,
} from 'react-native';

import * as RootNavigation from './RootNavigation';

import SortableGridview from 'react-native-sortable-gridview';
import RazorpayCheckout from 'react-native-razorpay';


class ListGrid extends Component {
 render() {
  return (
    <View>
      <Text style={styles.title}>Choose Your Demos</Text>
      <SortableGridview
        data={[
          {name: 'User DB', backgroundColor: 'palegreen', color: 'gray'},
          {name: 'Web APIs', backgroundColor: 'palegoldenrod', color: 'gray'},
          {name: 'Charts', backgroundColor: 'paleturquoise', color: 'gray'},
          {name: 'File Manager', backgroundColor: 'lightgrey', color: 'gray'},
          {name: 'Camera', backgroundColor: 'pink', color: 'gray'},
          {name: 'Payment', backgroundColor: 'moccasin', color: 'gray'},
        ]}
        selectAnimation="shake" // scale, shake, none. default is scale
        selectStyle={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 1,
          shadowRadius: 3.84,
          elevation: 5,
        }}
        onDragStart={() => {
          console.log('ChangeSelectAnimationSelectStyle onDragStart');
        }}
        onDragRelease={(data) => {
          console.log('ChangeSelectAnimationSelectStyle onDragRelease', data.name);
        }}
        renderItem={(item, index) => {
          return (
            <View uniqueKey={item.name}
              onTap={() => {
console.log('sff',item.name)
                             if(item.name == 'User DB'){
                                    RootNavigation.navigateNoParam('User Screen')
                             }else if(item.name == 'Web APIs'){
                                      RootNavigation.navigateNoParam('Blog')
                             }else if(item.name == 'Charts'){
                             RootNavigation.navigateNoParam('Charts')
                             }else if(item.name == 'File Manager'){
                             RootNavigation.navigateNoParam('File Manager')
                                }else if(item.name == 'Camera'){
                         RootNavigation.navigateNoParam('Camera')
                             }else if(item.name == 'Payment'){
                          RootNavigation.navigateNoParam('Payment')
                         }

                            }}
            style={[styles.item, {backgroundColor: item.backgroundColor}]}>
              <Text style={[styles.text, {color: item.color}]}>{item.name}</Text>
            </View>
          )
        }}
      />
    </View>
  );
};
}

export default ListGrid;
const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'royalblue',
  },
  item: {
    borderRadius: 4,
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    color: '#09f',
  }
});

