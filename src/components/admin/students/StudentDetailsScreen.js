import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Center, VStack, HStack, Box, Divider } from '@gluestack-ui/themed';
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { Ionicons } from '@expo/vector-icons';
import { Avatar, AvatarFallbackText, AvatarImage } from "@/components/ui/avatar";

const StudentDetailsScreen = ({ route, navigation }) => {
  const { studentId } = route.params;
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('info');
  
  // Dados de exemplo - em um app real, estes viriam de uma API
  const studentData = {
    id: 1, 
    nome: 'Ana Silva', 
    email: 'ana.silva@email.com', 
    telefone: '(11) 98765-4321', 
    status: 'Ativo', 
    plano: 'Premium',
    dataInicio: '10/01/2023',
    dataRenovacao: '10/01/2024',
    ultimoPagamento: '10/10/2023',
    valorMensalidade: 'R$ 129,90',
    endereco: {
      rua: 'Av. Paulista, 1000',
      bairro: 'Bela Vista',
      cidade: 'São Paulo',
      estado: 'SP',
      cep: '01310-100'
    },
    dadosPessoais: {
      dataNascimento: '15/05/1990',
      cpf: '123.456.789-00',
      genero: 'Feminino',
      altura: '1,65m',
      peso: '62kg'
    },
    turmas: [
      { id: 1, nome: 'Musculação Avançada', horario: 'Seg/Qua/Sex 19:00', instrutor: 'Ricardo Almeida' },
      { id: 2, nome: 'Yoga', horario: 'Ter/Qui 18:00', instrutor: 'Camila Santos' }
    ],
    historicoPagamentos: [
      { id: 1, data: '10/10/2023', valor: 'R$ 129,90', status: 'Pago', metodo: 'Cartão de Crédito' },
      { id: 2, data: '10/09/2023', valor: 'R$ 129,90', status: 'Pago', metodo: 'Cartão de Crédito' },
      { id: 3, data: '10/08/2023', valor: 'R$ 129,90', status: 'Pago', metodo: 'Boleto Bancário' }
    ],
    avaliacoesFisicas: [
      { id: 1, data: '15/01/2023', peso: '64kg', percentualGordura: '28%', imc: '23.5' },
      { id: 2, data: '15/04/2023', peso: '63kg', percentualGordura: '26%', imc: '23.1' },
      { id: 3, data: '15/07/2023', peso: '62kg', percentualGordura: '25%', imc: '22.8' }
    ],
    imageUrl: 'https://randomuser.me/api/portraits/women/1.jpg'
  };
  
  useEffect(() => {
    // Simula carregamento de dados
    setTimeout(() => {
      setStudent(studentData);
      setLoading(false);
    }, 500);
  }, [studentId]);
  
  const handleStatusChange = (newStatus) => {
    Alert.alert(
      "Alterar Status",
      `Deseja alterar o status do aluno para ${newStatus}?`,
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        { 
          text: "Confirmar", 
          onPress: () => {
            // Em um app real, você enviaria uma requisição para a API
            setStudent({...student, status: newStatus});
          }
        }
      ]
    );
  };
  
  const handleDeleteStudent = () => {
    Alert.alert(
      "Excluir Aluno",
      "Tem certeza que deseja excluir este aluno? Esta ação não pode ser desfeita.",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        { 
          text: "Excluir", 
          onPress: () => {
            // Em um app real, você enviaria uma requisição para a API
            navigation.goBack();
          },
          style: "destructive"
        }
      ]
    );
  };
  
  const getStatusColor = (status) => {
    switch(status) {
      case 'Ativo': return '#10b981';
      case 'Inativo': return '#ef4444';
      case 'Pendente': return '#f59e0b';
      default: return '#6b7280';
    }
  };
  
  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <Center flex={1}>
          <Text>Carregando...</Text>
        </Center>
      </SafeAreaView>
    );
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space="md" py="$4">
          {/* Cabeçalho com informações básicas */}
          <Box bg="$backgroundLight50" p="$4" borderRadius="$lg" shadow="$2">
            <HStack space="md" alignItems="center">
              <Avatar size="xl">
                <AvatarFallbackText>{student.nome}</AvatarFallbackText>
                <AvatarImage source={{ uri: student.imageUrl }} />
              </Avatar>
              
              <VStack flex={1}>
                <HStack justifyContent="space-between" alignItems="center">
                  <Heading size="md">{student.nome}</Heading>
                  <Box 
                    bg={getStatusColor(student.status)} 
                    px="$2" 
                    py="$1" 
                    borderRadius="$full"
                  >
                    <Text color="white" fontSize="$xs">{student.status}</Text>
                  </Box>
                </HStack>
                
                <Text fontSize="$sm" color="$textLight700">{student.email}</Text>
                <Text fontSize="$sm" color="$textLight700">{student.telefone}</Text>
                <Text fontSize="$sm" mt="$1">Plano: <Text fontWeight="$bold">{student.plano}</Text></Text>
                <Text fontSize="$xs" color="$textLight500">Aluno desde: {student.dataInicio}</Text>
              </VStack>
            </HStack>
            
            <HStack space="sm" mt="$4">
              <Button 
                flex={1} 
                size="sm" 
                leftIcon={<Ionicons name="create" size={16} color="white" />}
                onPress={() => navigation.navigate('EditStudent', { student })}
              >
                Editar
              </Button>
              <Button 
                flex={1} 
                size="sm" 
                variant="outline"
                leftIcon={<Ionicons name="mail" size={16} color="#0891b2" />}
                onPress={() => Alert.alert("Enviar Email", "Funcionalidade a ser implementada")}
              >
                Email
              </Button>
            </HStack>
          </Box>
          
          {/* Abas de navegação */}
          <HStack bg="$backgroundLight100" borderRadius="$lg" p="$1">
            <TouchableOpacity 
              style={[
                styles.tabButton, 
                activeTab === 'info' && { backgroundColor: '#0891b2' }
              ]}
              onPress={() => setActiveTab('info')}
            >
              <Text 
                color={activeTab === 'info' ? "white" : "$textLight700"}
                fontWeight={activeTab === 'info' ? "$bold" : "$normal"}
              >
                Informações
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[
                styles.tabButton, 
                activeTab === 'payments' && { backgroundColor: '#0891b2' }
              ]}
              onPress={() => setActiveTab('payments')}
            >
              <Text 
                color={activeTab === 'payments' ? "white" : "$textLight700"}
                fontWeight={activeTab === 'payments' ? "$bold" : "$normal"}
              >
                Pagamentos
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[
                styles.tabButton, 
                activeTab === 'classes' && { backgroundColor: '#0891b2' }
              ]}
              onPress={() => setActiveTab('classes')}
            >
              <Text 
                color={activeTab === 'classes' ? "white" : "$textLight700"}
                fontWeight={activeTab === 'classes' ? "$bold" : "$normal"}
              >
                Turmas
              </Text>
            </TouchableOpacity>
          </HStack>
          
          {/* Conteúdo da aba selecionada */}
          {activeTab === 'info' && (
            <VStack space="md">
              <Box bg="$backgroundLight50" p="$4" borderRadius="$lg">
                <Heading size="sm" mb="$2">Dados Pessoais</Heading>
                <VStack space="xs">
                  <HStack justifyContent="space-between">
                    <Text color="$textLight500">CPF:</Text>
                    <Text>{student.dadosPessoais.cpf}</Text>
                  </HStack>
                  <HStack justifyContent="space-between">
                    <Text color="$textLight500">Data de Nascimento:</Text>
                    <Text>{student.dadosPessoais.dataNascimento}</Text>
                  </HStack>
                  <HStack justifyContent="space-between">
                    <Text color="$textLight500">Gênero:</Text>
                    <Text>{student.dadosPessoais.genero}</Text>
                  </HStack>
                  <HStack justifyContent="space-between">
                    <Text color="$textLight500">Altura:</Text>
                    <Text>{student.dadosPessoais.altura}</Text>
                  </HStack>
                  <HStack justifyContent="space-between">
                    <Text color="$textLight500">Peso:</Text>
                    <Text>{student.dadosPessoais.peso}</Text>
                  </HStack>
                </VStack>
              </Box>
            </VStack>
          )}
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  tabButton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
  },
});

export default StudentDetailsScreen; 