import { useState } from 'react';
import { View, Text, TouchableOpacity, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import  {Picker} from '@react-native-picker/picker';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState('ALUNO');

  const handleLogin = () => {
    // Simulação de login
    if(isLoggedIn) {
      // Redireciona conforme o tipo de usuário
      switch(userType) {
        case 'ADMIN':
          navigation.navigate('Main', { screen: 'AdminDashboard' });
          break;
        case 'TREINADOR':
          navigation.navigate('Main', { screen: 'TrainerDashboard' });
          break;
        default:
          navigation.navigate('Main', { screen: 'StudentDashboard' });
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Logado:</Text>
        <Switch
          value={isLoggedIn}
          onValueChange={(value) => setIsLoggedIn(value)}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isLoggedIn ? "#f5dd4b" : "#f4f3f4"}
        />
      </View>

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={userType}
          style={styles.picker}
          onValueChange={(itemValue) => setUserType(itemValue)}
        >
          <Picker.Item label="Aluno" value="ALUNO" />
          <Picker.Item label="Treinador" value="TREINADOR" />
          <Picker.Item label="Administrador" value="ADMIN" />
        </Picker>
      </View>

      <TouchableOpacity 
        style={styles.loginButton} 
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>
          {isLoggedIn ? 'Entrar' : 'Simular Login'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.linkText}>
          Não tem conta? <Text style={styles.linkHighlight}>Cadastre-se</Text>
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.linkText}>Esqueceu a senha?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen; 