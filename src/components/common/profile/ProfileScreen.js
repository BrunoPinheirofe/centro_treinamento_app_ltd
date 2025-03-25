import React from 'react';
import { Alert, SafeAreaView } from 'react-native';
import { Button, ButtonText } from '@/components/ui/button';
import { useAuth } from '../../../contexts/AuthContext';
import CardPerfil from './CardPerfil';
import { Text } from '@/components/ui/text';
import { ScrollView } from 'react-native';
import { Icon, EditIcon, InfoIcon } from '@/components/ui/icon';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';


const ProfileScreen = () => {
  const { user } = useAuth();

  return (
    <SafeAreaView className="flex-1 p-4 bg-background">
      <CardPerfil user={user}/>

        <Text className="pt-5 text-3xl font-bold text-center mb-4">Minhas informações</Text>
      <ScrollView className="border border-[#bdbbbb] rounded-lg p-4 mx-2 my-4 pb-20 " contentContainerStyle={{ paddingBottom: 20}}>
        <Text className="font-bold">Nome completo</Text>
        <Text className="border border-gray-300 rounded-md p-2 mb-2">Joãozinho da Silva</Text>
        <Text className="font-bold">Data de nascimento</Text>
        <Text className="border border-gray-300 rounded-md p-2 mb-2">01/01/2000</Text>
        <Text className="font-bold">Sexo</Text>
        <Text className="border border-gray-300 rounded-md p-2 mb-2">Masculino</Text>
        <Text className="font-bold">E-mail</Text>
        <Text className="border border-gray-300 rounded-md p-2 mb-2">joao@example.com</Text>
        <Text className="font-bold">Celular</Text>
        <Text className="border border-gray-300 rounded-md p-2 mb-2">(99) 9 9999-9999</Text>
      </ScrollView>

      <Button onPress={() => Alert.alert('Editar perfil')} className="mx-2 my-2 bg-[#ED5359] border-[#ed5359] rounded-2xl">
        <ButtonText>Editar Perfil</ButtonText>
      </Button>
      <Button onPress={() => Alert.alert('Sair')} className="mx-2 my-2 bg-[#ED5359] border-[#ed5359] rounded-2xl">
        <ButtonText>Sair</ButtonText>
      </Button>
    </SafeAreaView>
  );
};

export default ProfileScreen;
