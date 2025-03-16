import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Center, VStack, HStack, Box, Divider } from '@gluestack-ui/themed';
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { useAuth } from '../../../contexts/AuthContext';
import { Ionicons } from '@expo/vector-icons';

const AdminDashboardScreen = ({ navigation }) => {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    totalAlunos: 0,
    totalInstrutores: 0,
    totalAdmins: 0,
    totalTurmas: 0,
    alunosAtivos: 0,
    alunosInativos: 0,
    pagamentosPendentes: 0
  });
  
  useEffect(() => {
    // Simulação de carregamento de dados
    // Em um app real, você faria uma chamada à API
    setStats({
      totalAlunos: 245,
      totalInstrutores: 12,
      totalAdmins: 3,
      totalTurmas: 18,
      alunosAtivos: 198,
      alunosInativos: 47,
      pagamentosPendentes: 32
    });
  }, []);
  
  const menuItems = [
    { 
      title: 'Gerenciar Alunos', 
      icon: 'people', 
      color: '#0891b2', 
      route: 'ManageStudents',
      count: stats.totalAlunos
    },
    { 
      title: 'Gerenciar Instrutores', 
      icon: 'fitness', 
      color: '#8b5cf6', 
      route: 'ManageInstructors',
      count: stats.totalInstrutores
    },
    { 
      title: 'Gerenciar Administradores', 
      icon: 'shield', 
      color: '#f59e0b', 
      route: 'ManageAdmins',
      count: stats.totalAdmins
    },
    { 
      title: 'Gerenciar Turmas', 
      icon: 'calendar', 
      color: '#10b981', 
      route: 'ManageClasses',
      count: stats.totalTurmas
    },
    { 
      title: 'Relatórios', 
      icon: 'bar-chart', 
      color: '#ef4444', 
      route: 'Reports',
      count: null
    },
    { 
      title: 'Configurações', 
      icon: 'settings', 
      color: '#6b7280', 
      route: 'AdminSettings',
      count: null
    },
  ];
  
  const renderMenuItem = (item, index) => {
    return (
      <TouchableOpacity 
        key={index} 
        style={styles.menuItem}
        onPress={() => navigation.navigate(item.route)}
      >
        <Box 
          bg={item.color} 
          p="$4" 
          borderRadius="$lg" 
          width="100%"
          shadow="$2"
        >
          <HStack justifyContent="space-between" alignItems="center">
            <VStack>
              <Text color="white" fontWeight="$bold" fontSize="$lg">{item.title}</Text>
              {item.count !== null && (
                <Text color="white" opacity={0.8}>{item.count} registros</Text>
              )}
            </VStack>
            <Ionicons name={item.icon} size={32} color="white" />
          </HStack>
        </Box>
      </TouchableOpacity>
    );
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space="md" py="$4">
          <HStack justifyContent="space-between" alignItems="center" mb="$4">
            <VStack>
              <Heading size="xl">Painel Administrativo</Heading>
              <Text color="$textLight500">Bem-vindo, {user.nome}</Text>
            </VStack>
            <TouchableOpacity onPress={() => navigation.navigate('AdminProfile')}>
              <Box bg="$backgroundLight100" p="$2" borderRadius="$full">
                <Ionicons name="person-circle" size={32} color="#0891b2" />
              </Box>
            </TouchableOpacity>
          </HStack>
          
          {/* Resumo estatístico */}
          <Box bg="$backgroundLight50" p="$4" borderRadius="$lg" mb="$4" shadow="$1">
            <Heading size="md" mb="$2">Resumo</Heading>
            <HStack justifyContent="space-between" mb="$2">
              <Box bg="$backgroundLight100" p="$3" borderRadius="$md" flex={1} mr="$2">
                <Text fontSize="$xs" color="$textLight500">Alunos Ativos</Text>
                <Text fontWeight="$bold" fontSize="$lg" color="#10b981">{stats.alunosAtivos}</Text>
              </Box>
              <Box bg="$backgroundLight100" p="$3" borderRadius="$md" flex={1}>
                <Text fontSize="$xs" color="$textLight500">Alunos Inativos</Text>
                <Text fontWeight="$bold" fontSize="$lg" color="#ef4444">{stats.alunosInativos}</Text>
              </Box>
            </HStack>
            <Box bg="$backgroundLight100" p="$3" borderRadius="$md" mb="$2">
              <HStack justifyContent="space-between" alignItems="center">
                <Text fontSize="$xs" color="$textLight500">Pagamentos Pendentes</Text>
                <Text fontWeight="$bold" fontSize="$lg" color="#f59e0b">{stats.pagamentosPendentes}</Text>
              </HStack>
            </Box>
          </Box>
          
          {/* Menu de opções */}
          <Heading size="md" mb="$2">Gerenciamento</Heading>
          <View style={styles.menuGrid}>
            {menuItems.map(renderMenuItem)}
          </View>
          
          {/* Ações rápidas */}
          <Heading size="md" mb="$2" mt="$4">Ações Rápidas</Heading>
          <VStack space="sm">
            <Button 
              leftIcon={<Ionicons name="add-circle" size={20} color="white" />}
              onPress={() => navigation.navigate('AddStudent')}
            >
              Adicionar Novo Aluno
            </Button>
            <Button 
              leftIcon={<Ionicons name="add-circle" size={20} color="white" />}
              onPress={() => navigation.navigate('AddClass')}
              variant="outline"
            >
              Criar Nova Turma
            </Button>
            <Button 
              leftIcon={<Ionicons name="document-text" size={20} color="white" />}
              onPress={() => navigation.navigate('PaymentReport')}
              variant="subtle"
            >
              Relatório de Pagamentos
            </Button>
          </VStack>
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
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  menuItem: {
    width: '48%',
    marginBottom: 16,
  }
});

export default AdminDashboardScreen; 