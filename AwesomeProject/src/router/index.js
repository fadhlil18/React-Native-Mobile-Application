// In App.js in a new project
import * as React from 'react';
import { View, Text,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Login from '../pages/Login' ;
import Daftar from '../pages/Daftar' ;
import Editpro from '../pages/Editpro' ;
import Update from '../pages/Update' ;
import Tambah from '../pages/Tambah' ;
import Home from '../pages/Home' ;
import Akun from '../pages/Akun' ;
import Splashscreen from '../pages/Splashscreen';
import GPS from '../pages/GPS';
import Detail from '../pages/Detail';
import { Account1,Account2,Home1,Home2} from '../assets'




const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();


  function Router() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splashscreen">
        <Stack.Screen name="Splashscreen" component={Splashscreen} options={{ headerShown: false }}/> 
         <Stack.Screen options={{ headerShown: false }}  name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="Daftar" component={Daftar} /> 
        <Stack.Screen options={{ headerShown: false }} name="Home" component={Tab1} />
        <Stack.Screen options={{ headerShown: false }} name="Update" component={Update} />
        <Stack.Screen options={{ headerShown: false }} name="Tambah" component={Tambah} />
        <Stack.Screen options={{ headerShown: false }} name="Detail" component={Detail} />  
        <Stack.Screen options={{ headerShown: false }} name="Editpro" component={Editpro} />
        <Stack.Screen options={{ headerShown: false }} name="Account" component={Tab1} />  
         <Stack.Screen options={{ headerShown: false }} name="GPS" component={GPS} />  
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

export default Router;

export function Tab1() {
  return (
    <Tab.Navigator
    initialRouteName="Home"
    shifting={false}
    barStyle={{backgroundColor:'white',paddingTop: -25}}
    activeColor="#0290F8"
    inactiveColor="#676767">
         <Tab.Screen options={{ headerShown: false }} name="Home" component={Home}
         options={{
           tabBarlabel:'Home',
           tabBarIcon: ({color}) => (
        <View style={{ marginTop : -4}}>
          {
            color = "#0290F8"?
            <Image style ={{height:25,width:25,tintcolor:"#0290F8"}}source ={Home1} />
            :
            <Image style ={{height:25,width:25}}source ={Home2}/>

          }
          </View>
          )
        }} 
        />
        <Tab.Screen  name="Akun" component={Akun}
           options={{
            tabBarlabel:'Akun',
            tabBarIcon: ({color}) => (
         <View style={{ marginTop:-4}}>
           {
             color = "#0290F8" ?
             <Image style ={{height:25,width:25}}source ={Account1}/>
             :
             <Image style ={{height:25,width:25}}source ={Account2}/>
           }
           </View>
           )
         }}  />
         
      </Tab.Navigator>
  );
}