


import React from 'react';
import { Alert, SafeAreaView } from 'react-native';
import { Button, ButtonText } from '@/components/ui/button';
import { useAuth } from '../../../contexts/AuthContext';
import CardPerfil from './CardPerfil';

const ProfileScreen = ({
  children
}) => {
  const {
    user
  } = useAuth();
  return <SafeAreaView>
    
    <CardPerfil user={user}/>
    <Button onPress={() => {
      Alert.alert('editar perfil');
    }} style={{
      margin: '10'
    }} variant='outline'>
      <ButtonText>Editar Perfil</ButtonText>
    </Button>
  <Button onPress={() => {
    Alert.alert('sair');
  }} style={{
    margin: '10'
  }} variant='solid'>
    <ButtonText>Sair</ButtonText>
  </Button>
  </SafeAreaView >;
};
export default ProfileScreen;