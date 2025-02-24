import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const SignUpScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.linkText}>
          Já tem conta? <Text style={styles.linkHighlight}>Faça login</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen; 