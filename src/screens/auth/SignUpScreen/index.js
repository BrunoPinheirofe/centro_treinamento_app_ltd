import { View, TouchableOpacity, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RegisterForm from "../../../forms/RegisterForm"
import styles from './styles';

const SignUpScreen = () => {
  const handleSubmit = (data) => {
    console.log('Dados do registro:', data);
    if (data.password !== data.confirmPassword) {
      alert('Erro:As senhas não coincidem',);
      return;
    }
    // Aqui você faria a chamada para sua API
  };

  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View style={styles.containerLogin}>
        <View style={styles.header}>
          <Text style={styles.textLogin}>Criar Conta</Text>
        </View>

        <RegisterForm onSubmit={handleSubmit} />

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.link}
        >
          <Text style={styles.linkText}>
            Já tem uma conta? <Text style={styles.linkHighlight}>Faça login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;