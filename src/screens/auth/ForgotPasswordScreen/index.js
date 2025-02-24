import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperar Senha</Text>

      <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
        <Text style={styles.linkText}>Já tem um código?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.linkText}>Voltar para login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPasswordScreen; 