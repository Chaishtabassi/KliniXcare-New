import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboardscreen from '../Screens/Dashboardscreen';
import OPDscreen from '../Screens/OPDscreen';
import Pharmacyscreen from '../Screens/Pharmacyscreen';
import Pathologyscreen from '../Screens/Pathologyscreen';
import Radiologyscreen from '../Screens/Radiologyscreen';

const Bottomnavigation = () => {

const Clienttab = createBottomTabNavigator();

  return (
    <Clienttab.Navigator
    screenOptions={({ route }) => ({
        tabBarStyle: {height:50 },
        tabBarInactiveTintColor: '#7d7d7d',
        tabBarActiveTintColor:'#000000',
        tabBarLabelStyle: { fontSize: 13 },
      })}
    >
          <Clienttab.Screen
            name='Dashboard'
            component={Dashboardscreen}
            options={{
                headerShown:false,
                tabBarLabel:'Home',
                tabBarIcon: ({ color, size, focused }) => (
                   <Image  style={{ height: 40, width: 40, tintColor: focused ? '#000000' : '#7d7d7d' }} source={require('../Assets/ic_home.png')}/>
                )
            }}
            />
               <Clienttab.Screen
            name='OPD'
            component={OPDscreen}
            options={{
                headerShown:false,
                tabBarLabel:'OPD',
                tabBarIcon:({color,size,focused})=>(
                   <Image style={{height:27,width:27, tintColor: focused ? '#000000' : '#7d7d7d' }} source={require('../Assets/ic_opd_new.png')}/>
                )
            }}
            />
               <Clienttab.Screen
            name='Pharmacy'
            component={Pharmacyscreen}
            options={{
                headerShown:false,
                tabBarLabel:'Pharmacy',
                tabBarIcon:({color,size,focused})=>(
                   <Image style={{height:27,width:27,tintColor: focused ? '#000000' : '#7d7d7d'}} source={require('../Assets/ic_pharmacy_new.png')}/>
                )
            }}
            />
               <Clienttab.Screen
            name='Pathology'
            component={Pathologyscreen}
            options={{
                headerShown:false,
                tabBarLabel:'Pathology',
                tabBarIcon:({color,size,focused})=>(
                   <Image style={{height:27,width:27,tintColor: focused ? '#000000' : '#7d7d7d'}} source={require('../Assets/ic_pathology_new.png')}/>
                )
            }}
            />
               <Clienttab.Screen
            name='Radiology'
            component={Radiologyscreen}
            options={{
                headerShown:false,
                tabBarLabel:'Radiology',
                tabBarIcon:({color,size,focused})=>(
                   <Image style={{height:27,width:27,tintColor: focused ? '#000000' : '#7d7d7d'}} source={require('../Assets/ic_radiology_new.png')}/>
                )
            }}
            />
    </Clienttab.Navigator>
  )
}

export default Bottomnavigation