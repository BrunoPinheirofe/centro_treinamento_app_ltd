import React, { useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView, View, Text, Input, InputSlot , InputField, Button } from "@gluestack-ui/themed";
import {  Icon, AddIcon,  } from "@/components/ui/icon";
import { Pencil, Trash2, Search , } from 'lucide-react-native';

const AdminEmployeeScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Dados mockados
  const alunos = [
    { id: "1", name: "Bruno Pinheiro", email: "bruno2013pinheiro@gmail.com", cargo:"Admin"},
    { id: "2", name: "Gabriel Leite", email: "gabrieljv2019@gmail.com",cargo:"Treinador" },
    { id: "3", name: "Filipe Neves", email: "filipe@gmail.com",cargo:"Treinador" },
  ];

  const renderAluno = ({ item }) => (
    <View className="bg-[#DFDFDF] rounded-lg flex-row items-center justify-between my-2">
      <View className="flex-row items-center space-x-3 mx-5 ">
        <View>
          <Text className="text-lg font-semibold">{item.name}</Text>
          <Text className="text-gray-600">{item.email} - {item.cargo}</Text>
        </View>
      </View>
      <View className="flex-col items-center p-5">
          <TouchableOpacity onPress={() => alert("Implementar Isso")}>
            
          <Trash2 size={20} color={'red'} />
          </TouchableOpacity>
          <TouchableOpacity className="mt-5 " onPress={() => alert("Implementar Isso")}>
            <Pencil size={20} color={'black'} />
          </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-white p-4">
      {/* Barra de Pesquisa */}
      <View className="mb-4">
      <Input className="bg-[#D9D9D9] rounded-lg h-14 flex-row items-center px-4">
        <InputSlot>
          <Search size={20} color={'#3D3C41'}/>
        </InputSlot>
        <InputField
          placeholder="Pesquisar"
          placeholderTextColor="#28292E"
          value={searchQuery}
          onChangeText={setSearchQuery}
          className="text-black flex-1 text-xl"
        />
      </Input>
      </View>

      {/* Lista de Alunos */}
      <FlatList
        data={alunos}
        keyExtractor={(item) => item.id}
        renderItem={renderAluno}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

      {/* Botão Flutuante */}
      <Button className="absolute bottom-6 right-6 bg-red-500 w-16 h-16 rounded-full flex items-center justify-center " onPress={() => alert("Implementar Modal")}>
          <Icon as={AddIcon} className="text-white m-2 w-7 h-7"/>
      </Button>
    </SafeAreaView>
  );
};

export default AdminEmployeeScreen;

{/* Humilhai-vos perante o Senhor, e ele vos exaltará. Tiago 4:10*/}
