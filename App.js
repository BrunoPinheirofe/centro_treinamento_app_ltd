

import { View,Text } from 'react-native';
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import MainNavigation from './src/navigations/main.navigation';
import { NavigationContainer } from '@react-navigation/native';
import AuthProvider from './src/contexts/AuthContext';
export default function App() {
  return (
    <GluestackUIProvider mode="light"><AuthProvider>
        <MainNavigation/>
      </AuthProvider></GluestackUIProvider>
  );
}