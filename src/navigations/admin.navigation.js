import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AdminDashboardScreen from '../screens/admin/AdminDashboardScreen';
import AdminStudentScreen from '../screens/admin/AdminDashboardScreen/AdminStudentScreen';
import AdminCreateWorking from '../screens/admin/AdminDashboardScreen/AdminCreateWorking';
import AdminAvaliation from '../screens/admin/AdminDashboardScreen/AdminAvaliation';
import AdminLogout from '../screens/admin/AdminDashboardScreen/AdminLogout';
import AdminEmployeeScreen from '../screens/admin/AdminDashboardScreen/AdminEmployeeScreen';
import { Users, Dumbbell, ScrollText, LogOut, UsersRound } from 'lucide-react-native';


const Tab = createBottomTabNavigator();

const AdminNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        tabBarStyle: { backgroundColor: '#2B2B2B' },
        tabBarActiveTintColor: '#FF0000',
        tabBarInactiveTintColor: '#FFFFFF',
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={AdminDashboardScreen} 
        options={{ 
          tabBarLabel: 'Dashboard', 
          headerStyle: {backgroundColor: '#2B2B2B'},
          headerTintColor: '#FFFFFF',
        }} 
      />
      <Tab.Screen 
        name="Alunos" 
        component={AdminStudentScreen} 
        options={{ 
          tabBarLabel: 'Alunos',
          headerStyle: {backgroundColor: '#2B2B2B'},
          tabBarIcon: ({color, size}) => <Users color={color} size={size}/>,
          headerTintColor: '#FFFFFF',
        }} 
      />
       <Tab.Screen 
        name="Funcionários" 
        component={AdminEmployeeScreen} 
        options={{ 
          tabBarLabel: 'Funcionários',
          headerStyle: {backgroundColor: '#2B2B2B'},
          tabBarIcon: ({color, size}) => <UsersRound color={color} size={size}/>,
          headerTintColor: '#FFFFFF',
        }} 
      />
      <Tab.Screen 
        name="Criar Treino" 
        component={AdminCreateWorking} 
        options={{
          headerShown: true,
          tabBarLabel: 'C.Treino', 
          headerStyle: {backgroundColor: '#2B2B2B'},
          tabBarIcon: ({color, size}) => <Dumbbell color={color} size={size}/>,
          headerTintColor: '#FFFFFF',
        }} 
      />
        <Tab.Screen 
        name="Ficha de Avaliação" 
        component={AdminAvaliation} 
        options={{
          headerShown: true,
          tabBarLabel: 'Ficha Av.', 
          headerStyle: {backgroundColor: '#2B2B2B'},
          tabBarIcon: ({color, size}) => <ScrollText color={color} size={size}/>,
          headerTintColor: '#FFFFFF',
        }} 
      />
      <Tab.Screen 
        name="Logout" 
        component={AdminLogout} 
        options={{
          headerShown: false,
          tabBarLabel: 'Sair', 
          headerStyle: {backgroundColor: '#2B2B2B'},
          tabBarIcon: ({color, size}) => <LogOut color={color} size={size}/>,
          headerTintColor: '#FFFFFF',
        }} 
      />
      
      
     
    </Tab.Navigator>
  );
};

export default AdminNavigator;
