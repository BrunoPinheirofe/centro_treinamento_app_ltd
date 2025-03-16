import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AlunoDashboardScreen from '../screens/aluno/AlunoDashboardScreen';
import AlunoProfileScreen from '../screens/aluno/AlunoProfileScreen';
import AlunoPlanScreen from '../screens/aluno/AlunoPlanScreen';
import AlunoTreinoScreen from '../screens/aluno/AlunoTreinoScreen';


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
        name="Home"
        component={AlunoDashboardScreen}
        options={{ tabBarLabel: 'Dashboard'  }}
      />
        <Tab.Screen
          name="Plan"
          component={AlunoPlanScreen}
          options={{ tabBarLabel: 'Plan' }}
        />
        <Tab.Screen
        name = "Treinos"
        component={AlunoTreinoScreen}
        options={{tabBarLabel: 'Treinos'}}
        />
      <Tab.Screen
        name="Perfil do usuário"
        component={AlunoProfileScreen}
        options={{ tabBarLabel: 'Perfil' }}
      />
    </Tab.Navigator>
  );
};

export default AlunoNavigator;
