// Example of File Picker in React Native
// https://aboutreact.com/file-picker-in-react-native/

// Import React
import React, {Component} from 'react';
// Import required components
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

// Import Document Picker
import DocumentPicker from 'react-native-document-picker';

class FileBrowser extends Component {
 state = {
    singleFile: '',
        multipleFile: [],
  }

singleFile = (text) => {
      this.setState({ singleFile: text })
   }


   selectOneFile = async () => {
    //Opening Document Picker for selection of one file
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
        //There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      //Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));
      console.log('URI : ' + res.uri);
      console.log('Type : ' + res.type);
      console.log('File Name : ' + res.name);
      console.log('File Size : ' + res.size);
      //Setting the state to show single file attributes
      this.singleFile(res);
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        alert('Canceled from single doc picker');
      } else {
        //For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

   selectMultipleFile = async () => {
    //Opening Document Picker for selection of multiple file
    try {
      const results = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.images],
        //There can me more options as well find above
      });
      for (const res of results) {
        //Printing the log realted to the file
        console.log('res : ' + JSON.stringify(res));
        console.log('URI : ' + res.uri);
        console.log('Type : ' + res.type);
        console.log('File Name : ' + res.name);
        console.log('File Size : ' + res.size);
      }
      //Setting the state to show multiple file attributes
         this.setState({ multipleFile:results})
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        alert('Canceled from multiple doc picker');
      } else {
        //For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

render() {
  return (
    <SafeAreaView style={{flex: 1}}>

      <View style={styles.container}>
        {/*To show single file attribute*/}
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={this.selectOneFile}>
          {/*Single file selection button*/}
          <Text style={{marginRight: 10, fontSize: 19}}>
            Click here to pick one file
          </Text>
          <Image
            source={{
              uri: 'https://img.icons8.com/offices/40/000000/attach.png',
            }}
            style={styles.imageIconStyle}
          />
        </TouchableOpacity>
        {/*Showing the data of selected Single file*/}
        <Text style={styles.textStyle}>
          File Name: {this.state.singleFile.name ? this.state.singleFile.name : ''}
          {'\n'}
          Type: {this.state.singleFile.type ? this.state.singleFile.type : ''}
          {'\n'}
          File Size: {this.state.singleFile.size ? this.state.singleFile.size : ''}
          {'\n'}
          URI: {this.state.singleFile.uri ? this.state.singleFile.uri : ''}
          {'\n'}
        </Text>
        <View
          style={{
            backgroundColor: 'grey',
            height: 2,
            margin: 10
          }} />
        {/*To multiple single file attribute*/}
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={this.selectMultipleFile}>
          {/*Multiple files selection button*/}
          <Text style={{marginRight: 10, fontSize: 19}}>
            Click here to pick multiple files
          </Text>
          <Image
            source={{
              uri: 'https://img.icons8.com/offices/40/000000/attach.png',
            }}
            style={styles.imageIconStyle}
          />
        </TouchableOpacity>
<ScrollView>
              <View>
                              {
                                 this.state.multipleFile.map((item, index) => (
                                     <View key={index}>
                                                  <Text style={styles.textStyle}>
                                                    File Name: {item.name ? item.name : ''}
                                                    {'\n'}
                                                    Type: {item.type ? item.type : ''}
                                                    {'\n'}
                                                    File Size: {item.size ? item.size : ''}
                                                    {'\n'}
                                                    URI: {item.uri ? item.uri : ''}
                                                    {'\n'}
                                                  </Text>
                                                              </View>

                                 ))
                              }
                           </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
  }
}

export default FileBrowser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 5,
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    backgroundColor: '#fff',
    fontSize: 15,
    marginTop: 16,
    color: 'black',
  },
  buttonStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#DDDDDD',
    padding: 5,
  },
  imageIconStyle: {
    height: 20,
    width: 20,
    resizeMode: 'stretch',
  },
});