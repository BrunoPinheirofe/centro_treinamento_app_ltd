import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AdiminDashboardScreen from '../screens/admin/AdminDashboardScreen';


const Tab = createBottomTabNavigator();

const AdminNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#2B2B2B' },
        tabBarActiveTintColor: '#FF0000',
        tabBarInactiveTintColor: '#FFFFFF',
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={AdiminDashboardScreen} 
        options={{ tabBarLabel: 'Dashboard', }} 
      />
     
    </Tab.Navigator>
  );
};

export default AdminNavigator;
