import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExercisesCalendarScreen from '../components/common/exercises/ExercisesCalendarScreen';
import ExerciseDetailScreen from '../components/common/exercises/ExerciseDetailScreen';
import ExerciseListScreen from '../components/common/exercises/ExerciseListScreen';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Navegador de abas para as principais telas de exercícios
const ExercisesTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Lista') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Calendário') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#0891b2',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Lista" component={ExerciseListScreen} />
      <Tab.Screen name="Calendário" component={ExercisesCalendarScreen} />
    </Tab.Navigator>
  );
};

// Navegador principal que inclui as abas e a tela de detalhes
const ExercisesNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0891b2',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="ExercisesTabs" 
        component={ExercisesTabNavigator} 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="ExerciseDetail" 
        component={ExerciseDetailScreen} 
        options={{ title: 'Detalhes do Exercício' }}
      />
    </Stack.Navigator>
  );
};

export default ExercisesNavigator; 