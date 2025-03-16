import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InstrutorDashboardScreen from '../screens/instrutor/InstrutorDashboardScreen';

const Tab = createBottomTabNavigator();

const InstrutorNavigator = () => {
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
        name="AlunoDashboard"
        component={InstrutorDashboardScreen}
        options={{ tabBarLabel: 'Dashboard' }}
      />
     
    </Tab.Navigator>
  );
};

export default InstrutorNavigator;
