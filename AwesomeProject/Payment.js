import React, { Component } from 'react'
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
    TouchableOpacity,
    Image,
    Alert,
} from 'react-native';

import RazorpayCheckout from 'react-native-razorpay';

class Payment extends Component {
   render() {
  return (
     <View style={styles.container}>
          <ScrollView>
            <View style={{alignItems:'center', marginHorizontal:30}}>
              <Image style={styles.productImg} source={{uri:"https://w7.pngwing.com/pngs/940/431/png-transparent-gray-polo-shirt-t-shirt-polo-shirt-polo-shirt-tshirt-angle-white.png"}}/>
              <Text style={styles.name}>Super Soft T-Shirt</Text>
              <Text style={styles.price}>$ 12.22</Text>
              <Text style={styles.description}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Donec quam felis, ultricies nec
              </Text>
            </View>
            <View style={styles.starContainer}>
              <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
              <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
              <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
              <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
              <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
            </View>
            <View style={styles.contentColors}>
              <TouchableOpacity style={[styles.btnColor, {backgroundColor:"#00BFFF"}]}></TouchableOpacity>
              <TouchableOpacity style={[styles.btnColor, {backgroundColor:"#FF1493"}]}></TouchableOpacity>
              <TouchableOpacity style={[styles.btnColor, {backgroundColor:"#00CED1"}]}></TouchableOpacity>
              <TouchableOpacity style={[styles.btnColor, {backgroundColor:"#228B22"}]}></TouchableOpacity>
              <TouchableOpacity style={[styles.btnColor, {backgroundColor:"#20B2AA"}]}></TouchableOpacity>
              <TouchableOpacity style={[styles.btnColor, {backgroundColor:"#FF4500"}]}></TouchableOpacity>
            </View>
            <View style={styles.contentSize}>
              <TouchableOpacity style={styles.btnSize}><Text>S</Text></TouchableOpacity>
              <TouchableOpacity style={styles.btnSize}><Text>M</Text></TouchableOpacity>
              <TouchableOpacity style={styles.btnSize}><Text>L</Text></TouchableOpacity>
              <TouchableOpacity style={styles.btnSize}><Text>XL</Text></TouchableOpacity>
            </View>
            <View style={styles.separator}></View>
         <Button
                                         title={'Pay with Razorpay'}
                                         onPress={() => {
                                           var options = {
                                             description: 'Credits towards consultation',
                                             image: 'https://i.imgur.com/3g7nmJC.png',
                                             currency: 'INR',
                                             key: 'rzp_test_1DP5mmOlF5G5ag', // Your api key
                                             amount: '5000',
                                             name: 'foo',
                                             prefill: {
                                               email: 'void@razorpay.com',
                                               contact: '9561078733',
                                               name: 'Razorpay Software',
                                             },
                                             theme: {color: 'royalblue'},
                                           };
                                           RazorpayCheckout.open(options)
                                             .then(data => {
                                               // handle success
                                               alert(`Success: ${data.razorpay_payment_id}`);
                                             })
                                             .catch(error => {
                                               // handle failure
                                               alert(`Error: ${error.code} | ${error.description}`);
                                             });
                                         }}
                                       />
          </ScrollView>
        </View>
  );
};
}
export default Payment;


const styles = StyleSheet.create({
    container:{
       flex:1,
       margin:5,
     },
     productImg:{
       width:200,
       height:200,
     },
     name:{
       fontSize:20,
       color:"#696969",
       fontWeight:'bold'
     },
     price:{
       marginTop:10,
       fontSize:18,
       color:"green",
       fontWeight:'bold'
     },
     description:{
       textAlign:'center',
       marginTop:10,
       color:"#696969",
     },
     star:{
       width:40,
       height:40,
     },
     btnColor: {
       height:30,
       width:30,
       borderRadius:30,
       marginHorizontal:3
     },
     btnSize: {
       height:40,
       width:40,
       borderRadius:40,
       borderColor:'#778899',
       borderWidth:1,
       marginHorizontal:3,
       backgroundColor:'white',

       flexDirection: 'row',
       justifyContent: 'center',
       alignItems: 'center',
     },
     starContainer:{
       justifyContent:'center',
       marginHorizontal:30,
       flexDirection:'row',
       marginTop:20
     },
     contentColors:{
       justifyContent:'center',
       marginHorizontal:30,
       flexDirection:'row',
       marginTop:20
     },
     contentSize:{
       justifyContent:'center',
       marginHorizontal:30,
       flexDirection:'row',
       marginTop:20
     },
     separator:{
       height:2,
       backgroundColor:"#eeeeee",
       marginTop:20,
       marginHorizontal:30
     },
     shareButton: {
       marginTop:10,
       height:45,
       flexDirection: 'row',
       justifyContent: 'center',
       alignItems: 'center',
       borderRadius:30,
       backgroundColor: "#00BFFF",
     },
     shareButtonText:{
       color: "#FFFFFF",
       fontSize:20,
     },
     addToCarContainer:{
       marginHorizontal:30
     }
})