import React from 'react';
import { View, Text } from 'react-native';
// import BottomTap from '../../components/Navigations/BottomTabNavigation/BottomTab';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import Dashboard from '../Dashboard/Dashboard';
import Icon from '../../components/Icon/Icon';
import home from '../../Assets/Icons/home.png';
import add from '../../Assets/Icons/add.png';
import user from '../../Assets/Icons/user.png';

export default function Home() {
 const Add = () => {
  return (
   <View>
    <Text> Add </Text>
   </View>
  );
 }
  
    return (
        <Tab.Navigator
        screenOptions={{
            tabBarStyle: {backgroundColor:'black', borderTopLeftRadius:35, borderTopRightRadius: 35, },
            tabBarShowLabel: false,
            headerShown: false
          }}
        >
          <Tab.Screen name="H" 
          component={Dashboard}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon icon={home} style={{width:30, height:30}} />
            ),
          
          }}

          />



           <Tab.Screen name="Add" 
          component={Add}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon icon={add} style={{width:30, height:30}} />
            ),
          
          }}

          />



           <Tab.Screen name="user" 
          component={Add}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon icon={user} style={{width:30, height:30}} />
            ),
          
          }}

          />
         
        </Tab.Navigator>
      )
}
