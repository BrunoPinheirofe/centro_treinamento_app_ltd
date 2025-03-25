import React, { useState } from 'react';
import { SafeAreaView, View, Text, Input, InputField, Button, ButtonText ,ScrollView, Pressable } from '@gluestack-ui/themed';
import { ChevronDown, ChevronUp } from 'lucide-react-native';

const AdminAvaliation = () => {
  const [isMetricsOpen, setIsMetricsOpen] = useState(true);
  const [isIndicesOpen, setIsIndicesOpen] = useState(true);

  return (
    <SafeAreaView className="flex-1 bg-white p-4">
      <ScrollView>
        {/* Seção de Métricas */}
        <Pressable 
          className="flex-row justify-between items-center bg-gray-300 p-3 rounded-lg mb-2"
          onPress={() => setIsMetricsOpen(!isMetricsOpen)}
        >
          <Text className="text-lg font-bold text-black">Métricas</Text>
          {isMetricsOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </Pressable>
        {isMetricsOpen && (
          <View className="space-y-2">
            {['Data', 'Peso', 'Cintura', 'Braço D.C', 'Braço E.C', 'Braço D', 'Braço E', 'Coxa D', 'Coxa E', 'PT. D', 'PT. E'].map((placeholder, index) => (
              <Input key={index} className="border border-gray-400 p-2 rounded-lg">
                <InputField placeholder={placeholder} className="text-black" />
              </Input>
            ))}
          </View>
        )}

        {/* Seção de Índices e Percentuais */}
        <Pressable 
          className="flex-row justify-between items-center bg-gray-300 p-3 rounded-lg mt-4 mb-2"
          onPress={() => setIsIndicesOpen(!isIndicesOpen)}
        >
          <Text className="text-lg font-bold text-black">Índices e Percentuais</Text>
          {isIndicesOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </Pressable>
        {isIndicesOpen && (
          <View className="space-y-2">
            {["Índice de Massa Corporal - IMC", "Percentual de Gordura Corporal (BODY FAT)", "Percentual de Músculo Esquelético (MUSCLE)", "Metabolismo em Repouso (RM)", "Idade Biológica (BODY AGE)", "Gordura Visceral (VISCERAL FAT)"].map((placeholder, index) => (
              <Input key={index} className="border border-gray-400 p-2 rounded-lg">
                <InputField placeholder={placeholder} className="text-black" />
              </Input>
            ))}
            <Text className="text-sm text-red-500">Obs: (-) o índice está Abaixo do peso</Text>
          </View>
        )}

        {/* Botão Atualizar */}
        <View classname="">
          <Button className="bg-[#ED5359] mt-2 items-center p-3 rounded-lg" onPress={() => alert("Implementar Isso")}>
            <ButtonText className="text-xl font-bold text-white">Enviar Avaliação</ButtonText>
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AdminAvaliation;
