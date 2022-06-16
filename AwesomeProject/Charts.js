import React, { Component } from 'react'
import {ScrollView, View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import * as RootNavigation from './RootNavigation';
import PureChart from 'react-native-pure-chart';

class Charts extends Component {
   state = {
         sampleData : [30, 200, 170, 250, 10],
         multiSeriesData:  [
                       {
                         seriesName: 'series1',
                         data: [
                           {x: '2018-02-01', y: 30},
                           {x: '2018-02-02', y: 200},
                           {x: '2018-02-03', y: 170},
                           {x: '2018-02-04', y: 250},
                           {x: '2018-02-05', y: 10}
                         ],
                         color: 'orangered'
                       },
                       {
                         seriesName: 'series2',
                         data: [
                           {x: '2018-02-01', y: 50},
                           {x: '2018-02-02', y: 100},
                           {x: '2018-02-03', y: 140},
                           {x: '2018-02-04', y: 550},
                           {x: '2018-02-05', y: 40}
                         ],
                         color: 'seagreen'
                       }
                       ],
  pieData: [
               {
                 value: 50,
                 label: 'Marketing',
                 color: 'orangered',
               }, {
                 value: 40,
                 label: 'Sales',
                 color: 'royalblue'
               }, {
                 value: 25,
                 label: 'Support',
                 color: 'seagreen'
               }

             ],
   }

   render() {
      return (
        <ScrollView>
         <View style={styles.container}>
         <PureChart type={'bar'}
                                          data={this.state.multiSeriesData}
                                          width={'100%'}
                                           height={100}
                                          xAxisColor={'royalblue'}
                                          yAxisColor={'royalblue'}
                                          xAxisGridLineColor={'gray'}
                                          yAxisGridLineColor={'gray'}
                                          labelColor={'royalblue'}
                                          numberOfYAxisGuideLine={10} />
                    <PureChart type={'pie'}
                      data={this.state.pieData}
                      width={'100%'}
                      height={100}
                      onPress={(a) => {
                        console.log('onPress', a)
                      }}
                      xAxisColor={'black'}
                      yAxisColor={'red'}
                      xAxisGridLineColor={'red'}
                      yAxisGridLineColor={'red'}
                      minValue={10}
                      labelColor={'red'}
                      showEvenNumberXaxisLabel={false}
                      customValueRenderer={(index, point) => {

                      }}
                      />
         <PureChart type={'line'}
                     data={this.state.multiSeriesData}
                     width={'100%'}
                     height={100}
                     onPress={(a) => {
                       console.log('onPress', a)
                     }}
                     xAxisColor={'royalblue'}
                     yAxisColor={'royalblue'}
                     xAxisGridLineColor={'gray'}
                     yAxisGridLineColor={'gray'}
                     labelColor={'royalblue'}
                     showEvenNumberXaxisLabel={true}
                     customValueRenderer={(index, point) => {

                     }}
                     />


                                          </View>

           </ScrollView>
      );
   }
}
export default Charts

const styles = StyleSheet.create({
container: {
       flexDirection: 'column',
        justifyContent: 'center',
       alignItems: 'center',
       padding:5,
         margin:5,
},
})