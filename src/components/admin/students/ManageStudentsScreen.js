import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Center, VStack, HStack, Box, Divider } from '@gluestack-ui/themed';
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { Ionicons } from '@expo/vector-icons';
import { Avatar, AvatarFallbackText, AvatarImage } from "@/components/ui/avatar";

const ManageStudentsScreen = ({ navigation }) => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('Todos');
  
  // Dados de exemplo - em um app real, estes viriam de uma API
  const studentsData = [
    { 
      id: 1, 
      nome: 'Ana Silva', 
      email: 'ana.silva@email.com', 
      telefone: '(11) 98765-4321', 
      status: 'Ativo', 
      plano: 'Premium',
      dataInicio: '10/01/2023',
      ultimoPagamento: '10/10/2023',
      imageUrl: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    { 
      id: 2, 
      nome: 'Carlos Oliveira', 
      email: 'carlos.oliveira@email.com', 
      telefone: '(11) 91234-5678', 
      status: 'Ativo', 
      plano: 'Básico',
      dataInicio: '15/02/2023',
      ultimoPagamento: '15/10/2023',
      imageUrl: 'https://randomuser.me/api/portraits/men/2.jpg'
    },
    { 
      id: 3, 
      nome: 'Mariana Costa', 
      email: 'mariana.costa@email.com', 
      telefone: '(11) 99876-5432', 
      status: 'Inativo', 
      plano: 'Premium',
      dataInicio: '05/03/2023',
      ultimoPagamento: '05/09/2023',
      imageUrl: 'https://randomuser.me/api/portraits/women/3.jpg'
    },
    { 
      id: 4, 
      nome: 'Pedro Santos', 
      email: 'pedro.santos@email.com', 
      telefone: '(11) 98765-1234', 
      status: 'Ativo', 
      plano: 'VIP',
      dataInicio: '20/01/2023',
      ultimoPagamento: '20/10/2023',
      imageUrl: 'https://randomuser.me/api/portraits/men/4.jpg'
    },
    { 
      id: 5, 
      nome: 'Juliana Lima', 
      email: 'juliana.lima@email.com', 
      telefone: '(11) 91234-9876', 
      status: 'Pendente', 
      plano: 'Básico',
      dataInicio: '12/04/2023',
      ultimoPagamento: '12/09/2023',
      imageUrl: 'https://randomuser.me/api/portraits/women/5.jpg'
    },
  ];
  
  // Filtros disponíveis
  const filters = ['Todos', 'Ativo', 'Inativo', 'Pendente'];
  
  useEffect(() => {
    // Simula carregamento de dados
    setStudents(studentsData);
    setFilteredStudents(studentsData);
  }, []);
  
  useEffect(() => {
    // Filtra alunos com base no texto de pesquisa e filtro selecionado
    let filtered = students;
    
    if (searchText) {
      filtered = filtered.filter(student => 
        student.nome.toLowerCase().includes(searchText.toLowerCase()) ||
        student.email.toLowerCase().includes(searchText.toLowerCase())
      );
    }
    
    if (selectedFilter !== 'Todos') {
      filtered = filtered.filter(student => student.status === selectedFilter);
    }
    
    setFilteredStudents(filtered);
  }, [searchText, selectedFilter, students]);
  
  const getStatusColor = (status) => {
    switch(status) {
      case 'Ativo': return '#10b981';
      case 'Inativo': return '#ef4444';
      case 'Pendente': return '#f59e0b';
      default: return '#6b7280';
    }
  };
  
  const renderStudentItem = ({ item }) => {
    return (
      <TouchableOpacity 
        onPress={() => navigation.navigate('StudentDetails', { studentId: item.id })}
      >
        <Box 
          bg="$backgroundLight50" 
          p="$4" 
          borderRadius="$md" 
          mb="$2"
          borderLeftWidth={4}
          borderLeftColor={getStatusColor(item.status)}
          shadow="$1"
        >
          <HStack space="md" alignItems="center">
            <Avatar size="md">
              <AvatarFallbackText>{item.nome}</AvatarFallbackText>
              <AvatarImage source={{ uri: item.imageUrl }} />
            </Avatar>
            
            <VStack flex={1}>
              <HStack justifyContent="space-between" alignItems="center">
                <Text fontWeight="$bold" fontSize="$md">{item.nome}</Text>
                <Box 
                  bg={getStatusColor(item.status)} 
                  px="$2" 
                  py="$1" 
                  borderRadius="$full"
                >
                  <Text color="white" fontSize="$xs">{item.status}</Text>
                </Box>
              </HStack>
              
              <Text fontSize="$sm" color="$textLight700">{item.email}</Text>
              <HStack justifyContent="space-between" mt="$1">
                <Text fontSize="$xs" color="$textLight500">Plano: {item.plano}</Text>
                <Text fontSize="$xs" color="$textLight500">Desde: {item.dataInicio}</Text>
              </HStack>
            </VStack>
          </HStack>
        </Box>
      </TouchableOpacity>
    );
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <VStack space="md" py="$4">
        <HStack justifyContent="space-between" alignItems="center" mb="$2">
          <Heading size="lg">Gerenciar Alunos</Heading>
          <Button 
            size="sm"
            leftIcon={<Ionicons name="add" size={16} color="white" />}
            onPress={() => navigation.navigate('AddStudent')}
          >
            Novo
          </Button>
        </HStack>
        
        {/* Barra de pesquisa */}
        <Box bg="$backgroundLight100" borderRadius="$lg" p="$2" mb="$2">
          <HStack alignItems="center">
            <Ionicons name="search" size={20} color="#6b7280" style={{ marginRight: 8 }} />
            <TextInput
              style={styles.searchInput}
              placeholder="Buscar aluno por nome ou email..."
              value={searchText}
              onChangeText={setSearchText}
            />
          </HStack>
        </Box>
        
        {/* Filtros */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScroll}>
          {filters.map(filter => (
            <TouchableOpacity 
              key={filter}
              onPress={() => setSelectedFilter(filter)}
            >
              <Box 
                bg={selectedFilter === filter ? "#0891b2" : "$backgroundLight100"} 
                px="$3" 
                py="$2" 
                borderRadius="$full"
                mr="$2"
              >
                <Text 
                  color={selectedFilter === filter ? "white" : "$textLight700"}
                  fontWeight={selectedFilter === filter ? "$bold" : "$normal"}
                >
                  {filter}
                </Text>
              </Box>
            </TouchableOpacity>
          ))}
        </ScrollView>
        
        {/* Estatísticas */}
        <HStack space="md" justifyContent="space-between" mb="$2">
          <Box bg="$backgroundLight100" p="$3" borderRadius="$md" flex={1} alignItems="center">
            <Text fontSize="$xs" color="$textLight500">Total</Text>
            <Text fontWeight="$bold" fontSize="$lg">{students.length}</Text>
          </Box>
          <Box bg="$backgroundLight100" p="$3" borderRadius="$md" flex={1} alignItems="center">
            <Text fontSize="$xs" color="$textLight500">Ativos</Text>
            <Text fontWeight="$bold" fontSize="$lg" color="#10b981">
              {students.filter(s => s.status === 'Ativo').length}
            </Text>
          </Box>
          <Box bg="$backgroundLight100" p="$3" borderRadius="$md" flex={1} alignItems="center">
            <Text fontSize="$xs" color="$textLight500">Inativos</Text>
            <Text fontWeight="$bold" fontSize="$lg" color="#ef4444">
              {students.filter(s => s.status === 'Inativo').length}
            </Text>
          </Box>
        </HStack>
        
        <Divider my="$2" />
        
        {/* Lista de alunos */}
        <FlatList
          data={filteredStudents}
          renderItem={renderStudentItem}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <Box bg="$backgroundLight100" p="$4" borderRadius="$md" alignItems="center">
              <Text>Nenhum aluno encontrado.</Text>
            </Box>
          }
        />
      </VStack>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  searchInput: {
    flex: 1,
    padding: 8,
  },
  filterScroll: {
    marginBottom: 10,
  }
});

export default ManageStudentsScreen; 