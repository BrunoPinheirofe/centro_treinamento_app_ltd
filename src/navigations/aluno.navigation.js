import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AlunoProfileScreen from '../screens/aluno/AlunoProfileScreen';
import AlunoPlanScreen from '../screens/aluno/AlunoPlanScreen';
import AlunoTreinoScreen from '../screens/aluno/AlunoTreinoScreen';
import { User, Dumbbell, CircleDollarSign } from 'lucide-react-native';

const Tab = createBottomTabNavigator();

const AlunoNavigator = () => {
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
      name = "Treinos"
      component={AlunoTreinoScreen}
      options={{
        tabBarLabel: 'Treinos',
        headerStyle: { backgroundColor: '#2B2B2B' },
        tabBarIcon: ({color, size}) => <Dumbbell color={color} size={size}/>,
        headerTintColor: '#FFFFFF',
        headerTitleAlign: 'left',
      }}
      />
      <Tab.Screen
        name="Financeiro"
        component={AlunoPlanScreen}
        options={{ 
          tabBarLabel: 'Financeiro',
          headerStyle: { backgroundColor: '#2B2B2B' },
          tabBarIcon: ({color, size}) => <CircleDollarSign color={color} size={size}/>,
          headerTintColor: '#FFFFFF',
          headerTitleAlign: 'left',
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={AlunoProfileScreen}
        options={{ 
          tabBarLabel: 'Perfil',
          tabBarIcon: ({color, size}) => <User color={color} size={size}/>,
          headerStyle: { backgroundColor: '#2B2B2B' },
          headerTintColor: '#FFFFFF',
          headerTitleAlign: 'left', 
        }}
      />
    </Tab.Navigator>
  );
};

export default AlunoNavigator;
