import {AppRegistry} from 'react-native';
import React,{Component } from 'react';
import {name as appName} from './app.json';
import { Button, View, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {navigationRef} from './RootNavigation';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-reanimated'
import App from './App';
import Home from './Home';
import Blog from './Blog';
import Charts from './Charts';
import Camera from './Camera';
import FileBrowser from './FileBrowser';
import Payment from './Payment';
import UserScreen from './pages/UserScreen';
import RegisterUser from './pages/RegisterUser';
import UpdateUser from './pages/UpdateUser';
import ViewUser from './pages/ViewUser';
import ViewAllUser from './pages/ViewAllUser';
import DeleteUser from './pages/DeleteUser';

import {LogBox} from "react-native";

LogBox.ignoreLogs([
"ViewPropTypes will be removed",
"ColorPropType will be removed",
"ViewPropTypes will be removed from React Native",
"Found screens with the same name nested inside one another.",
"Animated: `useNativeDriver` was not specified.",
"componentWillReceiveProps has been renamed, and is not recommended for use.",
"componentWillMount has been renamed, and is not recommended for use.",
"AsyncStorage has been extracted from react-native core and will be removed in a future release."
])

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator()
const mainConfig = {
    // configuration for this stack
    initialRouteName: "App",
}

 DrawerRoot = () =>  {
  return (
     <Drawer.Navigator>
             <Drawer.Screen name="Home " component={Home} />
             <Drawer.Screen name="User Screen" component={UserScreen}/>
             <Drawer.Screen name="Blog" component={Blog}/>
             <Drawer.Screen name="Charts" component={Charts}/>
             <Drawer.Screen name="Camera" component={Camera}/>
             <Drawer.Screen name="File Manager" component={FileBrowser}/>
             <Drawer.Screen name="Payment" component={Payment}/>
           </Drawer.Navigator>
  );
}

const MainApp = (props) => (
    <NavigationContainer ref={navigationRef}>
     <Stack.Navigator {...mainConfig}>
                 <Stack.Screen name="App" component={App} options={{headerShown: false}}/>
                 <Stack.Screen name="Home" component={DrawerRoot} options={{headerShown: false}}/>
                 <Stack.Screen name="UserScreen" component={UserScreen}/>
                  <Stack.Screen name="Charts" component={Charts}/>
                   <Stack.Screen name="Camera" component={Camera}/>
                <Stack.Screen name="FileBrowser" component={FileBrowser}/>
                     <Stack.Screen name="Payment" component={Payment}/>
                 <Stack.Screen name="Register" component={RegisterUser}/>
                 <Stack.Screen name="View" component={ViewUser}/>
                 <Stack.Screen name="ViewAll" component={ViewAllUser}/>
                 <Stack.Screen name="Update" component={UpdateUser}/>
                 <Stack.Screen name="Delete" component={DeleteUser}/>
                       </Stack.Navigator>
    </NavigationContainer>
)

const styles = StyleSheet.create({
    component: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

AppRegistry.registerComponent(appName, () => MainApp);
