import React, { Component,useEffect } from 'react'
import { SafeAreaView,Image,StyleSheet,ScrollView,TouchableOpacity,View, Text } from 'react-native'
import Card from './Card';

class Blog extends Component {
 constructor(props) {
    super(props);
    this.fetchData();
     this.fetachPostData();
  }

   state = {
       dataListItems: [],
      postData:'',
   }

 postData = (text) => {
               this.setState({ postData: text })
            }

   fetchData = () => {
            console.log('fetchData');
      fetch('https://reqres.in/api/users', {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson);
          this.setState({ dataListItems:responseJson.data})
      })
      .catch((error) => {
         console.error(error);
      });
   }

fetachPostData= (nameText) =>{
 // POST request using fetch with set headers
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer my-token',
            'My-Custom-Header': 'foobar'
        },
        body: JSON.stringify({ name:nameText,job:'leader'})
    };
    fetch('https://reqres.in/api/users', requestOptions)
        .then(response => response.json())
         .then((responseJson) => {
                 console.log('post response ',responseJson);
                 this.postData(responseJson);
                 this.alertItemName(this.state.postData)
              })
              .catch((error) => {
                 console.error(error);
              });
}

 alertItemName = (item) => {
 if(item.name!='' && item.name){
      alert('Name: '+item.name+'\nJob: '+item.job+'\nCreated At: '+item.createdAt)
      }
   }

   render() {
      return (
        <ScrollView>
               <View>
                           {
                              this.state.dataListItems.map((item, index) => (
                                 <TouchableOpacity
                                    key = {item.id}
                                    onPress = {() => this.fetachPostData(item.first_name)}>
                                             <Card style={styles.card}>

                                     <View style = {styles.container}>
                                    <Image source = {{uri:item.avatar}}
                                        style = {styles.imageBox}/>

                              <View style = {styles.textContainer}>
                               <Text style = {styles.text}>Email Id : {item.email}</Text>
                            <Text style = {styles.text}>Name : {item.first_name} {item.last_name}</Text>

                            <View style={{ flexDirection: 'row' }}>
  <Text style = {styles.textMultiline }>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua. </Text>
                             </View>


                                     </View>
                                    </View>
                                      </Card>
                                 </TouchableOpacity>
                              ))
                           }
                        </View>
                                                          </ScrollView>
      )
   }
}
export default Blog
const styles = StyleSheet.create({
 container: {
  flexDirection:'row',
alignItems:'center',
               padding: 5,

   },
    imageBox: {
        width: '20%',
              height: '100%',
      },
 textContainer: {
  flexDirection:'column',
             padding: 5,
   },
      text: {
              fontSize: 14,
          },
  textMultiline: {
  width: '90%',
              fontSize: 14,
          },
            card: {
              backgroundColor: 'white',
 margin: 5,
 padding: 5,
            },
})